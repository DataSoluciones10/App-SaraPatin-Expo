
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



    const handleLogin = async(values:any, resetForm:(nextState?: Partial<FormikState<any>> | undefined) => void) => {
        // setIsPosting(true);
        // deportistaMutation.mutate(values);
        // setIsPosting(false);

        // if( resp ) {
            // router.replace('/');
            // resetForm();
            // return;
        // }
        console.log('todo bien', values)
    }



    return (
        <DisenioPagina title={`${id === 'new' ? 'Crear' : 'Editar'} Deportista`}>

            <FormDeportistas deportista={deportista} handleFuncion={handleLogin} id={id} />

        </DisenioPagina>
    )

}


export default DeportistaScreen