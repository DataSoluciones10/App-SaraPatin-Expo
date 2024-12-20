

import { KeyboardAvoidingView, View } from 'react-native';

import * as Yup from 'yup';
import { Formik } from "formik";
import { SelectNormalThemed, ThemedButton, SelectIdName, SelectIdNombre } from '@/presentation/components';
import { invitados, tipoPatin } from '@/presentation/data';
import { useClubStore, useCompetenciaStore } from '@/presentation/stores';
import { useEffect } from 'react';





export const FormInscripciones = ({ items, handleFunction }:any) => {


    const { startClubPorDirector, clubes } = useClubStore();
    const { competencias, startListadoCompetenciasActivas } = useCompetenciaStore();



    useEffect(() => {
        startListadoCompetenciasActivas();
    }, []);


    useEffect(() => {
        startClubPorDirector();
    }, []);
    


    return (

        <KeyboardAvoidingView style={{flex:1}}>
            <Formik
                initialValues={{ 
                    competencia: '',
                    patin: '',
                    club: '',
                    invitado: '',
                    deportistas: '',
                }}
                onSubmit={ ( values:any, { resetForm } ) => {
                    handleFunction(values, resetForm)
                }}
                validationSchema={
                    Yup.object({
                        competencia: Yup.string()
                                .required('Campo Requerido'),
                        patin: Yup.string()
                                .required('Campo Requerido'),
                        club: Yup.string()
                                .required('Campo Requerido'),
                        invitado: Yup.string()
                                .required('Campo Requerido'),
                    })
                }
            >
            {({ values, errors, handleSubmit, setFieldValue }) => (
                <View style={{ paddingHorizontal:15 }}>
                    <View style={{marginTop:20}}>

                    <SelectIdNombre
                        name='competencia'
                        label='Seleccione Competencia'
                        options={ competencias || [] }
                        setFieldValue={ setFieldValue }
                        value={values.competencia}
                    />

                    <SelectNormalThemed
                        name='patin'
                        label='Tipo de Patin'
                        options={tipoPatin}
                        setFieldValue={ setFieldValue }
                        value={values.patin}
                    />

                    <SelectIdNombre
                        name='club'
                        label='Seleccione Club'
                        options={ clubes || [] }
                        setFieldValue={ setFieldValue }
                        value={values.club}
                    />

                    <SelectIdName
                        name='invitado'
                        label='Club Invitado'
                        options={ invitados }
                        setFieldValue={ setFieldValue }
                        value={values.invitado}
                    />

                    </View>

                    <View className='mt-2'>
                        <ThemedButton icon="save-outline" onPress={ () => handleSubmit() }>
                            {`Generar Inscripción (${items.length})`}
                        </ThemedButton>
                    </View>

                </View>
            )}
            </Formik>
        </KeyboardAvoidingView>
        
    )


}
