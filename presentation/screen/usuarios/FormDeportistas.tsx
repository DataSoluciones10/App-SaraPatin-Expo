
import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import * as Yup from 'yup';
import { Formik } from 'formik';
import { InputFormDecimales, InputFormText, MultiSelectNombreID, SelectIdName, SelectNormalThemed, ThemedView } from '../../../presentation/components';
import { ThemedButton } from '../../../presentation/components/components/ThemedButton';
import { epsData, ramaData, tipoDocumento, tipoPatin } from '@/presentation/data';
import { AvatarScreen } from '@/presentation/components/components/AvatarScreen';
import { DateFormInput } from '@/presentation/components/inputs/DateFormInput';
import { useCiudadesStore, useClubStore, useImagenStore, useProfesoresStore } from '@/presentation/stores';








export const FormDeportistas = ({ deportista, handleFuncion, id, isLoading }:any) => {

    
    const { clubes } = useClubStore();
    const { valorImagen } = useImagenStore();
    const { profesores } = useProfesoresStore();
    const { regiones, ciudades, startListadoCiudades } = useCiudadesStore();


    useEffect(() => {
        if (deportista?.departamento) {
            startListadoCiudades(deportista?.departamento);
            valorImagen(deportista.img);
        }
    }, [deportista?.departamento]);




    return (
        <Formik
            initialValues={ deportista }
            onSubmit={ ( values:any, { resetForm } ) => {
                handleFuncion(values, resetForm);
            }}
            validationSchema={
                Yup.object({
                    nombre: Yup.string()
                            .min(3, 'El nombre debe de ser de 3 caracteres o mas')
                            .max(100, 'El nombre debe de ser maximo de 100 caracteres')
                            .required('Campo Requerido'),
                    tipo_documento: Yup.string()
                            .required('Campo Requerido'),
                    cedula: Yup.string()
                            .required('Campo Requerido'),
                    correo: Yup.string()
                            .email('Revise el formato del correo')
                            .required('Campo Requerido'),
                    movil: Yup.string()
                            .max(10, 'El movil debe de ser maximo de 10 caracteres')
                            .min(10, 'El movil debe de ser minimo de 10 caracteres')
                            .required('Campo Requerido'),
                    club: Yup.array()
                            .min(1, 'Debe seleccionar por lo menos una organización')
                            .required('Campo Requerido'),
                    profesor: Yup.array()
                            .min(1, 'Debe seleccionar por lo menos una profesor')
                            .required('Campo Requerido'),
                    departamento: Yup.string()
                            .required('Campo Requerido'),
                    ciudad: Yup.string()
                            .required('Campo Requerido'),
                    rama: Yup.string()
                            .required('Campo Requerido'),
                    patin: Yup.string()
                            .required('Campo Requerido'),
                    fechaNacimiento: Yup.string()
                            .required('Campo Requerido'),
                    peso: Yup.string()
                            .required('Campo Requerido'),
                    talla: Yup.string()
                            .required('Campo Requerido'),
                    eps: Yup.string()
                            .required('Campo Requerido'),   
                    // informacion: Yup.string()
                    //         .required('Campo Requerido'), 
                })
            }
        >

            {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                    <ScrollView style={{marginHorizontal:15}} showsVerticalScrollIndicator={false}>

                    {/* imageUrl={deportista.img} */}
                    <AvatarScreen size={170} titulo="deportistas" />
                    
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
                        options={tipoDocumento}
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

                    <MultiSelectNombreID 
                        name='club'
                        label='Club'
                        options={ clubes }
                        titulo='Club'
                        setFieldValue={ setFieldValue }
                        value={values.club}
                    />

                    <MultiSelectNombreID 
                        label="Profesores" 
                        name="profesor"
                        options={ profesores }
                        titulo='Profesores'
                        setFieldValue={ setFieldValue }
                        value={values.profesor}
                    />

                    {regiones &&
                    <SelectIdName
                        name='departamento'
                        label='Departamento'
                        options={ regiones }
                        titulo='Departamento'
                        // setFieldValue={ setFieldValue }
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

                    <SelectNormalThemed
                        name='rama'
                        label='Rama'
                        options={ramaData}
                        titulo='Rama'
                        setFieldValue={ setFieldValue }
                        value={values.rama}
                    />

                    <SelectNormalThemed
                        name='patin'
                        label='Tipo Patin'
                        options={tipoPatin}
                        titulo='Patin'
                        setFieldValue={ setFieldValue }
                        value={values.patin}
                    />


                    <DateFormInput
                        titulo="Fecha de Nacimiento"
                        name="fechaNacimiento"
                        value={values.fechaNacimiento}
                        setFieldValue={ setFieldValue }
                        placeholder="Seleccionar fecha"
                    />


                    <ThemedView style={{ marginHorizontal:10, marginVertical:5, flexDirection:'row', gap:10 }}>
                        <InputFormText
                            titulo='Peso'
                            placeholder='17.7'
                            keyboardType="numeric"
                            value={values.peso}
                            onChangeText={handleChange('peso')}
                            name='peso'
                            style={{flex:1}}
                        />

                        <InputFormText
                            titulo='Talla'
                            placeholder='150.5'
                            keyboardType="numeric"
                            value={values.talla}
                            onChangeText={handleChange('talla')}
                            name='talla'
                            style={{flex:1}}
                        />
                    </ThemedView>

                    <SelectNormalThemed
                        name='eps'
                        label='EPS'
                        options={epsData}
                        titulo='EPS'
                        setFieldValue={ setFieldValue }
                        value={values.eps}
                    />

                    <ThemedView style={{ marginHorizontal:10, marginVertical:5, flexDirection:'row', gap:10 }}>
                        <InputFormDecimales
                            titulo='Mensualidad'
                            placeholder='Mensualidad'
                            keyboardType="numeric"
                            value={values.mensualidad}
                            onChangeText={handleChange('mensualidad')}
                            name='mensualidad'
                            style={{flex:1}}
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
                    </ThemedView>

                    <InputFormText
                        titulo='Información'
                        placeholder='Información'
                        autoCapitalize='none'
                        multiline
                        numberOfLines={5}
                        value={values.informacion}
                        onChangeText={handleChange('informacion')}
                        name='informacion'
                    />


                    <View style={{marginBottom:50, marginTop:10}}>
                        <ThemedButton icon='save-outline' onPress={ () => handleSubmit() } disabled={isLoading.isPending}>
                            { `${id === 'new' ? 'Guardar' : 'Editar'} Deportista`}
                        </ThemedButton>
                    </View>

                    {/* disabled={mutation.isPending} */}

                    </ScrollView>
                </KeyboardAvoidingView>
            )}

        </Formik>
    )
}



