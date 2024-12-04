
import { useEffect } from 'react';
import { Redirect, Stack } from 'expo-router';

import { useAuthStore } from '@/presentation/stores';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { CargandoScreen } from '@/presentation/components';


// import CustomDrawer from '@/presentation/components/components/CustomDrawer';
// import { Drawer } from 'expo-router/drawer';




const DrawerLayout = () => {


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
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerStyle: { backgroundColor:background },
                contentStyle: {backgroundColor: background},
                headerShown:false
            }}
        >
            <Stack.Screen name='(dashboard)' options={{ title: 'Dashboard' }} />
        </Stack>
    )


}

export default DrawerLayout