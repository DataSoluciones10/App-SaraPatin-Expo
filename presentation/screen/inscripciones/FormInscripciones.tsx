
import { useEffect } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import * as Yup from 'yup';
import { Formik } from "formik";
import { SelectNormalThemed, ThemedButton, SelectIdName, SelectIdNombre } from '@/presentation/components';
import { invitados, tipoPatin } from '@/presentation/data';
import { useClubStore, useCompetenciaStore, useTemporadaStore } from '@/presentation/stores';





export const FormInscripciones = ({ items, compe, setCompe, patin, setPatin, handleFunction }:any) => {


    const { startClubPorDirector, clubes } = useClubStore();
    const { competencias, startListadoCompetenciasActivas } = useCompetenciaStore();
    const { inscripcionActiva, startConfirmarTemporada, startLimpiarTemporadaActiva } = useTemporadaStore();


    useEffect(() => {
        startListadoCompetenciasActivas();
        return () => { startLimpiarTemporadaActiva() }
    }, []);


    useEffect(() => {
        startClubPorDirector();
    }, []);


    const buscarCompetencia = (valor:any) => {
        setCompe(valor);
        if(patin && valor){
            startConfirmarTemporada({ competencia:valor, patin });
        }
    }


    const buscarTipoPatin = (valor:string) => {
        setPatin(valor);
        if(compe && valor){
            startConfirmarTemporada({ competencia:compe, patin: valor });
        }
    }
    


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
            {({ values, handleSubmit, setFieldValue }) => (
                <View style={{ paddingHorizontal:15 }}>
                    <View style={{marginTop:20}}>

                    <SelectIdNombre
                        name='competencia'
                        label='Seleccione Competencia'
                        options={ competencias || [] }
                        value={values.competencia}
                        setFieldValue={(field:any, value:any) => {
                            setFieldValue(field, value);
                            if (value) { buscarCompetencia(value) }
                        }}
                    />

                    <SelectNormalThemed
                        name='patin'
                        label='Tipo de Patin'
                        options={tipoPatin}
                        // setFieldValue={ setFieldValue }
                        value={values.patin}
                        setFieldValue={(field:any, value:any) => {
                            setFieldValue(field, value);
                            if (value) { buscarTipoPatin(value) }
                        }}
                    />


                    {(inscripcionActiva) && 
                    <View>
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
                    }

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
