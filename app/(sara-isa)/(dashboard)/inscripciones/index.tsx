
import { router } from 'expo-router';

import { CargandoScreen, FAB, TarjetaDeUsuario } from '@/presentation/components';
import { DisenioPagina } from '@/presentation/layouts';
import { View, Text, FlatList } from 'react-native';
import { useMisInscripciones } from '@/presentation/hooks';





const MisInscripciones= () => {


    const { misInscripcionesQuery } = useMisInscripciones();



    if(misInscripcionesQuery.isLoading) {
        return (
            <DisenioPagina title='Mis Inscripciones'>
                <CargandoScreen titulo="Cargando mis inscripciones..." />
            </DisenioPagina>
        )
    }
    

    // console.log('holis', misInscripcionesQuery.data?.pages.flatMap((page) => page))


    return (

        <DisenioPagina title='Mis Inscripciones'>

            <FlatList
                data={misInscripcionesQuery.data?.pages.flatMap((page) => page) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TarjetaDeUsuario
                        key={item.id} 
                        nombre={item.categoria_temporada?.competencia?.nombre} 
                        datos={`${item.entidad.nombre} - ${item.patin}`} 
                        fecha={ item.createdAt }
                        img={ undefined }
                        uid={ item.id }
                        carpeta="deportistas"
                    />
                )}
                contentContainerStyle={{ padding:10 }}
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                // onEndReached={ () => loadNextPage() }
                // refreshControl={ <RefreshControl refreshing={isRefreshing} onRefresh={ onPullRefresh } /> }
            />

            <FAB iconName='add-outline' onPress={ () => router.push('/inscripciones/realizarinscripcion') }/>


            <View style={{height:20}} />
        </DisenioPagina>



    )


}






export default MisInscripciones