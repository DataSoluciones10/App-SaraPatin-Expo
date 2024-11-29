

import { datosPrincipales } from '@/presentation/data/datos';
import { useRef } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';




const CarruselPrincipal = () => {


    const ref = useRef<ICarouselInstance>(null);
    const { height, width } = useWindowDimensions();



    return (
        <View style={{ height: height * 0.47 }}>
            <Carousel
                ref={ref}
                data={ datosPrincipales }
                width={width}
                height={height * 0.47} 
                autoPlay={true}
                autoPlayInterval={10000}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={{ flex: 1 }}>
                        <Image
                            source={{ uri: item.img }}
                            className="w-full h-full"
                            resizeMode="cover"
                        />
                    </View>
                )}
            />
        </View>

    )
}

export default CarruselPrincipal