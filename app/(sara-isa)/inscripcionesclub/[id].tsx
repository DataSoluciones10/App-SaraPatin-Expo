
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { FlatList } from 'react-native';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen, TarjetaIconoTexto } from '../../../presentation/components';
import { useInscripcionEntidadXId } from '@/presentation/hooks';






const OpcionesIncripcionClub = () => {


    const { id, entidad } = useLocalSearchParams();
    const { inscripcionClubQueryId } = useInscripcionEntidadXId(`${entidad}`);


    if(inscripcionClubQueryId.isLoading) {
        return (
            <DisenioPagina title={`Opciones de Inscripción`}>
                <CargandoScreen titulo="Cargando Información..." />
            </DisenioPagina>
        )
    }


    if(!inscripcionClubQueryId.data) {
        return <Redirect href='/' />
    } 


    const isLiga = inscripcionClubQueryId.data?.competencia?.tipo_competencia !== 'FESTIVAL';
    const isLigados = inscripcionClubQueryId.data?.patin === 'LIGADOS';




    const navigateTo = (url:any) => {
        router.push(url);
    };


    // url:'ddd',
    // url:`${entidad}/pago`,
    // url:`${entidad}/misdeportistas`,
    // url:`${id}/${entidad}/fulltime`,
    // url:`${id}/${entidad}/vertodo`,
    // url:'d',


    const data = [
        {key:1, titulo:'Descargar Factura De Pago', function: null, icono:'cloud-download-outline'},
        {key:2, titulo:'Subir Pago Competencia', function: null, icono:'cloud-upload-outline'},
        {key:3, titulo:'Mis Deportistas Inscritos', function: () => navigateTo(`/inscripciondeportista/${entidad}`), icono:'people-circle-outline'},
        {key:4, titulo:'Ranking Tiempo Real', function:null, icono:'videocam-outline'},
        {key:5, titulo:'Resultados Competencia', function:null, icono:'document-text-outline'},
        ...(isLiga ? [
            {key: 6, titulo:'Escalafon Por Fase', function:null, icono:'stats-chart-outline'},
        ...(isLigados ? [{key:7, titulo:'Escalafon General', function:null, icono:'git-merge-outline'}] : [])
        ] : [])
    ];



    return (
        <DisenioPagina title={`Opciones de Inscripción`}>
            <FlatList
                data={data}
                keyExtractor={(item:any) => item.key}
                numColumns={2}
                renderItem={({ item }) => (
                    <TarjetaIconoTexto 
                        onPress={item.function}
                        icon={item.icono}
                        titulo={item.titulo}
                    />
                )}
                columnWrapperStyle={{justifyContent:'space-between'}}
                contentContainerStyle={{padding:12}}
            />
        </DisenioPagina>
    )

}

export default OpcionesIncripcionClub


