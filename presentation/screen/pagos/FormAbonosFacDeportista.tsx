

import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'

import * as Yup from 'yup';
import { Formik } from 'formik';
import { SelectNormalThemed, DateFormInput, ThemedButton, InputFormDecimales, InputFormText } from '@/presentation/components';
import { bancos } from '@/presentation/data';
import { useFacturaDeportistaStore } from '@/presentation/stores';
import { useCrearAbonoFacDeportista } from '@/presentation/hooks';
import { removerComas } from '@/presentation/helpers';




export const FormAbonosFacDeportista = () => {


    const { activeFacturaDeportista } = useFacturaDeportistaStore();
    const { AlertInfo, mutationFactura } = useCrearAbonoFacDeportista()
    

    const handleCrearInfo = async(values:any, resetForm:any) => {
        if(!activeFacturaDeportista) return console.log('error al cargar usuario');

        await mutationFactura.mutateAsync({ ...values, 
            valor:removerComas(values.valor), 
            factura: activeFacturaDeportista.id 
        });
        resetForm();
    }


    return (
        <View>
            <AlertInfo />

            <Formik
                initialValues={{
                    nombre: (activeFacturaDeportista) ? activeFacturaDeportista.deportista.nombre : '',
                    medio_pago: '',
                    valor: '',
                    fecha_pago: '',
                }}
                onSubmit={ ( values: any, { resetForm } ) => {
                    handleCrearInfo(values, resetForm);
                }}
                validationSchema={
                    Yup.object({
                        medio_pago: Yup.string()
                            .required('Campo Requerido'),
                        valor: Yup.string()
                            .required('Campo Requerido'),
                        fecha_pago: Yup.string()
                            .required('Campo Requerido'),
                    })
                }
            >
            {({ values, handleSubmit, handleChange, setFieldValue }) => (
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                    <ScrollView style={{marginHorizontal:15}} showsVerticalScrollIndicator={false}>

                        <InputFormText
                            titulo='Deportista'
                            placeholder='Deportista'
                            autoCapitalize='none'
                            value={values.nombre}
                            onChangeText={handleChange('nombre')}
                            name='nombre'
                            disabled={true}
                        />

                        <DateFormInput
                            titulo="Fecha de Pago"
                            name="fecha_pago"
                            value={values.fecha_pago}
                            setFieldValue={ setFieldValue }
                            placeholder="Fecha de Pago"
                        />

                        <SelectNormalThemed
                            name='medio_pago'
                            label='Medio de Pago'
                            options={bancos}
                            titulo='Medio de Pago'
                            setFieldValue={ setFieldValue }
                            value={values.medio_pago}
                        />

                        <InputFormDecimales
                            titulo='Valor'
                            placeholder='Valor'
                            keyboardType="numeric"
                            value={values.valor}
                            onChangeText={handleChange('valor')}
                            name='valor'
                            style={{flex:1}}
                        />

                        <View style={{marginBottom:15, marginTop:10}}>
                            <ThemedButton icon='save-outline' onPress={ () => handleSubmit() } disabled={mutationFactura.isPending}>
                                Crear Abono
                            </ThemedButton>
                        </View>
                
                    </ScrollView>
                </KeyboardAvoidingView>
            )}
            </Formik>
        </View>
    )
}
