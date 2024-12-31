
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';

const url = process.env.EXPO_PUBLIC_API_URL_ANDROID;


interface Props {
    img: string;
    titulo: string;
    subtitulo1: string;
    isClub:boolean;
    onPress:any;
    oro?: string;
    plata?: string;
    bronce?: string;
    deportistas?: string;
    subtitulo2?: string;
    carpeta?: string;
    index?: number;
}




export const TarjetaInscripcionClub = ({ img, titulo, subtitulo1, subtitulo2, oro, plata, 
    bronce, deportistas, carpeta='inscripciones', onPress, isClub, index }: Props) => {


    const { primary, secondary, opaco, background, disabledColor } = useThemeColors();


    return (

        <Animated.View style={[{backgroundColor:(isClub) ? secondary : background, borderBottomColor:opaco}, styles.cardContainer]}>
            <TouchableOpacity style={{flexDirection:'row', padding:10, alignItems:'center'}} onPress={ onPress }>

                <View style={{position:'relative'}}>
                    <Image resizeMode="cover" source={ img 
                        ? { uri: `${url}/uploads/${carpeta}/${img}` } 
                        : require('../../../assets/images/user/no-img.webp')}
                        style={[styles.avatar, {borderColor: opaco}]}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={1}>
                            { titulo }
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:(isClub) ? opaco : disabledColor}]} numberOfLines={1}>
                            { subtitulo1 }
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:(isClub) ? opaco : disabledColor}]} numberOfLines={1}>
                            { subtitulo2 }
                        </ThemedText>
                    </View>

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
                </View>

                {(index) &&
                <View style={[styles.posicion]}>
                    <Text style={{color:opaco, fontWeight:'700', fontSize:25}}>
                        { index }
                    </Text>
                </View>
                }

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

    posicion: {
        width: 40,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: '60%',
        transform: [{ translateY: -25 }]
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