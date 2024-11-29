
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';
import { Stack } from 'expo-router';





const CheckAuthenticationLayout = () => {


    const bgcolor = useThemeColor({}, 'background');




    return (
        <Stack screenOptions={{headerShadowVisible:false, headerShown:false,
            headerStyle:{backgroundColor:bgcolor}, contentStyle:{backgroundColor:bgcolor}
        }}>
            <Stack.Screen name="login/index" options={{title: 'Login'}}/>
            <Stack.Screen name="register/index" options={{title: 'Register'}}/>
        </Stack>
    )


}



export default CheckAuthenticationLayout