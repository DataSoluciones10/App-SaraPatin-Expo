
import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, FlatList } from 'react-native';

import { DisenioPagina } from '@/presentation/layouts'
import { FormEscalafon } from '@/presentation/screen/reportes';
import { BackdropScreen, MensajeListaVacia, TarjetaEscalafon } from '@/presentation/components';
import { useInscripcionEntidadXId } from '@/presentation/hooks';
import { generalCompetenciaXFiltros } from '@/core/actions';





const datos = [
    {
      uid: '1',
      idClub: 'club1',
      nombre: 'Juan Pérez',
      numero: { numero_competencia: 101 },
      entidad: 'Club Atlético A',
      total: 120,
      pruebas: [
        {
          nombre: 'Fase 1',
          pruebas_tem: [
            { prueba: '100m', puntos: 15 },
            { prueba: '200m', puntos: 18 },
            { prueba: '400m', puntos: null }, // No asistió
          ],
        },
        {
          nombre: 'Fase 2',
          pruebas_tem: [
            { prueba: 'Salto Largo', puntos: 20 },
            { prueba: 'Lanzamiento Bala', puntos: 10 },
          ],
        },
      ],
    },
    {
      uid: '2',
      idClub: 'club2',
      nombre: 'María González',
      numero: { numero_competencia: 102 },
      entidad: 'Club Olímpico B',
      total: 140,
      pruebas: [
        {
          nombre: 'Fase 1',
          pruebas_tem: [
            { prueba: '100m', puntos: 20 },
            { prueba: '200m', puntos: 22 },
          ],
        },
      ],
    },
    {
      uid: '3',
      idClub: 'club1',
      nombre: 'Luis Martínez',
      numero: { numero_competencia: 103 },
      entidad: 'Club Atlético A',
      total: 100,
      pruebas: [
        {
          nombre: 'Fase 1',
          pruebas_tem: [
            { prueba: 'Salto Largo', puntos: null }, // No asistió
            { prueba: 'Lanzamiento Bala', puntos: 12 },
          ],
        },
        {
          nombre: 'Fase 2',
          pruebas_tem: [
            { prueba: '400m', puntos: 25 },
            { prueba: '800m', puntos: 15 },
          ],
        },
      ],
    },
  ];





const EscalafonesXFases = () => {


    const { id, entidad } = useLocalSearchParams();
    const [cargando, setCargando] = useState<boolean>(false);
    const { inscripcionClubQueryId } = useInscripcionEntidadXId(`${entidad}`);
    const [tipoReporte, setTipoReporte] = useState<string | null>(null);
    const [pruebas, setPruebas] = useState<any[]>([]);
    const [entidades, setEntidades] = useState<any[]>([]);
    


    const handleFiltrosPruebas = async(value:any) => {
        setTipoReporte(value.tipoReporte);
        // setCargando( true );
        const datos = await generalCompetenciaXFiltros({...value, id, tipoPatin: inscripcionClubQueryId.data?.patin});
        (value.tipoReporte) === 'DEPORTISTAS' ? setPruebas(datos) : setEntidades(datos);
        // setCargando( false );
    }

    console.log({pruebas})



    return (
        // isDeportista={entidad === item.club_inscrito._id}
        <DisenioPagina title='Escalafon por Fases'>
            <BackdropScreen titulo="Buscando información, por favor espere..." visible={cargando} />
            
            <View style={{ flex: 1 }}>
                {tipoReporte === 'DEPORTISTAS' ? (
                    <FlatList
                        ListHeaderComponent={<FormEscalafon id={id} funcion={handleFiltrosPruebas} datos={[]} />}
                        data={datos || []}
                        keyExtractor={(item:any) => item.id}
                        renderItem={({ item }) => (
                            <TarjetaEscalafon dato={item}  />
                        )}
                        contentContainerStyle={{flexGrow:1, paddingTop:5, paddingBottom:20}}
                        showsVerticalScrollIndicator={ false }
                        ListEmptyComponent={ <MensajeListaVacia titulo="No hay resultados por el momento." />}
                    />
    
                ) : tipoReporte !== 'DEPORTISTAS' ? (
                    <FlatList
                        ListHeaderComponent={<FormEscalafon id={id} funcion={handleFiltrosPruebas} datos={[]} />}
                        data={datos || []}
                        keyExtractor={(item:any) => item.idClub}
                        renderItem={({ item, index }) => ( <TarjetaEscalafon dato={item}  />
                            // <TarjetaInscripcionClub carpeta="deportistas" img={item.img}
                            //     titulo={item.nombre}
                            //     subtitulo1={item.competencia} 
                            //     subtitulo2={`${item.fase} - ${item.patin}`}
                            //     deportistas={item.deportistas}
                            //     oro={item.oro} plata={item.plata} bronce={item.bronce}
                            //     onPress={ () => handlePress(item) }
                            //     index={ index + 1 }
                            //     isClub={ item.idClub === `${entidad}`}
                            // />
                        )}
                        contentContainerStyle={{flexGrow:1, paddingTop:5, paddingBottom:20}}
                        showsVerticalScrollIndicator={ false }
                        ListEmptyComponent={ <MensajeListaVacia titulo="No hay resultados por el momento." />}
                    />

                ) : null}
            </View>
            
        </DisenioPagina>
    )
}



export default EscalafonesXFases