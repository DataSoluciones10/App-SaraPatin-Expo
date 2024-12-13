
import { useState } from 'react';

import { FlatList, RefreshControl, View } from 'react-native';
import { FAB, TarjetaDeUsuario } from '@/presentation/components';
import { DisenioPagina } from '@/presentation/layouts';
import { useDeportistas } from '@/presentation/hooks';
import { CargandoScreen } from '../../../presentation/components/components/CargandoScreen';
import { useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';





const Deportistas = () => {


    const { deportistasQuery, loadNextPage } = useDeportistas();
    const queryClient = useQueryClient();
    const [isRefreshing, setisRefreshing] = useState(false)



    const onPullRefresh = async () => {
        setisRefreshing(true);
        await new Promise( (resolve) => setTimeout(resolve, 400));
        queryClient.invalidateQueries({ queryKey: ['mis-deportistas', 'infinite'] })
        setisRefreshing(false);
    }


    if(deportistasQuery.isLoading) {
        return (
            <DisenioPagina title='Mis Deportistas'>
                <CargandoScreen titulo="Cargando Deportistas..." />
            </DisenioPagina>
        )
    }

    const imagenPredeterminada = 'https://www.fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000';


    return (
        <DisenioPagina title='Mis Deportistas'>

            <FlatList
                data={deportistasQuery.data?.pages.flatMap((page) => page) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TarjetaDeUsuario 
                        key={item.id} 
                        nombre={item.nombre} 
                        datos={`${item.rama} - ${item.patin}`} 
                        fecha={ item.fechaNacimiento }
                        img={ imagenPredeterminada }
                        uid={ item.id }
                    />
                )}
                contentContainerStyle={{ padding:10 }}
                onEndReached={ () => loadNextPage() }
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                refreshControl={ <RefreshControl refreshing={isRefreshing} onRefresh={ onPullRefresh } /> }
            />


            <FAB iconName='add-outline' onPress={() => router.push({ pathname:'/deportistas/[id]', params:{id:'new'} })}/>

            <View style={{height:20}} />
        </DisenioPagina>
    )
}



export default Deportistas