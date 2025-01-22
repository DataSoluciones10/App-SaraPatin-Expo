
import { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, FlatList } from 'react-native';
import { MensajeListaVacia, NumeroVueltasFondo, TarjetasDeFondoPuntos } from '@/presentation/components';

import { useCategoriasTemporadaStore, useClasificatoriaStore } from '@/presentation/stores';
import { useSocketFondoPuntos } from '@/presentation/hooks';





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
            {/* Marca numero de vueltas  */}
            <NumeroVueltasFondo vuelta={activeCategoriaTemporada.vuelta_activa || 0} />

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


