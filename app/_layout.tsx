
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated";
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';

import 'react-native-reanimated';
import "./global.css";


// Configura el logger de Reanimated
configureReanimatedLogger({
    level: ReanimatedLogLevel.warn, 
    strict: false, 
});
// Evita que la pantalla de inicio se oculte automáticamente antes de que se complete la carga de activos.
SplashScreen.preventAutoHideAsync();




export default function RootLayout() {

    const colorScheme = useColorScheme();
    const bgcolor = useThemeColor({}, 'background');


    const [loaded] = useFonts({
        KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
        KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
        KanitThin: require('../assets/fonts/Kanit-Thin.ttf'),
    });



    useEffect(() => {
        if (loaded) { SplashScreen.hideAsync(); }
    }, [loaded]);



    if(!loaded) { return null; }



    return (
        <GestureHandlerRootView style={{backgroundColor:bgcolor, flex:1}}>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack screenOptions={{headerShown: false}} />
                <StatusBar style="auto" />
            </ThemeProvider>
        </GestureHandlerRootView>
    );

}
