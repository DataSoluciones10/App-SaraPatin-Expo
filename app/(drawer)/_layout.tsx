

import { Drawer } from 'expo-router/drawer';

import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';


import { useAuthStore } from '@/presentation/stores';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';







const DrawerLayout = () => {


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
    )}



    if(status === 'unauthenticated'){
        // return <Redirect href='/home' />
        return <Redirect href='/home' />
    }



    

    return (
        <Drawer>
            <Drawer.Screen
                name="index" 
                options={{ drawerLabel: 'Home', title: 'overview' }}
            />
            <Drawer.Screen
                name="user/[id]" 
                options={{ drawerLabel: 'User', title: 'overview' }}
            />
        </Drawer>
    )


}

export default DrawerLayout