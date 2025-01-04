
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

    const { profesorQueryId } = useProfesorId(`${id}`);
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
        // const rol = (id !== 'new') ? values.rol : 'DEPORTISTA_ROL';
        // await deportistaMutation.mutateAsync({ ...values, rol, 
        //     mensualidad:removerComas(values.mensualidad), img: imagen
        // });
        // if (id === 'new') {
        //     resetForm();
        //     valorImagen(undefined);
        // }
    }




    return (
        <DisenioPagina title={`${id === 'new' ? 'Crear' : 'Editar'} Profesor`}>
            {/* <AlertInfo /> */}

            <FormProfesores 
                profesor={profesor} id={id}
                handleFuncion={ handleGuardarInfo }  
                isLoading={ false }
                // deportistaMutation
            />

        </DisenioPagina>
    )

}


export default ProfesorScreen