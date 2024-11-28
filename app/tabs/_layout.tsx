
import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';





const TabsLayaout = () => {


    const color = useThemeColor({}, 'primary');
    const bgcolor = useThemeColor({}, 'background');


    return (
        <Tabs screenOptions={{tabBarActiveTintColor:color, headerShown: false,
            // tabBarStyle: { backgroundColor: 'rgba(0,0,0,0)' },
        }}>

            <Tabs.Screen
                name='home/index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} /> 
                }}
            />

            <Tabs.Screen
                name='(auth)'
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="log-in" color={color} /> 
                }}
            />
        </Tabs>
    )

}

export default TabsLayaout;