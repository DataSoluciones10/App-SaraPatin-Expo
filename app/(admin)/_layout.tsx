
import { useEffect } from 'react';
import { Redirect, Stack } from 'expo-router';

import { View, ActivityIndicator } from 'react-native';
import { useAuthStore } from '@/presentation/stores';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';





const CheckAuthenticationLayout = () => {


    const { status, checkStatus } = useAuthStore();
    const bgcolor = useThemeColor({}, 'background');



    useEffect(() => {
        checkStatus();
    }, [])
    


    if(status === 'cheking') {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center', marginBottom:5}}>
                <ActivityIndicator />
            </View>
        )
    }



    if(status === 'unauthenticated'){
        return <Redirect href='/auth/login' />
    }



    return (
        <Stack screenOptions={{headerShadowVisible:false, 
            headerStyle:{backgroundColor:bgcolor}, contentStyle:{backgroundColor:bgcolor}
        }}>

            <Stack.Screen name="login/index" options={{ title: 'Login' }}/>
            <Stack.Screen name="register/index" options={{ title: 'Register' }}/>

        </Stack>
    )


}



export default CheckAuthenticationLayout