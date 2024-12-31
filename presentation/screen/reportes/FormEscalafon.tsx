
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';

import * as Yup from 'yup';
import { Formik } from "formik";
import { SelectNormalThemed, ThemedButton } from '@/presentation/components';
import { filtroCategorias, ramaData, tipoPrueba, tipoReportes } from '@/presentation/data';
import { useCategoriasTemporadaStore } from '@/presentation/stores';





export const FormEscalafon = ({ id, datos=[], funcion }:any) => {


    const { categoriasXPatinXTipoCompetencia } = useCategoriasTemporadaStore();
    const [categoria, setCategoria] = useState<any[]>([]);


    useEffect(() => {
        if( id ){
            const fetchData = async () => {
                const data = await categoriasXPatinXTipoCompetencia(id);
                setCategoria(data);
            };
            fetchData();
        }
    }, [id])



    const handleFiltrosPruebas = async({categorias, ...value}:any) => {
        const datos:any = {
            'MENORES': ['7', '8', '9', '10'],
            'TRANSICION': ['11', '12', '13'],
            'MAYORES': ['prejuvenil', 'juvenil', 'mayores'],
            'TODAS': []
        };
        funcion({...value, categorias: (datos[categorias]) ? datos[categorias] : [] });
    }




    return (

        <KeyboardAvoidingView style={{flex:1}}>
            <Formik
                initialValues={{ 
                    tipoReporte: '',
                    categorias: '',
                    rama: '',
                    categoria: '',
                }}
                onSubmit={ ( values:any ) => {
                    handleFiltrosPruebas(values)
                }}
                validationSchema={
                    Yup.object({
                        tipoReporte: Yup.string()
                                .required('Campo Requerido'),
    
                        rama: Yup.string().when('tipoReporte', {
                            is: (value:string) => value === 'DEPORTISTAS',
                            then: (schema) => schema.required('Campo Requerido'),
                            otherwise: (schema) => schema,
                        }),
    
                        categoria: Yup.string().when('tipoReporte', {
                            is: (value:string) => value === 'DEPORTISTAS',
                            then: (schema) => schema.required('Campo Requerido'),
                            otherwise: (schema) => schema,
                        }),
    
                    })
                }
            >
            {({ values, handleSubmit, setFieldValue }) => (
                <View style={{ paddingHorizontal:15 }}>
                    <View style={{marginTop:20}}>

                        <SelectNormalThemed
                            name='tipoReporte'
                            label='Tipo de Reporte'
                            options={tipoReportes}
                            setFieldValue={ setFieldValue }
                            value={values.tipoReporte}
                        />

                        {(['CLUBES', 'ESCUELAS', 'ENTIDADES'].includes(values.tipoReporte) ) && 
                        <SelectNormalThemed
                            name='categorias'
                            label='Categorias'
                            options={filtroCategorias}
                            setFieldValue={ setFieldValue }
                            value={values.categorias}
                        />
                        }

                        {(values.tipoReporte === 'DEPORTISTAS') && 
                        <View>
                            <SelectNormalThemed
                                name='rama'
                                label='Rama'
                                options={ ramaData }
                                setFieldValue={ setFieldValue }
                                value={values.rama}
                            />

                            <SelectNormalThemed
                                name='categoria'
                                label='Categoria'
                                options={ categoria }
                                setFieldValue={ setFieldValue }
                                value={values.categoria}
                            />
                        </View>
                        }

                    </View>

                    <View className="flex-row w-full gap-4 pt:-2 pb-4">
                        <View className="flex-1">
                            <ThemedButton icon="search" onPress={() => handleSubmit()}>
                                Consultar
                            </ThemedButton>
                        </View>

                        {/* {(datos.length > 0) &&
                        <View className="flex-1">
                            <ThemedButton icon="cloud-download-outline" onPress={() => handleSubmit()}>
                                Descargar
                            </ThemedButton>
                        </View>
                        } */}
                    </View>

                </View>
            )}
            </Formik>
        </KeyboardAvoidingView>
        
    )


}
