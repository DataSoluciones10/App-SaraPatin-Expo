
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
                <View className='my-5 mt-10'>
                    <ThemedText type='h2' bold className='pl-4 pb-1'>Expertos en:</ThemedText>
                    <CarruselHorizontal datos={deportesData} />
                </View>


                <View className='my-5'>
                    <ThemedText type='h2' bold className='pl-4 pb-1'>Expertos en:</ThemedText>
                    <CarruselHorizontal datos={deportesData} />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen