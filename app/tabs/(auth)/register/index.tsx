
import { KeyboardAvoidingView, useWindowDimensions, View, ScrollView } from 'react-native';

import * as Yup from 'yup';
import { Formik } from "formik";
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { TextInputThemed, ThemedButton, ThemedLink, ThemedText } from '@/presentation/components';






const RegisterScreen = () => {


    const { height } = useWindowDimensions();
    const { primary, background } = useThemeColors();


    const handleRegister = async(values:any, resetForm:any) => {
        console.log({values})
    }



    return (

        <KeyboardAvoidingView style={{flex:1}}>
            <Formik
                initialValues={{ 
                    correo: 'd@gmail.com', 
                    password: 'saraisa249096dc', 
                }}
                onSubmit={ ( values:any, { resetForm } ) => {
                    handleRegister(values, resetForm);
                }}
                validationSchema={
                    Yup.object({
                        nombre: Yup.string()
                            .required('Campo Requerido'),
                        tipo_documento: Yup.string()
                            .required('Campo Requerido'), 
                        documento: Yup.string()
                            .required('Campo Requerido'),
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
                    <View style={{paddingTop:height * 0.27}}>

                        <ThemedText type='h1' bold>Crear Cuenta</ThemedText>
                        <ThemedText>Por favor crea una cuenta</ThemedText>

                        <View style={{marginTop:20}}>
                            <TextInputThemed
                                placeholder='Nombre Completo'
                                autoCapitalize='none'
                                icon={'person-outline'}
                                value={values.nombre}
                                onBlur={handleBlur('nombre')}
                                onChangeText={handleChange('nombre')}
                                name='nombre'
                            />

                            <TextInputThemed
                                placeholder='Tipo de Documento'
                                autoCapitalize='none'
                                icon={'keypad-outline'}
                                value={values.tipo_documento}
                                onBlur={handleBlur('tipo_documento')}
                                onChangeText={handleChange('tipo_documento')}
                                name='tipo_documento'
                            />

                            <TextInputThemed
                                placeholder='Numero de Documento'
                                autoCapitalize='none'
                                icon={'id-card-outline'}
                                value={values.documento}
                                onBlur={handleBlur('documento')}
                                onChangeText={handleChange('documento')}
                                name='documento'
                            />


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

                        </View>
                    </View>

                    <View className='mt-2' />

                    <ThemedButton icon="save-outline">
                        Crear Cuenta
                    </ThemedButton>


                    <View className="flex-row justify-center items-center mt-7">
                        <ThemedText>Ya tienes cuenta?</ThemedText>
                        <ThemedLink href="/tabs/login" style={{color:primary, marginLeft:7, fontWeight:'bold'}}>Ingresar</ThemedLink>
                    </View>
                </ScrollView>
            )}
            </Formik>
        </KeyboardAvoidingView>
    )

}

export default RegisterScreen