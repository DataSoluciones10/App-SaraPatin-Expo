
import { FlatList, RefreshControl } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { DisenioCompetencia, DisenioPagina } from '@/presentation/layouts'
import { BackdropScreen, CargandoScreen, MensajeListaVacia, TarjetaSencilla } from '@/presentation/components'
import { useAlertConConfirm, useFuncionesTanStack, useInscripcionDeportistas, useInscripcionesMisDeportistas } from '@/presentation/hooks';






const MisDeportistasInscriptos = () => {
    

    const { id, entidad } = useLocalSearchParams();
    const { inscripcionMisDeportistas, loadNextPage } = useInscripcionesMisDeportistas(`${entidad}`);
    const { isRefreshing, onPullRefreshConParams } = useFuncionesTanStack();
    const { eliminarInscripcion, AlertInfo } = useInscripcionDeportistas(`${entidad}`)
    const { showDialog, AlertModal } = useAlertConConfirm();
    


    if(inscripcionMisDeportistas.isLoading) {
        return (
            <DisenioPagina title='Deportistas Inscriptos'>
                <CargandoScreen titulo="Cargando Inscripciones Deportistas..." />
            </DisenioPagina>
        )
    }


    const handleEliminarInscripcion = async(uid: string) => {
        showDialog({
            title: "Eliminar Inscripción",
            message: "¿Estás seguro de eliminar esta inscripción?",
            confirmText: "Sí, eliminar",
            cancelText: "No",
            type: "primary",
            onConfirm: async() => { 
                await eliminarInscripcion.mutateAsync(uid) 
            },
            onCancel: () => { console.log("Cancelado"); }
        });
    };


    
    return (

        <DisenioCompetencia title={`Deportistas Inscriptos`}>
            <AlertModal />
            <AlertInfo />
            <BackdropScreen titulo="Procesando su petición." visible={eliminarInscripcion.isPending} />

            <FlatList
                data={inscripcionMisDeportistas.data?.pages.flatMap((page) => page) || []}
                keyExtractor={(item:any) => item.id}
                renderItem={({ item }) => (
                    <TarjetaSencilla dato={item} onPress={ handleEliminarInscripcion } />
                )}
                contentContainerStyle={{padding:10, flexGrow:1}}
                onEndReached={ () => loadNextPage() }
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                refreshControl={ <RefreshControl refreshing={isRefreshing} 
                    onRefresh={ () => onPullRefreshConParams('inscripciones-mis-deportistas', `${id}`) } 
                /> }
                ListEmptyComponent={ <MensajeListaVacia titulo="No tienes deportistas inscripciones." />}
            />

        </DisenioCompetencia>
        
    )
}

export default MisDeportistasInscriptos