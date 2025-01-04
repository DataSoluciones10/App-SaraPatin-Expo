
import { useEffect } from 'react';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { FormikState } from 'formik';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen } from '../../../presentation/components';
import { useDeportistaId } from '@/presentation/hooks';
import { FormDeportistas } from '@/presentation/screen/usuarios';
import { useCiudadesStore, useClubStore, useImagenStore, useProfesoresStore } from '@/presentation/stores';
import { removerComas } from '@/presentation/helpers';






const DeportistaScreen = () => {


    const { id } = useLocalSearchParams();
    const { imagen, valorImagen } = useImagenStore();

    const { deportistaQueryId, deportistaMutation, AlertInfo } = useDeportistaId(`${id}`);
    const { startListadoRegiones } = useCiudadesStore();
    const { startClubPorDirector } = useClubStore();
    const { adminAndProfesores } = useProfesoresStore();


    useEffect(() => {
        startListadoRegiones();
        return () => valorImagen(undefined);
    }, []);


    useEffect(() => {
        startClubPorDirector();
    }, [])


    useEffect(() => {
        adminAndProfesores();
    }, [])

    


    if(deportistaQueryId.isLoading) {
        return (
            <DisenioPagina title='Información Deportista'>
                <CargandoScreen titulo="Cargando Deportistas..." />
            </DisenioPagina>
        )
    }


    if(!deportistaQueryId.data) {
        return <Redirect href='/' />
    }   


    const deportista = deportistaQueryId.data!;


    const handleGuardarInfo = async(values:any, resetForm:(nextState?: Partial<FormikState<any>> | undefined) => void) => {
        const rol = (id !== 'new') ? values.rol : 'DEPORTISTA_ROL';
        await deportistaMutation.mutateAsync({ ...values, rol, 
            mensualidad:removerComas(values.mensualidad), img: imagen
        });
        if (id === 'new') {
            resetForm();
            valorImagen(undefined);
        }
    }




    return (
        <DisenioPagina title={`${id === 'new' ? 'Crear' : 'Editar'} Deportista`}>
            <AlertInfo />

            <FormDeportistas 
                id={id}
                deportista={deportista} 
                handleFuncion={ handleGuardarInfo }  
                isLoading={ deportistaMutation }
            />

        </DisenioPagina>
    )

}


export default DeportistaScreen