
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';
import { useWindowDimensions, Image, ScrollView, View } from 'react-native';

import MainSlideShow from '@/presentation/components/components/MainSlideShow';
import ThemedText from '@/presentation/components/shared/ThemedText';
import { deportesData } from '@/presentation/data/datos';







const HomeScreen = () => {


    const { height } = useWindowDimensions();
    const bgcolor = useThemeColor({}, 'background');
    // const safeArea = useSafeAreaInsets();



    return (
            <ScrollView style={{backgroundColor:bgcolor, paddingBottom:10}}>
                <View style={{height: height * 0.5}}>
                    <Image
                        source={require('../../../assets/images/empresa/messi.jpg')}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>


                {/* Carrusel de Imagenes */}
                <View className='my-20'>
                    <ThemedText type='h3' bold className='pl-3'>Trabajamos En</ThemedText>
                    <MainSlideShow datos={deportesData ?? []} />
                </View>


            </ScrollView>
    )
}

export default HomeScreen