
import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { InputFormText, MultiSelectNombreID, SelectIdName, SelectNormalThemed } from '../../../presentation/components';
import { ThemedButton } from '../../../presentation/components/components/ThemedButton';
import { documentoMayor } from '@/presentation/data';
import { AvatarScreen } from '@/presentation/components/components/AvatarScreen';
import { useCiudadesStore, useClubStore, useImagenStore } from '@/presentation/stores';








export const FormProfesores = ({ profesor, handleFuncion, id, isLoading }:any) => {

    
    const { clubes } = useClubStore();
    const { valorImagen } = useImagenStore();
    const { regiones, ciudades, startListadoCiudades } = useCiudadesStore();



    useEffect(() => {
        if (profesor?.departamento) {
            startListadoCiudades(profesor?.departamento);
            valorImagen(profesor.img);
        }
    }, [profesor?.departamento]);




    return (
        <Formik
            initialValues={ profesor }
            onSubmit={ ( values:any, { resetForm } ) => {
                handleFuncion(values, resetForm);
            }}
            validationSchema={
                Yup.object({
                    nombre: Yup.string()
                            .min(3, 'El nombre debe de ser de 3 caracteres o mas')
                            .max(100, 'El nombre debe de ser maximo de 100 caracteres')
                            .required('Campo Requerido'),
                    cedula: Yup.string()
                            .required('Campo Requerido'),
                    tipo_documento: Yup.string()
                            .required('Campo Requerido'),
                    club: Yup.array()
                            .min(1, 'Debe seleccionar por lo menos una organización')
                            .required('Campo Requerido'),
                    correo: Yup.string()
                            .email('Revise el formato del correo')
                            .required('Campo Requerido'),
                    movil: Yup.string()
                            .max(10, 'El movil debe de ser maximo de 10 caracteres')
                            .min(10, 'El movil debe de ser minimo de 10 caracteres')
                            .required('Campo Requerido'),
                    departamento: Yup.string()
                            .required('Campo Requerido'),
                    ciudad: Yup.string()
                            .required('Campo Requerido'),
                })
            }
        >

            {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                    <ScrollView style={{marginHorizontal:15}} showsVerticalScrollIndicator={false}>

                    {/* imageUrl={deportista.img} */}
                    <AvatarScreen size={170} titulo="usuarios" />
                    
                    <InputFormText
                        titulo='Nombre Completo'
                        placeholder='Nombre Completo'
                        autoCapitalize='none'
                        value={values.nombre}
                        onChangeText={handleChange('nombre')}
                        name='nombre'
                    />

                    <InputFormText
                        titulo='Correo Electronico'
                        placeholder='Correo Electronico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={values.correo}
                        onChangeText={handleChange('correo')}
                        name='correo'
                    />

                    <SelectNormalThemed
                        titulo='Tipo de Documento'
                        name='tipo_documento'
                        label='Tipo de Documento'
                        options={documentoMayor}
                        value={values.tipo_documento}
                        setFieldValue={ setFieldValue }
                    />

                    <InputFormText
                        titulo='Cedula'
                        placeholder='Cedula'
                        keyboardType="numeric"
                        value={values.cedula}
                        onChangeText={handleChange('cedula')}
                        name='cedula'
                    />

                    <InputFormText
                        titulo='Numero Telefonico'
                        placeholder='Numero Telefonico'
                        keyboardType="numeric"
                        value={values.movil}
                        onChangeText={handleChange('movil')}
                        name='movil'
                    />

                    {regiones &&
                    <SelectIdName
                        name='departamento'
                        label='Departamento'
                        options={ regiones }
                        titulo='Departamento'
                        value={values.departamento}
                        setFieldValue={(field:any, value:any) => {
                            setFieldValue(field, value);
                            if (value) { startListadoCiudades(value) }
                        }}
                    />}

                    {ciudades && 
                    <SelectIdName
                        name='ciudad'
                        label='Ciudad'
                        options={ ciudades }
                        titulo='Ciudad'
                        setFieldValue={ setFieldValue }
                        value={values.ciudad}
                    />}

                    <MultiSelectNombreID 
                        name='club'
                        label='Club'
                        options={ clubes }
                        titulo='Club'
                        setFieldValue={ setFieldValue }
                        value={values.club}
                    />


                    <InputFormText
                        titulo='Dias Pagos'
                        placeholder='Dias Pagos'
                        keyboardType="numeric"
                        value={values.dias_pagos}
                        onChangeText={handleChange('dias_pagos')}
                        name="dias_pagos"
                        style={{flex:1}}
                    />

                    {(id !== 'new') &&
                    <SelectIdName
                        name='estado'
                        label='Estado'
                        titulo='Estado'
                        options={[{name:'Activo', id:true}, {name:'Inactivo', id:false}]}
                        value={values.estado}
                        setFieldValue={ setFieldValue }
                    />
                    }

                    <View style={{marginBottom:50, marginTop:10}}>
                        <ThemedButton icon='save-outline' onPress={ () => handleSubmit() } disabled={isLoading.isPending}>
                            {`${id === 'new' ? 'Guardar' : 'Editar'} Profesor`}
                        </ThemedButton>
                    </View>

                    </ScrollView>
                </KeyboardAvoidingView>
            )}

        </Formik>
    )
}



