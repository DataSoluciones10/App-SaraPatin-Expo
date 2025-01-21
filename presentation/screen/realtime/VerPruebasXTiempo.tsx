
import { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { MensajeListaVacia, TarjetasDePruebas } from '@/presentation/components'
import { useSocketPruebas } from '@/presentation/hooks';
import { useCategoriasTemporadaStore, usePruebasStore } from '@/presentation/stores';




export const VerPruebasXTiempo = () => {


    const { id, entidad } = useLocalSearchParams();
    const { activeCategoriaTemporada } = useCategoriasTemporadaStore();
    const { pruebasDeportista, startListadoPruebasXFiltros, clearActiveListPruebas } = usePruebasStore();


    useEffect(() => {
        if( id && activeCategoriaTemporada ){
            startListadoPruebasXFiltros({
                id, tipoReporte:'DEPORTISTAS',
                rama: activeCategoriaTemporada.rama_activa,
                categoria: activeCategoriaTemporada.categoria_activa,
                prueba: activeCategoriaTemporada.prueba_activa,
            });
        }

        return () => clearActiveListPruebas('DEPORTISTAS');
    }, [id, activeCategoriaTemporada])



    // Sockets de Pruebas X Tiempo
    useSocketPruebas(`${id}`);



    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={pruebasDeportista || []}
                keyExtractor={(item:any) => item.id}
                renderItem={({ item, index }) => (
                    <TarjetasDePruebas dato={item} isDeportista={entidad === item.club_inscrito._id} index={index + 1} />
                )}
                contentContainerStyle={{flexGrow:1, paddingTop:5, paddingBottom:20}}
                showsVerticalScrollIndicator={ false }
                ListEmptyComponent={ <MensajeListaVacia titulo="No hay registros de competencia." icon="play" />}
            />
        </View>
    )
}
