
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { deportesData } from '@/presentation/data/datos';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { CarruselHorizontal, CarruselPrincipal, ThemedText } from '@/presentation/components';







const HomeScreen = () => {


    const { background } = useThemeColors();



    return (
        <SafeAreaView style={{ flex:1, backgroundColor:background }}>
            <ScrollView style={{ backgroundColor:background, paddingBottom:10 }}>
                
                {/* Carusel Principal */}
                <CarruselPrincipal />

                {/* Carrusel de Imagenes */}
                <View className='mt-10 mb-3'>
                    <CarruselHorizontal datos={deportesData} titulo='Expertos en:' />
                </View>


                <View className='mt-7 mb-3'>
                    <CarruselHorizontal datos={deportesData} titulo='Ofrecemos:' />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen