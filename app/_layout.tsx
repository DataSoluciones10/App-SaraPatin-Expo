
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { useColorScheme } from 'react-native';
import 'react-native-reanimated';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import "./global.css";


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
                <Stack screenOptions={{ headerShown: false }}>
                    
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </GestureHandlerRootView>
    );



}
