
import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';





const TabsLayaout = () => {


    const { primary } = useThemeColors();



    return (
        <Tabs screenOptions={{tabBarActiveTintColor:primary, headerTitleAlign:'center'}}>

            <Tabs.Screen name='inicio/index'
                options={{title:'Inicio', headerShown:false,
                    tabBarIcon:({ color }) => <Ionicons size={28} name="home" color={color} 
                />}}
            />

            <Tabs.Screen
                name='favoritos/index'
                options={{title:'Favoritos', tabBarIcon:({ color }) => <Ionicons size={28} name="star" color={color} /> }}
            />

            <Tabs.Screen
                name='inscripciones/index'
                options={{title:'Inscripciones', tabBarIcon:({ color }) => <Ionicons size={28} name="reader" color={color} /> }}
            />
        </Tabs>
    )

}

export default TabsLayaout;