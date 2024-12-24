
import { Image, Pressable } from 'react-native';
import { router } from 'expo-router';

import { images } from '@/presentation/helpers';
import { ThemedView } from '../textos/ThemedView';
import { useImagenStore } from '@/presentation/stores';
const url = process.env.EXPO_PUBLIC_API_URL_ANDROID;


interface Props {
    titulo?: string;
    size?: number; 
}



export const AvatarScreen = ({ titulo, size=100 }: Props) => {


    const { imagen } = useImagenStore();

    // console.log({imagen})

    const imageSource = 
    typeof imagen === 'string'
        ? imagen.startsWith('file://')
            ? { uri: imagen } 
            : { uri: `${url}/uploads/${titulo}/${imagen}` } 
        : imagen instanceof File
        ? { uri: URL.createObjectURL(imagen) }
        : images.noimg; 




    const navegarCamara = () => {
        router.push('/camarauser');
    }



    return (
        <ThemedView  style={{flex:1, height: size, marginHorizontal:10, marginTop:20,  
            justifyContent:'center', alignItems:'center', marginBottom:25}}
        >
            <Pressable style={{ width:size, height:size, borderRadius:size / 2 }} 
                onPress={ navegarCamara } className="active:opacity-70"
            >
                <Image
                    source={imageSource}
                    // source={imageSource ? { uri: imageSource } : images.noimg } 
                    style={{ width: '100%', height: '100%', borderRadius: size / 2 }}
                    resizeMode="cover"
                />
            </Pressable>

        </ThemedView>
    )
}