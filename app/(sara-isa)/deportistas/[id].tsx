
import { Redirect, useLocalSearchParams } from 'expo-router';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen } from '../../../presentation/components';
import { useDeportistaId } from '@/presentation/hooks';
import { FormDeportistas } from '@/presentation/screen/usuarios';
import { useCiudadesStore } from '@/presentation/stores';
import { useEffect } from 'react';






const DeportistaScreen = () => {


    const { id } = useLocalSearchParams();
    const { deportistaQueryId } = useDeportistaId(`${id}`);
    const { startListadoRegiones } = useCiudadesStore();


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


    useEffect(() => {
        startListadoRegiones();
        // return () => funcionImagen(undefined);
    }, [])




    const handleLogin = async(values:any, resetForm:any) => {
        // setIsPosting(true);
        // const wasSuccessful = await startLogin(values.correo, values.password);
        // setIsPosting(false);

        // if(wasSuccessful) {
        //     router.replace('/');
        //     resetForm();
        //     return;
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