

import { KeyboardAvoidingView, View } from 'react-native';

import * as Yup from 'yup';
import { Formik } from "formik";
import { SelectNormalThemed, ThemedButton, SelectNameNormal } from '@/presentation/components';
import { invitados, tipoPatin } from '@/presentation/data';





export const FormInscripciones = ({ items }:any) => {



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
                    console.log({values})
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
            {({ handleChange, values, errors, handleBlur, handleSubmit }) => (
                <View style={{ paddingHorizontal:15 }}>
                    <View style={{marginTop:20}}>

                        <SelectNormalThemed
                            name='competencia'
                            label='Seleccione Competencia'
                            options={ [] }
                        />

                        <SelectNormalThemed
                            name='patin'
                            label='Tipo Patin'
                            options={ tipoPatin }
                        />

                        <SelectNormalThemed
                            name='club'
                            label='Seleccione Club'
                            options={ [] }
                        />

                        <SelectNameNormal
                            name='invitado'
                            label='Club Invitado'
                            options={ invitados }
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
