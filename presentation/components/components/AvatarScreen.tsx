
import { Image, Pressable } from 'react-native'
import { images } from '@/presentation/helpers';
import { ThemedView } from '../textos/ThemedView';




interface Props {
    titulo?: string;
    imageUrl?: string;
    size?: number; 
}



export const AvatarScreen = ({ imageUrl, titulo, size=100 }: Props) => {




    return (
        <ThemedView  style={{flex:1, height: size, marginHorizontal:10, marginTop:20,  
            justifyContent:'center', alignItems:'center', marginBottom:25}}
        >
            <Pressable style={{ width:size, height:size, borderRadius:size / 2 }} 
                onPress={ () => console.log('hola david messi')} className="active:opacity-70"
            >
                <Image
                    source={imageUrl ? { uri: imageUrl } : images.noimg } 
                    style={{ width: '100%', height: '100%', borderRadius: size / 2 }}
                    resizeMode="cover"
                />
            </Pressable>

        </ThemedView>
    )
}
