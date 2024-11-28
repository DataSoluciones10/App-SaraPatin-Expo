
import { Pressable, Image } from 'react-native';


interface Props {
    id: string;
    poster: string;
    smallPoster?: boolean;
}


const ImagenPoster = ({ id, poster, smallPoster=false }:Props) => {


    return (
        <Pressable className={`active:opacity-90 px-2 ${ImagenPoster}`}>
            <Image
                source={{ uri: poster }}
                className="shadow-lg rounded-2xl w-full h-full"
                style={{width: smallPoster ? 85 : 150, height: smallPoster ? 130 : 250}}
                resizeMode="cover"
            />
        </Pressable>
    )



}

export default ImagenPoster