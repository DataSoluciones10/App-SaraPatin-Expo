
import { ScrollView, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';

import MainSlideShow from '@/presentation/components/components/MainSlideShow';
import ThemedText from '@/presentation/components/shared/ThemedText';
import { deportesData } from '@/presentation/data/datos';
import CarruselPrincipal from '@/presentation/components/components/CarruselPrincipal';







const HomeScreen = () => {


    const bgcolor = useThemeColor({}, 'background');
    const safeArea = useSafeAreaInsets();


    return (
        <SafeAreaView style={{ flex:1, backgroundColor:bgcolor }}>
            <ScrollView style={{ backgroundColor:bgcolor, paddingBottom:10 }}>
                
                {/* Carusel Principal */}
                <CarruselPrincipal />

                {/* Carrusel de Imagenes */}
                <View className='my-10'>
                    <ThemedText type='h2' bold className='pl-3'>Expertos en:</ThemedText>
                    <MainSlideShow datos={deportesData ?? []} />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen