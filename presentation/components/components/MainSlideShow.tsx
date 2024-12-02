
import { useRef } from 'react';

import { View, useWindowDimensions } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import ImagenPoster from './ImagenPoster';



interface Props {
    datos: any[];
}




const MainSlideShow = ({ datos }:Props) => {


    const ref = useRef<ICarouselInstance>(null);
    const { width } = useWindowDimensions(); 


    return (

        <View className='h-[220px] w-full'>
            <Carousel 
                ref={ref}
                data={ datos }
                renderItem={({ item }) => ( <ImagenPoster id={item.id} poster={item.img} titulo={item.titulo} /> )}
                width={160}
                height={210}
                style={{width:width, height:250, justifyContent:'center', alignItems:'center'}}
                // mode="parallax"
                // modeConfig={{parallaxScrollingScale:0.9, parallaxScrollingOffset:50}}
                defaultIndex={1}
            />
        </View>
    )


}

export default MainSlideShow