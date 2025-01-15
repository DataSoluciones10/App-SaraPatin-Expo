
import { useState } from 'react';
import { Text, FlatList, RefreshControl } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';

import { DisenioPagina } from '@/presentation/layouts';
import { useAlertConConfirm, useFacturasDeportista, useFuncionesTanStack } from '@/presentation/hooks';
import { BackdropScreen, CargandoScreen, FAB, MensajeListaVacia } from '@/presentation/components';
import { generarFacturasDeportista } from '@/core/actions';







const PagosPendientes = () => {
// estado:['DEUDA', 'SALDO'

    const queryClient = useQueryClient();
    const { pagosDeportistaQuery, loadNextPage, termino, chageTermino, } = useFacturasDeportista({estado: 'DEUDA'});
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
                    // <TarjetaDeUsuario 
                    //     key={item.id} 
                    //     nombre={item.nombre} 
                    //     datos={`${item.rama} - ${item.patin}`} 
                    //     fecha={ item.fechaNacimiento }
                    //     img={ item.img }
                    //     uid={ item.id }
                    //     carpeta="deportistas"
                    // />
                    <Text>Hola dAvid</Text>
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

{/* router.push({ pathname:'/deportistas/[id]', params:{id:'new'} }) */}
            <FAB iconName='refresh' onPress={() => handleGenerarFacturas() }/>
        </DisenioPagina>
    )

}


export default PagosPendientes