
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';

const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;



export const TarjetasDePruebas = ({ dato, isDeportista }:any) => {


    const { opaco, secondary, background, disabledColor } = useThemeColors();



    return (
        <TouchableOpacity style={[styles.cardContainer,
            {backgroundColor:(isDeportista) ? secondary : background, borderBottomColor:opaco}
        ]}>
            <View style={{ flexDirection:'row', padding:10, alignItems:'center' }}>

                <View style={[styles.containerAvatar, {borderColor:opaco}]}>
                    {(dato.faltas.length > 0) &&
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{ dato.faltas.length }</Text>
                    </View>
                    }
                    
                    <Image
                        source={dato.img ? { uri: `${url}/uploads/usuarios/${dato.img}` } : require('../../../assets/images/user/no-img.webp')}
                        style={styles.avatarImage}
                    /> 
                </View>

                <View style={[styles.infoContainer]}>
                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={1}>
                            { dato?.deportista.nombre }
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={1}>
                            { dato.club_inscrito?.entidad?.nombre }
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={1}>
                            Numero Competencia: { dato.numero_competencia.numero_competencia }
                        </ThemedText>

                    </View>
                </View>
                
                <View style={{flex:1, alignItems:'flex-end'}}>
                    <ThemedText style={[styles.details, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={1}>
                        { dato.tiempo }
                    </ThemedText>

                    <ThemedText style={[styles.details, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={1}>
                        Posición {dato.posicion}
                    </ThemedText>
                </View>

            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    cardContainer: {
        shadowColor: '#000',
        elevation:5,
        borderBottomWidth:1, 
        marginBottom:1,
        width:'100%'
    },

    containerAvatar: {
        borderRadius: 30,
        borderWidth: 2,
        display: 'flex',
        height: 60,
        justifyContent: 'center',
        position:'relative',
        width: 60,
    },

    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 30,
    },

    badge: {
        position: 'absolute',
        top: -5,
        right: -7,
        backgroundColor: '#FF3B30',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        zIndex: 100,
        minWidth: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },

    badgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },

    infoContainer: {
        flex: 3, 
        justifyContent: 'space-between',
        paddingHorizontal:10
    },

    headerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
    },

    name: {
        flex:1,
        fontSize: 15,
        fontWeight: '900',
        textAlign: 'center',
        alignSelf: 'stretch',
    },

    details: {
        fontWeight: '500',
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 12.5
    },

    deleteButton: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

});