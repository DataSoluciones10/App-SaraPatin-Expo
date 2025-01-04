
import { router } from 'expo-router';
import { FlatList } from 'react-native';

import { CargandoScreen, FAB, MensajeListaVacia, TarjetaInscripcionClub } from '@/presentation/components';
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


    const handleOnPress = (item:any) => {
        router.push({
            pathname: '/inscripcionesclub/[id]',
            params: { id: item.categoria_temporada?._id, entidad: item.id },
        });
    }
    
    


    return (

        <DisenioPagina title='Mis Inscripciones'>

            <FlatList
                data={misInscripcionesQuery.data?.pages.flatMap((page) => page) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TarjetaInscripcionClub carpeta="deportistas" img={item.img}
                        titulo={item.categoria_temporada?.competencia?.nombre}
                        subtitulo1={`${item.categoria_temporada?.temporada?.nombre} - ${item.patin}`} 
                        subtitulo2={`${item.entidad.nombre}`}
                        deportistas={item.deportistas}
                        oro={item.oro} plata={item.plata} bronce={item.bronce}
                        onPress={ () => handleOnPress(item) }
                        isClub={ item.id === null }
                    />
                )}
                contentContainerStyle={{flexGrow:1, paddingTop:5, paddingBottom:20}}
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                ListEmptyComponent={ <MensajeListaVacia titulo="No tienes inscripciones por el momento." />}
            />

            <FAB iconName='add-outline' onPress={ () => router.push('/inscripcionesclub/realizarinscripcion') }/>
        </DisenioPagina>

    )
}


export default MisInscripciones