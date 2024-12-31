
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';



interface Props {
    dato: any; 
    onPress: any;
}





export const TarjetaSencilla = ({ dato, onPress }: Props) => {


    const { error, opaco, background, disabledColor } = useThemeColors();


    return (

        <Animated.View style={[{backgroundColor:background, borderBottomColor:opaco}, styles.cardContainer]}>

            <View style={{ flexDirection:'row', padding:10, alignItems:'center' }}>
                <View style={[styles.containerAvatar, {borderColor:opaco}]}>
                    <ThemedText type='semi-bold' 
                        style={[ styles.number, {fontSize: (dato?.numero_competencia) ? 17 : 12},
                        !dato?.numero_competencia && styles.placeholder ]}
                    >
                        {dato?.numero_competencia.numero_competencia || 'Número no generado'}
                    </ThemedText>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.headerContainer}>
                        <ThemedText style={styles.name} numberOfLines={1}>
                            { dato?.deportista.nombre }
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            { dato?.categoria_temporada?.competencia.nombre }
                        </ThemedText>
                        <ThemedText style={[styles.details, {color:disabledColor}]} numberOfLines={1}>
                            {`${dato?.categoria_temporada?.temporada.nombre} - ${dato?.patin}`}
                        </ThemedText>

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
        shadowColor: '#000',
        elevation:5,
        borderBottomWidth:1, 
        marginBottom:1,
        width:'100%'
    },

    containerAvatar: {
        width: 65,
        height: 65,
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
        fontSize: 11,
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