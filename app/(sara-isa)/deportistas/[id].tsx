
import { useEffect } from 'react';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { FormikState } from 'formik';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen } from '../../../presentation/components';
import { useDeportistaId } from '@/presentation/hooks';
import { FormDeportistas } from '@/presentation/screen/usuarios';
import { useCiudadesStore, useClubStore, useProfesoresStore } from '@/presentation/stores';






const DeportistaScreen = () => {


    const { id } = useLocalSearchParams();
    const { deportistaQueryId, deportistaMutation } = useDeportistaId(`${id}`);
    const { startListadoRegiones } = useCiudadesStore();
    const { startClubPorDirector } = useClubStore();
    const { adminAndProfesores } = useProfesoresStore();


    useEffect(() => {
        startListadoRegiones();
        // return () => funcionImagen(undefined);
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


    // (nextState?: Partial<FormikState<any>> | undefined) => void
    const handleLogin = async(values:any, resetForm:any) => {
        const rol = (id !== 'new') ? values.rol : 'DEPORTISTA_ROL';
        try {
            await deportistaMutation.mutateAsync({ ...values, rol });
            if (id === 'new') resetForm();
        } catch (error) {
            console.error('Error al guardar el deportista:', error);
        }
    }



    return (
        <DisenioPagina title={`${id === 'new' ? 'Crear' : 'Editar'} Deportista`}>

            <FormDeportistas 
                deportista={deportista} 
                handleFuncion={handleLogin} id={id} 
                isLoading={ deportistaMutation }
            />

        </DisenioPagina>
    )

}


export default DeportistaScreen