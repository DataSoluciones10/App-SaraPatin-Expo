
import { useState } from 'react';
import { KeyboardAvoidingView, useWindowDimensions, View, ScrollView } from 'react-native';
import { router } from 'expo-router';

import * as Yup from 'yup';
import { Formik } from "formik";
import useThemeColors from '@/presentation/hooks/global/useThemeColors';

import { TextInputThemed, TextInputPassword, ThemedText, ThemedButton, ThemedLink } from '@/presentation/components';
import { useAuthStore } from '@/presentation/stores';
import { useAlertInfo } from '@/presentation/hooks';






const LoginSreen = () => {


    const { height } = useWindowDimensions();
    const { startLogin } = useAuthStore();
    const { show, AlertInfo } = useAlertInfo();
    const { primary, background } = useThemeColors();

    const [isPosting, setIsPosting] = useState(false);




    const handleLogin = async(values:any, resetForm:any) => {
        try {
            setIsPosting(true);
            const wasSuccessful = await startLogin(values.correo, values.password);
            setIsPosting(false);
    
            if(wasSuccessful) {
                router.replace('/');
                resetForm();
                return;
            }
        } catch (error:any) {
            const mensajeError = error?.response?.data?.msg || error?.message || 'Error desconocido';
            show({ title: 'Error', message: mensajeError, buttonText: 'Cerrar', type: 'error' });
            setIsPosting(false);
        }
    }
    




    return (

        <KeyboardAvoidingView style={{flex:1}}>
            <AlertInfo />


            <Formik
                initialValues={{ 
                    correo: 'maicolsierra1030@gmail.com', 
                    password: '1234567Sa', 
                    // correo: '', 
                    // password: '', 
                }}
                onSubmit={ ( values:any, { resetForm } ) => {
                    handleLogin(values, resetForm);
                }}
                validationSchema={
                    Yup.object({
                        correo: Yup.string()
                                .email('Revise el formato del correo')
                                .required('Campo Requerido'),
                        password: Yup.string()
                                .required('Campo Requerido'),
                    })
                }
            >
            {({ handleChange, values, errors, handleBlur, handleSubmit }) => (
                <ScrollView style={{paddingHorizontal:30, backgroundColor:background}}>
                    <View style={{paddingTop:height * 0.3}}>
                        <ThemedText type='h1' bold>Ingresar</ThemedText>
                        <ThemedText>Por favor ingrese para continuar</ThemedText>

                        <View style={{marginTop:20}}>
                            <TextInputThemed
                                placeholder='Correo Electronico'
                                keyboardType='email-address'
                                autoCapitalize='none'
                                icon={'mail-outline'}
                                value={values.correo}
                                onBlur={handleBlur('correo')}
                                onChangeText={handleChange('correo')}
                                name='correo'
                            />

                            <TextInputPassword
                                placeholder='Contraseña'
                                secureTextEntry
                                autoCapitalize='none'
                                icon={'lock-closed-outline'}
                                value={values.password}
                                onBlur={handleBlur('password')}
                                onChangeText={handleChange('password')}
                                name='password'
                            />

                        </View>
                    </View>

                    <View className='mt-2' />

                    <ThemedButton icon="log-in-outline" onPress={ () => handleSubmit() } disabled={isPosting}>
                        Ingresar
                    </ThemedButton>

                    <View className="flex-row justify-center items-center mt-7">
                        <ThemedText>¿No tienes cuenta?</ThemedText>
                        <ThemedLink href="/tabs/register" style={{color:primary, marginLeft:7, fontWeight:'bold'}}>Crear cuenta</ThemedLink>
                    </View>
                </ScrollView>
            )}
            </Formik>
        </KeyboardAvoidingView>
    )


}



export default LoginSreen