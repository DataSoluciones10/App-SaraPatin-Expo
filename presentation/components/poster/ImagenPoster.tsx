
import { Pressable, Image, View, ImageSourcePropType } from 'react-native';
import { ThemedText } from '../textos/ThemedText';
import { GradientePoster } from '../gradientes/GradientePoster';



interface Props {
    poster: ImageSourcePropType;
    titulo: string;
    smallPoster?: boolean;
}




export const ImagenPoster = ({ poster, titulo, }:Props) => {


    

    return (

        // onPress={() => handleToggleSelect(item.id)}
        <Pressable className={`active:opacity-70 px-1`} >
            <View style={{ position:'relative', width: 120, height:160, overflow:'hidden', borderRadius:10 }}>
                <Image resizeMode="cover" style={{ width:'100%', height:'100%' }} source={ poster } />

                {/* Gradiente de Imagen */}
                <GradientePoster />

                <View className="absolute bottom-1 left-1 right-1 px-1 py-1 rounded-md zIndex-3">
                    <ThemedText className="text-center overflow-hidden mt-1" type='semi-bold' 
                        numberOfLines={2} ellipsizeMode="tail" style={{color:'white', fontSize:13}}
                    >
                        { titulo }
                    </ThemedText>
                </View>
            </View>
        </Pressable>

    )
}