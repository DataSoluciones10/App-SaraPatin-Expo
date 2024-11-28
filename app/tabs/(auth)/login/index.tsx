
import { KeyboardAvoidingView, useWindowDimensions, View, ScrollView } from 'react-native';

import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';
import ThemedButton from '@/presentation/components/shared/ThemedButton';
import TextInputThemed from '@/presentation/components/inputs/TextInputThemed';
import TextInputPassword from '@/presentation/components/inputs/TextInputPassword';
import ThemedText from '@/presentation/components/shared/ThemedText';
import ThemedLink from '@/presentation/components/shared/ThemedLink';
import { Pressable } from 'react-native-gesture-handler';
import { router } from 'expo-router';







const LoginSreen = () => {


    const { height } = useWindowDimensions();
    const textColor = useThemeColor({}, 'primary');
    const bgcolor = useThemeColor({}, 'background');


    return (

        <KeyboardAvoidingView style={{flex:1}}>
            <ScrollView style={{paddingHorizontal:30, backgroundColor:bgcolor}}>

                <View style={{paddingTop:height * 0.3}}>
                    <ThemedText type='h1' bold>Ingresar</ThemedText>
                    <ThemedText>Por favor ingrese para continuar</ThemedText>

                    <View style={{marginTop:20}}>
                        <TextInputThemed
                            placeholder='Correo Electronico'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            icon={'mail-outline'}
                        />

                        <TextInputPassword
                            placeholder='Contraseña'
                            secureTextEntry
                            autoCapitalize='none'
                            icon={'lock-closed-outline'}
                        />

                    </View>
                </View>


                <View className='mt-2' />


                <ThemedButton
                    icon="log-in-outline"
                    // onPress={onLogin}
                    // disabled={isPosting}
                >
                    Ingresar
                </ThemedButton>



                <View className="flex-row justify-center items-center mt-7">
                    <ThemedText>¿No tienes cuenta?</ThemedText>
                    <ThemedLink href="/tabs/register" style={{color:textColor, marginLeft:7}}>Crear cuenta</ThemedLink>
                </View>


            </ScrollView>
        </KeyboardAvoidingView>
    )


}



export default LoginSreen