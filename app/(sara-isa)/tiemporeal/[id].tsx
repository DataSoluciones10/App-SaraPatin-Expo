

import { useLocalSearchParams } from 'expo-router';
import { BannerDeCompetencia } from '@/presentation/layouts'
import { FlatList, View } from 'react-native';
import { MensajeListaVacia, TarjetasDePruebas } from '@/presentation/components';



    const baseDatos = {
        faltas: ['1', '2', '3'],
        deportista: { nombre: 'David Cortes Messi' },
        club_inscrito: { entidad: { nombre: 'Leonas de Fuego' } },
        tiempo: '00:34:345',
        numero_competencia: { numero_competencia: '010' },
        posicion: '1',
    };
        
    
    const datos = Array.from({ length: 20 }, (_, index) => ({
        id: (index + 1).toString(),
        ...baseDatos,
    }));






const TiempoReal = () => {


    const { id, entidad } = useLocalSearchParams();
    

    return (

        <BannerDeCompetencia>
            <View style={{ flex: 1 }}>

                <FlatList
                    data={datos || []}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({ item }) => (
                        <TarjetasDePruebas 
                            dato={item} 
                            // isDeportista={entidad === item.club_inscrito._id} 
                        />
                    )}
                    contentContainerStyle={{flexGrow:1, paddingTop:10, paddingBottom:20}}
                    showsVerticalScrollIndicator={ false }
                    ListEmptyComponent={ <MensajeListaVacia titulo="Esperando el inicio de la competencia." icon="play" />}
                />

            </View>
        </BannerDeCompetencia>
    )
}




export default TiempoReal