
import { View, StyleSheet, Animated, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';




interface Props {
    dato: any; 
}





export const TarjetaSencilla = ({ dato }: Props) => {


    const { primary, error, opaco, background, disabledColor } = useThemeColors();

{/* <TouchableOpacity style={{ flexDirection:'row', padding:10, alignItems:'center' }}
                // onPress={() => router.push({ pathname: '/inscripcionesclub/[id]', 
                // params: { id:datos.categoria_temporada._id, entidad:datos.id } })}
            > */}

    return (

        <Animated.View style={[{backgroundColor:background, borderBottomColor:opaco}, styles.cardContainer]}>
            <View style={{ flexDirection:'row', padding:10, alignItems:'center' }}
                // onPress={() => router.push({ pathname: '/inscripcionesclub/[id]', 
                // params: { id:datos.categoria_temporada._id, entidad:datos.id } })}
            >
                <View style={{position:'relative'}}>
                    <Image resizeMode="cover" 
                    // source={ datos.img 
                    //     ? { uri: `${url}/uploads/${carpeta}/${datos.img}` } 
                    //     : require('../../../assets/images/user/no-img.webp')}
                    source={require('../../../assets/images/user/no-img.webp')}
                        style={[styles.avatar, {borderColor: opaco}]}
                    />
                </View>

                <View style={styles.infoContainer}>

                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={1}>
                            David Alejandro Messi
                            {/* {datos.categoria_temporada?.competencia?.nombre} */}
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            {/* {`${datos.entidad.nombre}`} */}
                            COPA MUNDIAL DE COPA RUTA DORADA CUNDINAMARCA
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            {/* {`${datos.entidad.nombre}`} */}
                            SEMIPROFESIONAL - FASE 1
                        </ThemedText>
                    </View>
                
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Ionicons name="hourglass" size={16} color="#FFD700" />
                            <ThemedText style={styles.statText}>10</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="calendar-number" size={16} color="#FFD700" />
                            <ThemedText style={styles.statText}>002</ThemedText>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="man" size={18} color={primary} />
                        </View>
                    </View>
                </View>


                {/* //   onPress={onDelete} */}
                <TouchableOpacity style={styles.deleteButton}>
                    <Ionicons size={21} name="trash" color={error} />
                </TouchableOpacity>
            </View>
        </Animated.View>

    )
}


// {/* <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
// {/* {`${datos.categoria_temporada?.temporada?.nombre} - ${datos.patin}`} */}
// CATEGORIA 9 - NUMERO 100
// </ThemedText> */}





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
        fontSize: 15,
        fontWeight: '900',
        flex:1,
        textAlign: 'center',
        alignSelf: 'stretch',
    },

    details: {
        fontSize: 12,
        fontWeight: '500',
        alignSelf: 'stretch',
        textAlign: 'center',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent:'center',
        gap: 12,
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

    deleteButton: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});