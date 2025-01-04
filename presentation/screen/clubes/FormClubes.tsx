
import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { InputFormText, SelectIdName, SelectIdNombre, SelectNormalThemed } from '../../../presentation/components';
import { ThemedButton } from '../../../presentation/components/components/ThemedButton';
import { entidades } from '@/presentation/data';
import { AvatarScreen } from '@/presentation/components/components/AvatarScreen';
import { useCiudadesStore, useImagenStore, useProfesoresStore } from '@/presentation/stores';








export const FormClubes = ({ club, handleFuncion, id, isLoading }:any) => {

    
    const { valorImagen } = useImagenStore();
    const { profesores } = useProfesoresStore();
    const { regiones, ciudades, startListadoCiudades } = useCiudadesStore();


    useEffect(() => {
        if (club?.departamento) {
            startListadoCiudades(club?.departamento);
            valorImagen(club.img);
        }
    }, [club?.departamento]);




    return (
        <Formik
            initialValues={ club }
            onSubmit={ ( values:any, { resetForm } ) => {
                handleFuncion(values, resetForm);
            }}
            validationSchema={
                Yup.object({
                    nombre: Yup.string()
                            .min(3, 'El nombre debe de ser de 3 caracteres o mas')
                            .max(100, 'El nombre debe de ser maximo de 100 caracteres')
                            .required('Campo Requerido'),
                    delegado: Yup.string()
                            .required('Campo Requerido'),
                    nit: Yup.string()
                            .required('Campo Requerido'),
                    entidad: Yup.string()
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
                    <AvatarScreen size={170} titulo="clubes" />
                    
                    <InputFormText
                        titulo='Nombre Entidad'
                        placeholder='Nombre Entidad'
                        autoCapitalize='none'
                        value={values.nombre}
                        onChangeText={handleChange('nombre')}
                        name='nombre'
                    />

                    <InputFormText
                        titulo='Nit'
                        placeholder='Nit'
                        autoCapitalize='none'
                        value={values.nit}
                        onChangeText={handleChange('nit')}
                        name='nit'
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

                    <SelectIdNombre 
                        label="Delegado" 
                        name="delegado"
                        options={ profesores || [] }
                        titulo='Delegado'
                        setFieldValue={ setFieldValue }
                        value={values.delegado}
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

                    <InputFormText
                        titulo='Numero Telefonico'
                        placeholder='Numero Telefonico'
                        keyboardType="numeric"
                        value={values.movil}
                        onChangeText={handleChange('movil')}
                        name='movil'
                    />

                    <SelectNormalThemed
                        titulo='Tipo Entidad'
                        name='entidad'
                        label='Tipo Entidad'
                        options={entidades}
                        value={values.entidad}
                        setFieldValue={ setFieldValue }
                    />

                    <InputFormText
                        titulo='Descripción'
                        placeholder='Descripción'
                        autoCapitalize='none'
                        multiline
                        numberOfLines={5}
                        value={values.descripcion}
                        onChangeText={handleChange('descripcion')}
                        name='descripcion'
                    />


                    <View style={{marginBottom:50, marginTop:10}}>
                        <ThemedButton icon='save-outline' onPress={ () => handleSubmit() } disabled={isLoading.isPending}>
                            { `${id === 'new' ? 'Guardar' : 'Editar'} Entidad`}
                        </ThemedButton>
                    </View>


                    </ScrollView>
                </KeyboardAvoidingView>
            )}

        </Formik>
    )
}



