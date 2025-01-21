
import { useEffect } from 'react';
import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { BannerDeCompetencia } from '@/presentation/layouts'
import { ContenedorVerPruebas } from '@/presentation/screen/realtime';
import { useCategoriasTemporadaStore, useSocketStore } from '@/presentation/stores';
import { useSocketCategoriaTemporada } from '@/presentation/hooks';
import { CargandoScreen } from '@/presentation/components';






const TiempoReal = () => {


    const { id } = useLocalSearchParams();
    const { activeCategoriaTemporada, categoriTemporadaXId } = useCategoriasTemporadaStore();


    useEffect(() => {
        if(id) { categoriTemporadaXId(`${id}`) }
        return () => {}
    }, [id])


    // Sockets de Actualizar Pruebas y categoria
    useSocketCategoriaTemporada(`${id}`);
    

    return (

        <BannerDeCompetencia>
            <View style={{ flex: 1 }}>

                {(!activeCategoriaTemporada)
                ?   <CargandoScreen titulo="Cargando información..." />
                :   <ContenedorVerPruebas datos={activeCategoriaTemporada} />
                }

            </View>
        </BannerDeCompetencia>
    )
}



export default TiempoReal