
import { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';

import { DisenioPagina } from '@/presentation/layouts';
import { useAlertConConfirm, useFacturasDeportista, useFuncionesTanStack } from '@/presentation/hooks';
import { BackdropScreen, CargandoScreen, FAB, MensajeListaVacia, ModalScreen, TarjetaPagos } from '@/presentation/components';
import { generarFacturasDeportista } from '@/core/actions';
import { FormAbonosFacDeportista } from '@/presentation/screen/pagos';







const PagosPendientes = () => {


    const queryClient = useQueryClient();
    const { pagosDeportistaQuery, loadNextPage, termino, chageTermino, } = useFacturasDeportista({estado: "['DEUDA', 'SALDO']"});
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



    const handleGenerarFacturas = async() => {
        showDialog({
            title: "Generar Facturas",
            message: "¿Esta seguro de generar facturas a deportistas.?",
            confirmText: "Sí, Generar",
            cancelText: "No",
            type: "primary",
            onConfirm: async() => { 
                setCargando(true);
                await generarFacturasDeportista();
                await queryClient.invalidateQueries({ queryKey: ['pago-deportistas'] })
                setCargando(false);
            },
            onCancel: () => { console.log("Cancelado"); }
        });

    }

    return (
        <DisenioPagina title='Pagos Pendientes'>
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

            <FAB iconName='refresh' onPress={() => handleGenerarFacturas() }/>

            <ModalScreen titulo="Agregar Abono">
                <FormAbonosFacDeportista />
            </ModalScreen>
        </DisenioPagina>
    )

}



export default PagosPendientes

