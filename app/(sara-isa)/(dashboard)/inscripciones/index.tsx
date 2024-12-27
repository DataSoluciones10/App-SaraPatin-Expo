
import { router } from 'expo-router';
import { FlatList } from 'react-native';

import { CargandoScreen, FAB, TarjetaInscripcionClub } from '@/presentation/components';
import { DisenioPagina } from '@/presentation/layouts';
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
                    <TarjetaInscripcionClub
                        key={item.id} 
                        datos={item}
                        carpeta="deportistas"
                    />
                )}
                contentContainerStyle={{ paddingTop:5, paddingBottom:30 }}
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                // onEndReached={ () => loadNextPage() }
                // refreshControl={ <RefreshControl refreshing={isRefreshing} onRefresh={ onPullRefresh } /> }
            />

            <FAB iconName='add-outline' onPress={ () => router.push('/inscripcionesclub/realizarinscripcion') }/>
        </DisenioPagina>

    )
}


export default MisInscripciones