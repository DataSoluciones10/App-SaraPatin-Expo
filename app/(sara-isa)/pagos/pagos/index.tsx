
import { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';

import { useAlertConConfirm, useFacturasDeportista, useFuncionesTanStack } from '@/presentation/hooks';
import { DisenioPagina } from '@/presentation/layouts';
import { BackdropScreen, CargandoScreen, MensajeListaVacia, TarjetaPagos } from '@/presentation/components';






const PagosRealizados = () => {


    const queryClient = useQueryClient();
    const { pagosDeportistaQuery, loadNextPage, termino, chageTermino, } = useFacturasDeportista({estado: "PAGO"});
    const { isRefreshing, onPullRefresh } = useFuncionesTanStack();
    const { showDialog, AlertModal } = useAlertConConfirm();
    const [cargando, setCargando] = useState(false)
    

    

    if(pagosDeportistaQuery.isLoading) {
        return (
            <DisenioPagina title='Pagos Pendientes'>
                <CargandoScreen titulo="Cargando Pagos..." />
            </DisenioPagina>
        )
    }




    return (
        <DisenioPagina title='Pagos Realizados'>
            <AlertModal />
            <BackdropScreen titulo="Procesando su petición..." visible={cargando} />

            <FlatList
                data={pagosDeportistaQuery.data?.pages.flatMap((page) => page) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TarjetaPagos item={item} />
                )}
                contentContainerStyle={{flexGrow:1, padding:10}}
                onEndReached={ () => loadNextPage() }
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                refreshControl={ <RefreshControl refreshing={isRefreshing} 
                    onRefresh={ () => onPullRefresh('pago-deportistas') } 
                /> }
                ListEmptyComponent={ <MensajeListaVacia titulo="No tienes pagos en el momento..." />}
            />
        </DisenioPagina>
    )

}

export default PagosRealizados