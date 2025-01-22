
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme } from 'react-native'
import { ThemedText } from '../textos/ThemedText';
import { API_URLS } from '@/core/config/apiconfig';





export const TarjetaPruebasGrupos = ({ dato, entidad, index}:any) => {


    const { primary, opaco, disabledColor, secondary } = useThemeColors();
    const colorScheme  = useColorScheme();
    const isDarkMode = colorScheme === 'dark';


    const darkGradients = {
        primary: [
            `${primary}20`,
            `${primary}30`,
            `${primary}40` 
        ],
        background: [
            'rgba(24, 24, 27, 0.9)', 
            'rgba(39, 39, 42, 0.95)',
            'rgba(63, 63, 70, 0.9)'  
        ]
    };
    
    const lightGradients = {
        primary: [
            `${primary}10`, 
            `${primary}20`, 
            `${primary}25`  
        ],
        background: [
            'rgba(253, 253, 255, 0.9)',    
            'rgba(250, 251, 254, 0.95)',   
            'rgba(245, 246, 252, 0.9)'     
        ]
    };
    
    const currentGradient:any = isDarkMode ? darkGradients : lightGradients;


    return (

        <View style={[styles.container,{borderColor: opaco}]}>
            <LinearGradient colors={currentGradient.background} style={styles.backgroundGradient}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
            >
                <View style={[styles.numeroContainer, {backgroundColor: primary}]}>
                    <Text style={styles.numeroText}>{ index }</Text>
                </View>

                <View style={[styles.header, {borderBottomColor: primary}]}>
                    <ThemedText style={styles.titulo}>{`GRUPO ${ dato.bateria }`}</ThemedText>
                    <Text style={[styles.tiempo, {color: disabledColor}]}>{`Tiempo: ${dato.tiempo}`}</Text>
                </View>

                <View style={styles.deportistasContainer}>
                    {dato?.deportistas.map((d:any) => (
                    <TouchableOpacity key={d.id} style={[styles.deportistaCard,
                        { backgroundColor: (entidad === d.club_inscrito?._id) ? secondary : '', borderColor: opaco } ]}
                    >
                        <View style={styles.numeroSeccion}>
                            <ThemedText style={{fontSize:11, color: opaco}}>Número</ThemedText>
                            <ThemedText type="semi-bold" style={{marginTop:-1}}>
                                { d.numero_competencia.numero_competencia }
                            </ThemedText>
                        </View>
        
                        <View style={{flex:1, paddingHorizontal:10, flexDirection:'column'}}>
                            <ThemedText type="semi-bold" style={{fontSize:14, textAlign:'center', alignSelf:'stretch'}} numberOfLines={1}>
                                { d.deportista.nombre }
                            </ThemedText>
                            <ThemedText numberOfLines={1} style={{fontSize:12, textAlign:'center', color:opaco}}>
                                { d.club_inscrito.entidad.nombre }
                            </ThemedText>
                        </View>
        
                        <View style={styles.numeroSeccion}>
                            <Image source={{uri: `${API_URLS.base_url}/uploads/deportistas/${d.deportista._id}`}}
                                style={styles.foto}
                            />
                        </View>
                    </TouchableOpacity>
                    ))}
                </View>
            </LinearGradient>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 8,
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
    },

    backgroundGradient: {
        borderRadius: 16,
        padding: 10,
        position: 'relative',
    },

    numeroContainer: {
        position: 'absolute',
        top: -5,
        left: -5,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    numeroText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },

    header: {
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        marginBottom: 1,
    },

    tiempo: {
        fontSize: 16,
        letterSpacing: 1,
    },

    deportistasContainer: {
        marginTop: 15,
        gap: 10,
    },

    deportistaCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
    },

    numeroSeccion: {
        width: '18%',
        alignItems: 'center',
    },

    nombreDeportista: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },

    foto: {
        width: 45,
        height: 45,
        borderRadius: 5,
    },
});