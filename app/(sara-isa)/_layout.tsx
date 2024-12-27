
import { useEffect } from 'react';
import { Redirect, Stack } from 'expo-router';

import { useAuthStore } from '@/presentation/stores';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { CargandoScreen } from '@/presentation/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } }
})





const RootLayout = () => {


    const { status, startCheckStatus } = useAuthStore();
    const { background } = useThemeColors();


    useEffect(() => {
        startCheckStatus();
    }, [])
    


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
            <Stack
                screenOptions={{
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor:background },
                    contentStyle: {backgroundColor: background},
                    headerShown:false
                }}
            >
                <Stack.Screen name='(dashboard)' options={{ title: 'Dashboard' }} />
                <Stack.Screen name='deportistas/index' options={{ title: 'Deportistas' }} />
                <Stack.Screen name='profesores/index' options={{ title: 'Profesores' }} />

                <Stack.Screen name='inscripcionesclub/realizarinscripcion' options={{title: 'RealizarInscripcion'}} />

            </Stack>
        </QueryClientProvider>

    )
}

export default RootLayout