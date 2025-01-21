
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';
import { API_URLS } from '@/core/config/apiconfig';






export const TarjetasDePruebas = ({ dato, isDeportista, index }:any) => {


    const { primary, opaco, secondary, background, disabledColor } = useThemeColors();


    return (
        <TouchableOpacity style={[styles.cardContainer, { borderTopWidth: index === 1 ? 1 : 0,
            backgroundColor:(isDeportista) ? secondary  : background, borderColor:opaco}
        ]}>
            <View style={{ flexDirection:'row', paddingVertical:10, paddingHorizontal:15, alignItems:'center' }}>

                <View style={[styles.containerAvatar, {borderColor:primary}]}>
                    {(dato.faltas.length > 0) &&
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{ dato.faltas.length }</Text>
                    </View>
                    }
                    
                    <Image style={styles.avatarImage}
                        source={dato.deportista.img 
                        ? { uri: `${API_URLS.base_url}/uploads/usuarios/${dato.deportista.img}` } 
                        : require('../../../assets/images/user/no-img.webp')}
                    /> 
                </View>

                <View style={[styles.infoContainer]}>
                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={1}>
                            { dato?.deportista.nombre } 
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:(isDeportista) ? opaco : disabledColor}]} numberOfLines={2}>
                            { dato.club_inscrito?.entidad?.nombre } 
                        </ThemedText>

                        <View style={styles.statsContainer}>
                            <View style={[styles.statItem]}>
                                <Ionicons name="stopwatch" size={16} color={ primary } />
                                <ThemedText style={[styles.statText]}>{ dato.tiempo }</ThemedText>
                            </View>
                            <View style={[styles.statItem]}>
                                <Ionicons name="clipboard" size={16} color={ primary } />
                                <ThemedText style={[styles.statText]}>{dato.numero_competencia.numero_competencia}</ThemedText>
                            </View>
                            <View style={[styles.statItem]}>
                                <Ionicons name="medal" size={16} color={ primary } />
                                {(dato?.posicion)
                                ?   <ThemedText style={[styles.statText]}>{ dato.posicion }</ThemedText>
                                :   <ThemedText style={[styles.statText]}>{ index }</ThemedText>
                                // :   <Ionicons name="ban" size={16} color='red' />
                                }
                            </View>
                        </View>

                    </View>
                </View>

            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    cardContainer: {
        // shadowColor: '#000',
        // elevation:5,
        borderBottomWidth:1, 
        marginBottom:1,
        width:'100%'
    },

    containerAvatar: {
        borderRadius: 30,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        position:'relative',
        height: 65,
        width: 65,
    },

    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 30,
        borderWidth: 1,
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
        fontSize: 16,
        fontWeight: '900',
        textAlign: 'center',
        alignSelf: 'stretch',
    },

    details: {
        fontWeight: '500',
        alignSelf: 'stretch',
        textAlign: 'center',
        fontSize: 13
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 5,
    },

    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        borderRadius: 6,
        gap: 3,
    },

    statText: {
        fontSize: 15,
        fontWeight: '600',
    },

});

