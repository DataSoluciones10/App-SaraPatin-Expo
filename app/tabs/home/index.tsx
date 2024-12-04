
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { deportesData } from '@/presentation/data/datos';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { CarruselPrincipal, MainSlideShow, ThemedText } from '@/presentation/components';







const HomeScreen = () => {


    const { background } = useThemeColors();
    // const safeArea = useSafeAreaInsets();


    return (
        <SafeAreaView style={{ flex:1, backgroundColor:background }}>
            <ScrollView style={{ backgroundColor:background, paddingBottom:10 }}>
                
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