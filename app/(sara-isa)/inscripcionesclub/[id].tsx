
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { Alert, FlatList } from 'react-native';

import { DisenioCompetencia, DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen, TarjetaIconoTexto } from '../../../presentation/components';
import { useInscripcionEntidadXId } from '@/presentation/hooks';
import { useState } from 'react';
import { descargarFacturaCompetencia } from '@/core/actions';
import { descargarPDF } from '@/presentation/helpers';






const OpcionesIncripcionClub = () => {


    const { id, entidad } = useLocalSearchParams();
    const { inscripcionClubQueryId } = useInscripcionEntidadXId(`${entidad}`);
    const isLiga = inscripcionClubQueryId.data?.competencia?.tipo_competencia !== 'FESTIVAL';
    const isLigados = inscripcionClubQueryId.data?.patin === 'LIGADOS';
    const [cargando, setCargando] = useState(false);


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



    const navigateTo = (url: any) => {
        const pathname = `/${url}/[id]` as any;
        router.push({ pathname, params: { id, entidad } });
    };



    const handleAlert = (url:any) => {
        Alert.alert(
            'Estamos mejorando para ti', 
            'Pronto te ofreceremos una experiencia aún mejor. ¡Gracias por tu paciencia!'
        )
    };


    // categoriaTem.competencia._id
    const handleGenerarFactura = async() => {
        if(inscripcionClubQueryId.data) {
            const inscripcionClub = inscripcionClubQueryId.data;
            const nombreArchivo = `Factura-${inscripcionClub.entidad.nombre.replaceAll(' ', '')}`

            const datos = { insClub: inscripcionClub.id, categoria: inscripcionClub.categoria_temporada._id, 
                competencia: inscripcionClub.categoria_temporada.competencia._id, 
                temporada: inscripcionClub.categoria_temporada.temporada._id, 
            }
            setCargando(true);
            const data = await descargarFacturaCompetencia(datos);
            setCargando(false);
            // console.log(data)
            // descargarPDF(data, nombreArchivo);
        }
    } 


    const data = [
        {key:1, titulo:'Descargar Factura De Pago', function: handleGenerarFactura, icono:'cloud-download-outline'},
        {key:2, titulo:'Subir Pago Competencia', icono:'cloud-upload-outline', function: handleAlert },
        {key:3, titulo:'Mis Deportistas Inscritos', icono:'people-circle-outline', function:() => navigateTo('inscripciondeportista')},
        {key:4, titulo:'Ranking Tiempo Real', icono:'videocam-outline', function:() => navigateTo('tiemporeal') },
        {key:5, titulo:'Resultados Competencia', icono:'document-text-outline', function:() => navigateTo('reportespruebas')},
        ...(isLiga ? [
            {key: 6, titulo:'Escalafon Por Fases', icono:'stats-chart-outline', function:() => navigateTo('escalafones')},
        ...(isLigados ? [{key:7, titulo:'Escalafon General', icono:'git-merge-outline', function: handleAlert }] : [])
        ] : [])
    ];



    return (
        <DisenioCompetencia title={`Opciones de Inscripción`}>
            <FlatList
                data={data}
                keyExtractor={(item:any) => item.key}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <TarjetaIconoTexto 
                        onPress={item.function}
                        icon={item.icono}
                        titulo={item.titulo}
                        isLast={index === data.length - 1 && data.length % 2 !== 0}
                    />
                )}
                columnWrapperStyle={{justifyContent:'space-between'}}
                contentContainerStyle={{padding:12}}
            />

        </DisenioCompetencia>
    )
}

export default OpcionesIncripcionClub


