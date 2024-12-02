
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useAuthStore } from '@/presentation/stores';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import CustomDrawer from '@/presentation/components/components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';





const DrawerLayout = () => {


    const { status, checkStatus } = useAuthStore();
    const { background } = useThemeColors();


    useEffect(() => {
        checkStatus();
    }, [])
    


    if(status === 'cheking') {
        return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', marginBottom:5}}>
            <ActivityIndicator />
        </View>
    )}



    if(true){
        return <Redirect href='/home' />
    }



    return (
        <Drawer drawerContent={CustomDrawer} screenOptions={{headerTitleAlign:'center', 
            headerShadowVisible:false, overlayColor:'rgba(0,0,0,0.7)', drawerStyle:{backgroundColor:background} 
        }}>

            <Drawer.Screen name='(dashboard)' options={{ drawerLabel:'Dashboard', 
                title:'Dashboard', headerShown:false, drawerIcon: ({ color, size }) => (
                    <Ionicons name="nuclear-outline" size={size} color={color} />
                ),
            }}/>

            <Drawer.Screen name="deportistas/index"  options={{ drawerLabel:'Mis Deportistas', 
                title:'Mis Deportistas', drawerIcon: ({ color, size }) => (
                    <Ionicons name="people-circle-outline" size={size} color={color} />
                ),
            }}/>

            {/* <Drawer.Screen name="pagos/index"  options={{ drawerLabel:'Mis Deportistas', 
                title:'Mis Deportistas', drawerIcon: ({ color, size }) => (
                    <Ionicons name="people-circle-outline" size={size} color={color} />
                ),
            }}/> */}
        </Drawer>
    )


}

export default DrawerLayout