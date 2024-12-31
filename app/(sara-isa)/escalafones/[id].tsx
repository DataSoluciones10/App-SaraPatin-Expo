
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, FlatList } from 'react-native';

import { DisenioCompetencia } from '@/presentation/layouts'
import { FormEscalafon } from '@/presentation/screen/reportes';
import { BackdropScreen, MensajeListaVacia, TarjetaEscalafon, TarjetaEscalafonEntidades } from '@/presentation/components';
import { useInscripcionEntidadXId } from '@/presentation/hooks';
import { generalCompetenciaXFiltros } from '@/core/actions';



const EscalafonesXFases = () => {

    const { id, entidad } = useLocalSearchParams();
    const [cargando, setCargando] = useState<boolean>(false);
    const { inscripcionClubQueryId } = useInscripcionEntidadXId(`${entidad}`);
    const [tipoReporte, setTipoReporte] = useState<string | null>(null);
    const [pruebas, setPruebas] = useState<any[]>([]);
    const [entidades, setEntidades] = useState<any[]>([]);
    


    const handleFiltrosPruebas = async(value:any) => {
        setTipoReporte(value.tipoReporte);
        setCargando( true );
        const datos = await generalCompetenciaXFiltros({...value, id, tipoPatin: inscripcionClubQueryId.data?.patin});
        (value.tipoReporte) === 'DEPORTISTAS' ? setPruebas(datos) : setEntidades(datos);
        setCargando( false );
    }



    return (
        <DisenioCompetencia title='Escalafon por Fases'>
            <BackdropScreen titulo="Buscando información, por favor espere..." visible={cargando} />
            
            <View style={{ flex: 1 }}>
                {tipoReporte === 'DEPORTISTAS' ? (
                    <FlatList
                        ListHeaderComponent={<FormEscalafon id={id} funcion={handleFiltrosPruebas} datos={[]} />}
                        data={pruebas || []}
                        keyExtractor={(item:any) => item.uid}
                        renderItem={({ item, index }) => (
                            <TarjetaEscalafon 
                                datos={item} 
                                index={index + 1} 
                                isDeportista={entidad === item.idClub}
                            />
                        )}
                        contentContainerStyle={{flexGrow:1, paddingTop:5, paddingBottom:20}}
                        showsVerticalScrollIndicator={ false }
                        ListEmptyComponent={ <MensajeListaVacia titulo="No hay resultados por el momento." />}
                    />
    
                ) : tipoReporte !== 'DEPORTISTAS' ? (
                    <FlatList
                        ListHeaderComponent={<FormEscalafon id={id} funcion={handleFiltrosPruebas} datos={[]} />}
                        data={entidades || []}
                        keyExtractor={(item:any) => item.idClub}
                        renderItem={({ item, index }) => ( 
                            <TarjetaEscalafonEntidades 
                                datos={item} 
                                index={index + 1} 
                                isClub={entidad === item.idClub} 
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



export default EscalafonesXFases