
import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';





const TabsLayaout = () => {


    const { primary } = useThemeColors();



    return (
        <Tabs screenOptions={{tabBarActiveTintColor:primary, headerTitleAlign:'center', headerShown:false}}>

            <Tabs.Screen name='(inicio)/index'
                options={{title:'Inicio', tabBarIcon:({ color }) => <Ionicons size={28} name="home" color={color} />}}
            />

            <Tabs.Screen
                name='perfil/index'
                options={{title:'Mi Perfil', tabBarIcon:({ color }) => <Ionicons size={28} name="person-circle" color={color} /> }}
            />

            <Tabs.Screen
                name='inscripciones/index'
                options={{title:'Inscripciones', tabBarIcon:({ color }) => <Ionicons size={28} name="reader" color={color} /> }}
            />

            <Tabs.Screen
                name='menu/index' 
                options={{title:'Menu', headerShown:false, tabBarIcon:({ color }) => <Ionicons size={28} name="apps" color={color} /> }}
            />
        </Tabs>
    )

}

export default TabsLayaout;