
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ImagenPoster } from '../poster/ImagenPoster';






export const CarruselHorizontal = ({ datos }:any) => {

    return (

        <View>
            <FlatList 
                horizontal
                data={ datos }
                showsHorizontalScrollIndicator={ false }
                renderItem={ ({ item }) => 
                    <ImagenPoster id={item.id} 
                        poster={item.img} 
                        titulo={item.titulo} 
                    /> }
            />
        </View>
    )

}
