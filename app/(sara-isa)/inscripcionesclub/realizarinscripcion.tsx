
import { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { DisenioPagina } from '@/presentation/layouts';
import { FormInscripciones } from '@/presentation/screen/inscripciones';
import { BackdropScreen, MensajeListaVacia } from '@/presentation/components';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { useTemporadaStore } from '@/presentation/stores';
import { useAlertConConfirm, useAlertInfo, useDeportistasInscripcion, useInscripcionCrear } from '@/presentation/hooks';
import { CarruselUserHorizontal } from '@/presentation/screen/inscripciones';




const RealizarInscripcion = () => {


    const { background } = useThemeColors();
    const { inscripcionActiva, startLimpiarTemporadaActiva } = useTemporadaStore();
    const { showDialog, AlertModal } = useAlertConConfirm();
    const { show, AlertInfo } = useAlertInfo();

    const { inscripcionesSemiQuery, inscripcionesNovatosQuery, InscripcionesLigadosQuery } = useDeportistasInscripcion();
    const { AlertMsg, crearInscripcion } = useInscripcionCrear();
    
    const [items, setItems] = useState<string[]>([]);
    const [compe, setCompe] = useState(null);
    const [patin, setPatin] = useState<string | null>(null);



    const handleGenerarInscripcion = (values:any, reset:any) => {
        if(items.length < 1) {
            return show({ title: 'Error', message: 'Debes seleccionar al menos un deportista', buttonText: 'Cerrar', type: 'error'});
        }

        showDialog({
            title: "Realizar Inscripción",
            message: "¿Deseas realizar está inscripción?",
            confirmText: "Sí",
            cancelText: "No",
            type: "primary",
            onConfirm: async () => {
                crearInscripcion.mutate(
                    { ...values, deportistas: items },
                    { onSuccess: () => {
                        reset(); setItems([]);
                        setCompe(null); setPatin(null); 
                        startLimpiarTemporadaActiva();
                    }}
            )},
            onCancel: () => { console.log("Cancelado"); }
        });
    }
    



    return (

        <DisenioPagina title='Realizar Inscripción'>
            <AlertModal />
            <AlertInfo />
            <AlertMsg />
            <BackdropScreen titulo="Procesando su petición." visible={crearInscripcion.isPending} />


            <ScrollView style={{ backgroundColor:background }}>
                <View style={{paddingBottom: 30}}>

                    <View className='mt-3 mb-7'>
                        <FormInscripciones items={items} compe={compe} setCompe={setCompe}
                            patin={patin} setPatin={setPatin} handleFunction={handleGenerarInscripcion}
                        />
                    </View>

                    {/* Mensajes negativos de pruebas */}
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        {(!compe || !patin) && 
                            <MensajeListaVacia titulo="Buscar una competencia disponible" 
                                style={{marginTop: 70}} icon="search"
                            />
                        }
                        {(!inscripcionActiva && compe && patin) && 
                            <MensajeListaVacia titulo="La competencia no está activa actualmente" 
                                style={{marginTop: 70}} icon="ban" 
                            />  
                        }
                    </View>


                    {(inscripcionActiva) &&
                    <View>
                        <CarruselUserHorizontal titulo='Semiprofesional'
                            items={items} setItems={setItems} 
                            datos={inscripcionesSemiQuery.data?.pages.flatMap((page) => page) ?? []}
                        />

                        <CarruselUserHorizontal titulo='Novatos'
                            items={items} setItems={setItems} 
                            datos={inscripcionesNovatosQuery.data?.pages.flatMap((page) => page) ?? []}
                        />

                        <CarruselUserHorizontal titulo='Ligados'
                            items={items} setItems={setItems} 
                            datos={InscripcionesLigadosQuery.data?.pages.flatMap((page) => page) ?? []}
                        />
                    </View>
                    }

                </View>
            </ScrollView>
        </DisenioPagina>
    )
}

export default RealizarInscripcion