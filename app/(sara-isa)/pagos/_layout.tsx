
import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';





const TabsPagos = () => {


    const { primary } = useThemeColors();



    return (
        <Tabs screenOptions={{tabBarActiveTintColor:primary, headerTitleAlign:'center', headerShown:false}}>

            <Tabs.Screen name='(deuda)/index'
                options={{title:'Pagos Pendientes ', tabBarIcon:({ color }) => 
                <Ionicons size={28} name="cash-outline" color={color} />}}
            />

            <Tabs.Screen
                name='pagos/index'
                options={{title:'Pagos Realizados', tabBarIcon:({ color }) => 
                <Ionicons size={28} name="cash-sharp" color={color} /> }}
            />

            <Tabs.Screen
                name='filtros/index'
                options={{title:'Filtros', tabBarIcon:({ color }) => 
                <Ionicons size={28} name="filter" color={color} /> }}
            />

        </Tabs>
    )

}

export default TabsPagos;