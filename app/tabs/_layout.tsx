
import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';





const TabsLayaout = () => {


    const { primary } = useThemeColors();


    return (
        <Tabs screenOptions={{ tabBarActiveTintColor:primary, headerShown:false }}>
            <Tabs.Screen name='home/index'
                options={{title:'Home', tabBarIcon:({ color }) => <Ionicons size={28} name="home" color={color} />}}
            />

            <Tabs.Screen name='(auth)'
                options={{title:'Login', tabBarIcon:({ color }) => <Ionicons size={28} name="log-in" color={color} /> }}
            />
        </Tabs>
    )

}

export default TabsLayaout;