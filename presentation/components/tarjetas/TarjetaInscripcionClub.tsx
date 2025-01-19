
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';

const url = process.env.EXPO_PUBLIC_API_URL_DESARROLLO;


interface Props {
    img: string;
    titulo: string;
    subtitulo1: string;
    isClub:boolean;
    onPress:any;
    iconos: boolean;
    oro?: string;
    plata?: string;
    bronce?: string;
    deportistas?: string;
    subtitulo2?: string;
    carpeta?: string;
    index?: number;
}




export const TarjetaInscripcionClub = ({ img, titulo, subtitulo1, subtitulo2, oro, plata, iconos=true, 
    bronce, deportistas, carpeta='inscripciones', onPress, isClub, index }: Props) => {


    const { primary, secondary, opaco, background, disabledColor } = useThemeColors();


    return (

        <Animated.View style={[{backgroundColor:(isClub) ? secondary : background, borderBottomColor:opaco}, styles.cardContainer]}>
            <TouchableOpacity style={styles.contenedorTodo} onPress={ onPress }>

                <View style={styles.rankAndImageContainer}>
                    {(index) &&
                    <View style={[styles.rankBadge, { backgroundColor: primary }]}>
                        <ThemedText style={styles.rankText}>#{index}</ThemedText>
                    </View>
                    }
                    <Image resizeMode="cover" source={ img 
                        ? { uri: `${url}/uploads/${carpeta}/${img}` } 
                        : require('../../../assets/images/user/no-img.webp')}
                        style={[styles.avatar, {borderColor: primary}]}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={2}>
                            { titulo }
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:(isClub) ? opaco : disabledColor}]} numberOfLines={1}>
                            { subtitulo1 }
                        </ThemedText>
                        {(!index) &&
                        <ThemedText style={[styles.details, {color:(isClub) ? opaco : disabledColor}]} numberOfLines={1}>
                            { subtitulo2 }
                        </ThemedText>
                        }
                    </View>
                    
                    {(iconos) &&
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Ionicons name="trophy" size={16} color="#FFD700" />
                            <ThemedText style={styles.statText}>{ oro || 0 }</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="trophy" size={16} color='#A9A9A9' />
                            <ThemedText style={styles.statText}>{ plata || 0 }</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="trophy" size={16} color="#CD7F32" />
                            <ThemedText style={styles.statText}>{ bronce || 0 }</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="people-circle-outline" size={18} color={primary} />
                            <ThemedText style={[styles.statText]}>{ deportistas || 0 }</ThemedText>
                        </View>
                    </View>
                    }
                    
                </View>
            </TouchableOpacity>
        </Animated.View>

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

    contenedorTodo: {
        flexDirection:'row', 
        paddingVertical:10, 
        paddingHorizontal: 17, 
        alignItems:'center'
    },

    rankAndImageContainer: {
        position: 'relative',
        marginRight: 12,
    },

    rankBadge: {
        position: 'absolute',
        top: -5,
        left: -5,
        zIndex: 1,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    rankText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 10,
        borderWidth: 2,
    },

    infoContainer: {
        flex: 1,
        marginLeft: 5,
        justifyContent: 'space-between',
    },

    headerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width:'100%',
    },

    name: {
        fontSize: 14,
        fontWeight: '900',
        flex:1,
        textAlign:'center',
        alignSelf: 'stretch',
    },

    details: {
        fontSize: 12,
        fontWeight: '500',
        textAlign:'center',
        alignSelf: 'stretch',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        gap: 15,
        width:'100%',
    },

    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        gap: 1.5,
    },

    statText: {
        fontSize: 14,
        fontWeight: '600',
    },

});