
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';



interface Props {
    dato: any; 
    onPress: any;
}





export const TarjetaSencilla = ({ dato, onPress }: Props) => {


    const { primary, error, opaco, background, disabledColor } = useThemeColors();


    return (

        <Animated.View style={[{backgroundColor:background, borderColor:opaco}, styles.cardContainer]}>

            <View style={{ flexDirection:'row', padding:10, alignItems:'center' }}>
                <View style={[styles.containerAvatar, {borderColor:primary}]}>
                    {(dato?.numero_competencia)
                    ?   <ThemedText type='semi-bold' style={styles.number}>
                            { dato?.numero_competencia.numero_competencia }
                        </ThemedText>
                    :   <ThemedText type='semi-bold' style={styles.placeholder}>
                            Número no generado
                        </ThemedText>
                    }
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={2}>
                            { dato?.deportista.nombre }
                        </ThemedText>
                        {/* <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            {`${dato?.categoria_temporada?.temporada.nombre} - ${dato?.patin}`}
                        </ThemedText> */}
                        <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            {`${dato?.rama} - CATEGORIA ${isNaN(Number(dato.categoria)) ? dato.categoria.toUpperCase() : dato.categoria}`}
                        </ThemedText>
                    </View>
                </View>

                <TouchableOpacity style={styles.deleteButton} onPress={ () => onPress(dato.id) }>
                    <Ionicons size={21} name="trash" color={error} />
                </TouchableOpacity>
            </View>
        </Animated.View>

    )
}


const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 12, 
        borderWidth: 1,
        elevation:5,
        marginBottom: 7,
        shadowColor: '#000',
        width:'100%',
        paddingHorizontal: 10
    },

    containerAvatar: {
        width: 55,
        height: 55,
        borderRadius: 10,
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },

    number: {
        fontSize: 17,
    },

    placeholder: {
        fontSize: 10,
        color: 'red',
        textAlign: 'center',
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
        fontSize: 11,
        fontWeight: '500',
        alignSelf: 'stretch',
        textAlign: 'center',
    },

    deleteButton: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});