
import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { DisenioCompetencia } from '@/presentation/layouts'
import { FormReportes } from '@/presentation/screen/reportes';
import { usePruebasStore } from '@/presentation/stores';
import { BackdropScreen, MensajeListaVacia, TarjetaInscripcionClub, TarjetasDePruebas } from '@/presentation/components';





const ReportesPruebasDeportistas = () => {


    const { id, entidad } = useLocalSearchParams();
    const [cargando, setCargando] = useState<boolean>(false);
    const [tipoReporte, setTipoReporte] = useState<string | null>(null);
    const { pruebasEntidad, pruebasDeportista, startListadoPruebasXFiltros } = usePruebasStore();



    const handleFiltrosPruebas = async(value:any) => {
        setTipoReporte(value.tipoReporte);
        setCargando( true );
        await startListadoPruebasXFiltros({...value, id });
        setCargando( false );
    }



    const handlePress = (item:any) => {
        // router.push({
        //     pathname: '/inscripcionesclub/[id]',
        //     params: { id: item.categoria_temporada?._id, entidad: item.id },
        // });
        console.log('holis')
    }



    return (

        <DisenioCompetencia title='Reporte de Pruebas'>
            <BackdropScreen titulo="Buscando información, por favor espere..." visible={cargando} />

            <View style={{ flex: 1 }}>
            {tipoReporte === 'DEPORTISTAS' ? (
                <FlatList
                    ListHeaderComponent={<FormReportes id={id} funcion={handleFiltrosPruebas} datos={pruebasDeportista} />}
                    data={pruebasDeportista || []}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({ item }) => (
                        <TarjetasDePruebas dato={item} isDeportista={entidad === item.club_inscrito._id} />
                    )}
                    contentContainerStyle={{flexGrow:1, paddingTop:5, paddingBottom:20}}
                    showsVerticalScrollIndicator={ false }
                    ListEmptyComponent={ <MensajeListaVacia titulo="No hay resultados por el momento." />}
                />

            ) : tipoReporte !== 'DEPORTISTAS' ? (
                <FlatList
                    ListHeaderComponent={<FormReportes id={id} funcion={handleFiltrosPruebas} datos={pruebasEntidad} />}
                    data={pruebasEntidad || []}
                    keyExtractor={(item:any) => item.idClub}
                    renderItem={({ item, index }) => (
                        <TarjetaInscripcionClub carpeta="deportistas" img={item.img}
                            titulo={item.nombre}
                            subtitulo1={item.competencia} 
                            subtitulo2={`${item.fase} - ${item.patin}`}
                            deportistas={item.deportistas}
                            oro={item.oro} plata={item.plata} bronce={item.bronce}
                            onPress={ () => handlePress(item) }
                            index={ index + 1 }
                            isClub={ item.idClub === `${entidad}`}
                        />
                    )}
                    contentContainerStyle={{flexGrow:1, paddingTop:5, paddingBottom:20}}
                    showsVerticalScrollIndicator={ false }
                    ListEmptyComponent={ <MensajeListaVacia titulo="No hay resultados por el momento." />}
                />

            ) : null}
            </View>
        </DisenioCompetencia>
    )
}


export default ReportesPruebasDeportistas