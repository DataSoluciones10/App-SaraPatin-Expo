
import { useEffect } from 'react';
import { Redirect, Stack } from 'expo-router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAuthStore, useSocketStore } from '@/presentation/stores';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { CargandoScreen } from '@/presentation/components';



const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } }
})





const RootLayout = () => {


    const { user, status, startCheckStatus } = useAuthStore();
    const { conectarSocket, desconectarSocket } = useSocketStore();
    const { background } = useThemeColors();


    useEffect(() => {
        startCheckStatus();
    }, [])


    useEffect(() => {
        if( user ) {
            conectarSocket();
        }
    }, [user]);



    useEffect(() => {
        if( !user ) {
            desconectarSocket();
        }
    }, [user]);
    


    if(status === 'checking') {
        return (
            <CargandoScreen titulo="Cargando Información..." />
        )
    }


    if(status === 'unauthenticated'){
        return <Redirect href='/tabs/home' />
    }



    return (

        <QueryClientProvider client={ queryClient }>
            <Stack screenOptions={{ headerShadowVisible: false, headerShown:false,
                headerStyle: { backgroundColor:background }, contentStyle: {backgroundColor: background},
            }}>
                <Stack.Screen name='(dashboard)' options={{ title: 'Dashboard' }} />
                <Stack.Screen name='deportistas/index' options={{ title: 'Mis Deportistas' }} />
                <Stack.Screen name='profesores/index' options={{ title: 'Profesores' }} />

                <Stack.Screen name='inscripcionesclub/realizarinscripcion' options={{title: 'RealizarInscripcion'}} />

            </Stack>
        </QueryClientProvider>

    )
}

export default RootLayout