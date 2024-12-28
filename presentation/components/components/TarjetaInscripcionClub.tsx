
import { router } from 'expo-router';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';

const url = process.env.EXPO_PUBLIC_API_URL_ANDROID;


interface Props {
    datos:any
    carpeta?: string;
}




export const TarjetaInscripcionClub = ({ datos, carpeta='inscripciones' }: Props) => {
    

    const { primary, opaco, background, disabledColor } = useThemeColors();



    return (

        // entering={FadeIn.duration(400)}
        <Animated.View style={[{backgroundColor:background, borderBottomColor:opaco}, styles.cardContainer]}>
            <TouchableOpacity style={{ flexDirection:'row', padding:10, alignItems:'center' }}
                onPress={() => router.push({ pathname: '/inscripcionesclub/[id]', 
                params: { id:datos.categoria_temporada._id, entidad:datos.id } })}
            >
                <View style={{position:'relative'}}>
                    <Image resizeMode="cover" source={ datos.img 
                        ? { uri: `${url}/uploads/${carpeta}/${datos.img}` } 
                        : require('../../../assets/images/user/no-img.webp')}
                        style={[styles.avatar, {borderColor: opaco}]}
                    />
                </View>

                <View style={styles.infoContainer}>

                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={1}>
                            {datos.categoria_temporada?.competencia?.nombre}
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            {`${datos.categoria_temporada?.temporada?.nombre} - ${datos.patin}`}
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            {`${datos.entidad.nombre}`}
                        </ThemedText>
                    </View>
                    
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Ionicons name="trophy" size={16} color="#FFD700" />
                            <ThemedText style={styles.statText}>0</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="trophy" size={16} color="#A9A9A9" />
                            <ThemedText style={styles.statText}>0</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="trophy" size={16} color="#CD7F32" />
                            <ThemedText style={styles.statText}>0</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="people-circle-outline" size={18} color={primary} />
                            <ThemedText style={[styles.statText]}>{ datos.deportistas || 0 }</ThemedText>
                        </View>
                    </View>
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