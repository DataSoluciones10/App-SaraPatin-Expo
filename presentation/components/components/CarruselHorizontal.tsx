
import { View, FlatList } from 'react-native'
import { ImagenPoster } from '../poster/ImagenPoster';
import { ThemedText } from '../textos/ThemedText';



interface Props {
    datos: any;
    titulo: string;
}



export const CarruselHorizontal = ({ datos, titulo }:Props) => {

    return (

        <View>
            <ThemedText type='h2' bold className='pl-4'>{ titulo }</ThemedText>
            <FlatList 
                horizontal
                data={ datos }
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item }) => 
                    <ImagenPoster poster={item.img} titulo={item.titulo} /> 
                }
                contentContainerStyle={{ padding: 8 }}
            />
        </View>
    )

}
