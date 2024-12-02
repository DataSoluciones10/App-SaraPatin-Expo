
import { Pressable, Image, Text } from 'react-native';
import ThemedText from '../shared/ThemedText';


interface Props {
    id: string;
    poster: string;
    titulo: string;
    smallPoster?: boolean;
}


const ImagenPoster = ({ poster, titulo, }:Props) => {


    return (
        <Pressable className={`active:opacity-90 px-2 w-full h-full`}>
            <Image
                source={{ uri: poster }}
                className="rounded-2xl w-full h-full"
                // style={{width: smallPoster ? 85 : 150, height: smallPoster ? 130 : 250}}
                resizeMode="cover"
            />
            <ThemedText className="text-center text-ellipsis overflow-hidden whitespace-nowrap" type='semi-bold'>{ titulo }</ThemedText>
        </Pressable>
    )



}

export default ImagenPoster