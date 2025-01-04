
import { useEffect } from 'react';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { FormikState } from 'formik';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen } from '../../../presentation/components';
import { useProfesorId } from '@/presentation/hooks';
import { useCiudadesStore, useClubStore, useImagenStore, useProfesoresStore } from '@/presentation/stores';
import { FormProfesores } from '@/presentation/screen/usuarios';






const ProfesorScreen = () => {


    const { id } = useLocalSearchParams();
    const { imagen, valorImagen } = useImagenStore();
    const { profesorQueryId, profesorMutation, AlertInfo } = useProfesorId(`${id}`);

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

    

    if(profesorQueryId.isLoading) {
        return (
            <DisenioPagina title='Información Profesor'>
                <CargandoScreen titulo="Cargando Profesor..." />
            </DisenioPagina>
        )
    }


    if(!profesorQueryId.data) {
        return <Redirect href='/' />
    }   


    const profesor = profesorQueryId.data!;


    const handleGuardarInfo = async(values:any, resetForm:(nextState?: Partial<FormikState<any>> | undefined) => void) => {
        await profesorMutation.mutateAsync({ ...values, img: imagen, rol:'PROFESOR_ROL' });
        if (id === 'new') {
            resetForm();
            valorImagen(undefined);
        }
    }




    return (
        <DisenioPagina title={`${id === 'new' ? 'Crear' : 'Editar'} Profesor`}>
            <AlertInfo />

            <FormProfesores 
                id={id}
                profesor={profesor} 
                handleFuncion={ handleGuardarInfo }  
                isLoading={ profesorMutation }
            />
        </DisenioPagina>
    )

}


export default ProfesorScreen