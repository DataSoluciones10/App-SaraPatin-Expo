
import { router } from 'expo-router';
import { FlatList, RefreshControl, View } from 'react-native';

import { FAB, MensajeListaVacia, TarjetaDeUsuario } from '@/presentation/components';
import { DisenioPagina } from '@/presentation/layouts';
import { useDeportistas, useFuncionesTanStack } from '@/presentation/hooks';
import { CargandoScreen } from '../../../presentation/components/components/CargandoScreen';





const MisDeportistas = () => {

    const { deportistasQuery, loadNextPage } = useDeportistas();
    const { isRefreshing, onPullRefresh } = useFuncionesTanStack();



    if(deportistasQuery.isLoading) {
        return (
            <DisenioPagina title='Mis Deportistas'>
                <CargandoScreen titulo="Cargando Deportistas..." />
            </DisenioPagina>
        )
    }



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
                        img={ item.img }
                        uid={ item.id }
                        carpeta="deportistas"
                    />
                )}
                contentContainerStyle={{flexGrow:1, padding:10}}
                onEndReached={ () => loadNextPage() }
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                refreshControl={ <RefreshControl refreshing={isRefreshing} 
                    onRefresh={ () => onPullRefresh('inscripciones-mis-deportistas') } 
                /> }
                ListEmptyComponent={ <MensajeListaVacia titulo="No tienes deportistas creados" />}
            />


            <FAB iconName='add-outline' onPress={() => router.push({ pathname:'/deportistas/[id]', params:{id:'new'} })}/>
            {/* <View style={{height:20}} /> */}
        </DisenioPagina>
    )
}



export default MisDeportistas