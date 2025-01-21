
import { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, FlatList, StyleSheet } from 'react-native';
import { MensajeListaVacia, TarjetasDeFondoPuntos } from '@/presentation/components';

import { useCategoriasTemporadaStore, useClasificatoriaStore } from '@/presentation/stores';
import { useSocketFondoPuntos } from '@/presentation/hooks';
import { ThemedText } from '../../components/textos/ThemedText';




export const VerPruebaFondoPuntos = () => {

    const { id, entidad } = useLocalSearchParams();
    const { activeCategoriaTemporada } = useCategoriasTemporadaStore();
    const { clasificatoriasXPuntos, startListadoPuntosXFiltros, datosClasificatoriaPuntos } = useClasificatoriaStore();
    


    useEffect(() => {
        if( id && activeCategoriaTemporada ){
            startListadoPuntosXFiltros({
                id, rama: activeCategoriaTemporada.rama_activa,
                categoria: activeCategoriaTemporada.categoria_activa,
                prueba: activeCategoriaTemporada.prueba_activa,
            });
        }
        return () => datosClasificatoriaPuntos([]);
    }, [id, activeCategoriaTemporada])


    // Sockets de Pruebas X Tiempo
    useSocketFondoPuntos(`${id}`);



    return (
        <View style={{ flex: 1 }}>
            
            <View style={styles.contenedor}>
                <ThemedText type="h3" style={[styles.labelText]}>
                    VUELTA
                </ThemedText>
                <ThemedText type="h2" style={[ styles.numberText]}>
                    { activeCategoriaTemporada.vuelta_activa || 0 }
                </ThemedText>
            </View>

            <FlatList
                data={clasificatoriasXPuntos || []}
                keyExtractor={(item:any) => item._id}
                renderItem={({ item, index }) => (
                    <TarjetasDeFondoPuntos dato={item} isDeportista={entidad === item.club_inscrito._id} index={index + 1} />
                )}
                contentContainerStyle={{flexGrow:1, paddingTop:10, paddingBottom:20}}
                showsVerticalScrollIndicator={ false }
                ListEmptyComponent={ <MensajeListaVacia titulo="No hay registros de competencia." icon="play" />}
            />
        </View>
    )
}




const styles = StyleSheet.create({
    contenedor: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    labelText: {
        fontSize: 14,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },

    numberText: {
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: 8,
    }
});