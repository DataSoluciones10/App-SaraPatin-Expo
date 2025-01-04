
import { useEffect } from 'react';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { FormikState } from 'formik';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen } from '../../../presentation/components';
import { useDeportistaId, useEntidadId } from '@/presentation/hooks';
import { useCiudadesStore, useClubStore, useImagenStore, useProfesoresStore } from '@/presentation/stores';
import { removerComas } from '@/presentation/helpers';
import { FormClubes } from '@/presentation/screen/clubes';






const EntidadScreen = () => {


    const { id } = useLocalSearchParams();
    const { imagen, valorImagen } = useImagenStore();

    const { clubQueryId } = useEntidadId(`${id}`);
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

    

    if(clubQueryId.isLoading) {
        return (
            <DisenioPagina title='Información Entidad'>
                <CargandoScreen titulo="Cargando Entidad..." />
            </DisenioPagina>
        )
    }


    if(!clubQueryId.data) {
        return <Redirect href='/' />
    }   


    const club = clubQueryId.data!;


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
        <DisenioPagina title={`${id === 'new' ? 'Crear' : 'Editar'} Entidad`}>
            {/* <AlertInfo /> */}

            <FormClubes 
                club={club} id={id}
                handleFuncion={ handleGuardarInfo }  
                isLoading={ false }
                // deportistaMutation
            />

        </DisenioPagina>
    )

}


export default EntidadScreen