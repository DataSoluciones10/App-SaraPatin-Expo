import { useRef, useState } from 'react';
import { router } from 'expo-router';

import { Alert, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { BotonCamaraUser, ThemedText } from '@/presentation/components';
import * as ImagePicker from 'expo-image-picker';
import { useImagenStore } from '@/presentation/stores';
import { images } from '../../../presentation/helpers/importar-img';





export default function CameraScreen() {


    const { valorImagen } = useImagenStore();
    const { primary, background } = useThemeColors();
    const dimensions = useWindowDimensions();


    const cameraRef = useRef<CameraView>(null);
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();

    const [facing, setFacing] = useState<CameraType>('back');
    const [selectedImage, setSelectedImage] = useState<string>();



    const onRequestPermissions = async () => {
        try {
        const { status: cameraPermissionStatus } =
            await requestCameraPermission();
        if (cameraPermissionStatus !== 'granted') {
            Alert.alert(
            'Lo siento',
            'Necesitamos permiso a la cámara para tomar fotos'
            );
            return;
        }

        const { status: mediaPermissionStatus } = await requestMediaPermission();
        if (mediaPermissionStatus !== 'granted') {
            Alert.alert(
            'Lo siento',
            'Necesitamos permiso a la galería para guardar las imágenes'
            );
            return;
        }
        } catch (error) {
        console.log(error);
        Alert.alert('Error', 'Algo salio mal con los permisos');
        }
    };


    // Camera permissions are still loading.
    if (!cameraPermission) { return <View /> }



    //? Camera dar permisos de camara y galeria
    if (!cameraPermission.granted) {
        return (
        <View style={{ ...styles.container, marginHorizontal:30, alignItems:'center' }}>
            <ThemedText type="h3" style={{textAlign:'center',  fontWeight:'bold'}}>
                Necesitamos permiso para usar la cámara y la galería
            </ThemedText>
            <TouchableOpacity onPress={ onRequestPermissions } 
                style={{backgroundColor: primary, paddingHorizontal:10, paddingVertical:7, borderRadius:5, marginTop:7}}
            >
                <Text style={{color:'white'}}>Solicitar Permiso</Text>
            </TouchableOpacity>
        </View>
        );
    }





    //? METODOS DE CAMARA
    // RETURN
    const onReturnCancel = () => {
        router.dismiss();
    };


    // ENTRAR A LA GALERIA
    const onPickImages = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            quality: 0.5,
            aspect: [4, 3],
            allowsEditing: true,
            // allowsMultipleSelection: true,
            // selectionLimit: 5,
            allowsMultipleSelection: false,
        });

        if (result.canceled) return;

        result.assets.forEach((asset:any) => { valorImagen(asset.uri) });

        router.dismiss();
    };


    // CAMBIO DE CAMARA FRONTAL O FRENTE
    const toggleCameraFacing = () => {
        setFacing((current) => (current === 'back' ? 'front' : 'back'));
    }


    // TOMAR FOTO
    const onShutterButtonPress = async () => {
        if (!cameraRef.current) return;

        const picture = await cameraRef.current.takePictureAsync({ quality: 0.7 });

        if (!picture?.uri) return;

        setSelectedImage(picture.uri);

        //guardar imagen
    };


    // CONFIRMAR FOTO
    const onPictureAccepted = async () => {
        if (!selectedImage) return;
        await MediaLibrary.createAssetAsync(selectedImage);
        valorImagen(selectedImage);
        router.dismiss();
    };


    // LIMPIAR IMAGEN
    const onRetakePhoto = () => {
        setSelectedImage(undefined);
    };



    
    if (selectedImage) {
        return (
        <View style={styles.container}>
            <Image source={{ uri: selectedImage }} style={{flex:1}} />

            <BotonCamaraUser onPress={ onPictureAccepted } iconName="checkmark-outline"
                style={[ styles.confirmarFoto, {left:dimensions.width / 2 - 32, borderColor:primary} ]}
            />

            <BotonCamaraUser style={ styles.flipCameraButton }
                onPress={ onRetakePhoto } iconName="close-outline"
            />

            <BotonCamaraUser style={styles.returnCancelButton}
                onPress={ onReturnCancel } iconName="arrow-back-outline"
            />
        </View>
        );
    }



    return (
        <View style={styles.container}>
            <CameraView ref={cameraRef} style={{flex:1}} facing={facing}>

                <BotonCamaraUser onPress={ onShutterButtonPress } 
                    style={[ styles.shutterButton, {left:dimensions.width / 2 - 32, borderColor:primary} ]}
                />

                <BotonCamaraUser style={styles.flipCameraButton}
                    onPress={ toggleCameraFacing } iconName="camera-reverse-outline"
                />

                <BotonCamaraUser style={styles.galleryButton}
                    onPress={ onPickImages } iconName="images-outline"
                />

                <BotonCamaraUser style={styles.returnCancelButton}
                    onPress={ onReturnCancel } iconName="arrow-back-outline"
                />

            </CameraView>
        </View>
    );

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    flipCameraButton: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#17202A',
        position: 'absolute',
        bottom: 40,
        right: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },

    shutterButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: 'white',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
    },

    confirmarFoto: {
        position: 'absolute',
        bottom: 30,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#17202A',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },


    galleryButton: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#17202A',
        position: 'absolute',
        bottom: 40,
        left: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },

    returnCancelButton: {
        width: 50,
        height: 50,
        borderRadius: 32,
        backgroundColor: '#17202A',
        position: 'absolute',
        top: 40,
        left: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
});