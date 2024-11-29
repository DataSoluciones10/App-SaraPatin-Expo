
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { useColorScheme } from 'react-native';
import { Slot, Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated";
import 'react-native-reanimated';

import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import "./global.css";


SplashScreen.preventAutoHideAsync();



// Configura el logger de Reanimated
configureReanimatedLogger({
    level: ReanimatedLogLevel.warn, 
    strict: false, 
});



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
                <Stack screenOptions={{ headerShown: false }}>
                    <Slot/>
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </GestureHandlerRootView>
    );



}
