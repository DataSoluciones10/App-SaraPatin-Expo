
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { Alert, FlatList } from 'react-native';

import { DisenioPagina } from '@/presentation/layouts'
import { CargandoScreen, TarjetaIconoTexto } from '../../../presentation/components';
import { useInscripcionEntidadXId } from '@/presentation/hooks';
import { useState } from 'react';
import { descargarFacturaCompetencia } from '@/core/actions';
import { descargarPDF } from '@/presentation/helpers';






const OpcionesIncripcionClub = () => {


    const { id, entidad } = useLocalSearchParams();
    const { inscripcionClubQueryId } = useInscripcionEntidadXId(`${entidad}`);
    const [cargando, setCargando] = useState(false)


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
        {key:2, titulo:'Subir Pago Competencia', icono:'cloud-upload-outline', function: () =>
        Alert.alert('Estamos mejorando para ti', 'Pronto te ofreceremos una experiencia aún mejor. ¡Gracias por tu paciencia!'), },
        {key:3, titulo:'Mis Deportistas Inscritos', function: () => navigateTo(`/inscripciondeportista/${entidad}`), icono:'people-circle-outline'},
        {key:4, titulo:'Ranking Tiempo Real', icono:'videocam-outline', function: () => router.push({ pathname: '/tiemporeal/[id]', params: { id:`${id}`, entidad } })},
        {key:5, titulo:'Resultados Competencia', icono:'document-text-outline', function: () => router.push({ pathname: '/reportespruebas/[id]', params: { id:`${id}`, entidad } })},
        ...(isLiga ? [
            {key: 6, titulo:'Escalafon Por Fases', icono:'stats-chart-outline', function: () => router.push({ pathname: '/escalafones/[id]', params: { id:`${id}`, entidad } })},
        ...(isLigados ? [{key:7, titulo:'Escalafon General', icono:'git-merge-outline', function: () =>
            Alert.alert('Estamos mejorando para ti', 'Pronto te ofreceremos una experiencia aún mejor. ¡Gracias por tu paciencia!') }] : [])
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


