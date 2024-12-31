

import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { DisenioPagina } from '@/presentation/layouts'







const TiempoReal = () => {


    const { id, entidad } = useLocalSearchParams();
    
console.log({id, entidad})


    return (


        <DisenioPagina title='Tiempo Real'>

            <Text style={{color:'red'}}>TiempoReal</Text>
            
        </DisenioPagina>
    )
}



export default TiempoReal