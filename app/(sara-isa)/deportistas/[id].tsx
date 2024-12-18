
import { Redirect, useLocalSearchParams } from 'expo-router';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen } from '../../../presentation/components';
import { useDeportistaId } from '@/presentation/hooks';
import { FormDeportistas } from '@/presentation/screen/usuarios';
import { useCiudadesStore } from '@/presentation/stores';
import { useEffect } from 'react';
import { FormikState } from 'formik';






const DeportistaScreen = () => {


    const { id } = useLocalSearchParams();
    const { deportistaQueryId, deportistaMutation } = useDeportistaId(`${id}`);
    const { startListadoRegiones } = useCiudadesStore();


    useEffect(() => {
        startListadoRegiones();
        // return () => funcionImagen(undefined);
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
        deportistaMutation.mutate(values);
        // setIsPosting(false);

        // if( resp ) {
            // router.replace('/');
            // resetForm();
            // return;
        // }
        // console.log('todo bien', values)
    }



    return (
        <DisenioPagina title={`${id === 'new' ? 'Crear' : 'Editar'} Deportista`}>

            <FormDeportistas deportista={deportista} handleFuncion={handleLogin} id={id} />

        </DisenioPagina>
    )

}


export default DeportistaScreen