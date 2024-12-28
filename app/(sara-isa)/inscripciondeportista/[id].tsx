
import { FlatList, RefreshControl } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { DisenioPagina } from '@/presentation/layouts'
import { BackdropScreen, CargandoScreen, TarjetaSencilla } from '@/presentation/components'
import { useAlertConConfirm, useFuncionesTanStack, useInscripcionDeportistas, useInscripcionesMisDeportistas } from '@/presentation/hooks';






const MisDeportistasInscriptos = () => {
    

    const { id } = useLocalSearchParams();
    const { inscripcionMisDeportistas, loadNextPage } = useInscripcionesMisDeportistas(`${id}`);
    const { isRefreshing, onPullRefreshConParams } = useFuncionesTanStack();
    const { eliminarInscripcion, AlertInfo } = useInscripcionDeportistas(`${id}`)
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

        <DisenioPagina title={`Deportistas Inscriptos`}>
            <AlertModal />
            <AlertInfo />
            <BackdropScreen titulo="Procesando su petición." visible={eliminarInscripcion.isPending} />

            <FlatList
                data={inscripcionMisDeportistas.data?.pages.flatMap((page) => page) || []}
                keyExtractor={(item:any) => item.id}
                renderItem={({ item }) => (
                    <TarjetaSencilla 
                        key={ item.id }
                        dato={item}
                        onPress={ handleEliminarInscripcion }
                        isPending={eliminarInscripcion?.isPending}
                    />
                )}
                contentContainerStyle={{padding:10}}
                onEndReached={ () => loadNextPage() }
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                refreshControl={ <RefreshControl refreshing={isRefreshing} 
                    onRefresh={ () => onPullRefreshConParams('inscripciones-mis-deportistas', `${id}`) } 
                /> }
            />

        </DisenioPagina>
        
    )
}

export default MisDeportistasInscriptos