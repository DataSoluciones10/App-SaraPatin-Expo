
import { useEffect } from 'react';

import { View, FlatList } from 'react-native';
import { MensajeListaVacia, TarjetaPruebasGrupos } from '@/presentation/components'
import { useClasificatoriaStore } from '@/presentation/stores';
import { useLocalSearchParams } from 'expo-router';
import { useSocketPruebaGrupos } from '@/presentation/hooks';




export const VerPruebasXGrupos = () => {


    const { id, entidad } = useLocalSearchParams();
    const { clasificatorias, datosPruebasXGrupos, startListadoPruebaXGrupos } = useClasificatoriaStore();

    
    useEffect(() => {
        if( id ){ startListadoPruebaXGrupos(`${id}`) }
        return () => { datosPruebasXGrupos([]) }
    }, [id])


    // Sockets de Pruebas X Grupos
    useSocketPruebaGrupos(`${id}`);



    return (

        <View style={{marginHorizontal:15}}>
            <FlatList
                data={clasificatorias || []}
                keyExtractor={(item:any) => item.bateria}
                renderItem={({ item, index }) => (
                    <TarjetaPruebasGrupos dato={item} entidad={entidad} index={index + 1} />
                )}
                contentContainerStyle={{flexGrow:1, paddingTop:10, paddingBottom:20}}
                showsVerticalScrollIndicator={ false }
                ListEmptyComponent={ <MensajeListaVacia titulo="No hay registros de competencia." icon="play" />}
            />
        </View>

    )
}



