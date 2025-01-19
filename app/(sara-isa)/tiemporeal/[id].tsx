
import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { BannerDeCompetencia } from '@/presentation/layouts'
import { useCategoriaTemporadaXId } from '@/presentation/hooks';
import { ContenedorVerPruebas } from '@/presentation/screen/realtime';






const TiempoReal = () => {


    const { id, entidad } = useLocalSearchParams();
    const { categoriaTemporadaQueryId } = useCategoriaTemporadaXId(`${id}`);
    

    return (

        <BannerDeCompetencia>
            <View style={{ flex: 1 }}>

                {(!categoriaTemporadaQueryId.data)
                ?   <Text>HOla Mundo </Text>
                :   <ContenedorVerPruebas datos={categoriaTemporadaQueryId.data} />
                }

            </View>
        </BannerDeCompetencia>
    )
}




export default TiempoReal