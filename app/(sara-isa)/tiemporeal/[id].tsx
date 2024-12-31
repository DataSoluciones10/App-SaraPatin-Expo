

import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { DisenioCompetencia } from '@/presentation/layouts'







const TiempoReal = () => {


    const { id, entidad } = useLocalSearchParams();
    


    return (

        <DisenioCompetencia title='Tiempo Real'>

            <Text style={{color:'red'}}>TiempoReal</Text>
            
        </DisenioCompetencia>
    )
}



export default TiempoReal