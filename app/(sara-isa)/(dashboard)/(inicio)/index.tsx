
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { deportesData } from '@/presentation/data';
import { CarruselHorizontal, CarruselPrincipal, ThemedText } from '@/presentation/components';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';






const DashboardScreen = () => {


    const { background } = useThemeColors();


    
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:background }}>
            <ScrollView  style={{ backgroundColor:background }}>
                
                {/* Carusel Principal */}
                <CarruselPrincipal />

                {/* Carrusel de Imagenes */}
                <View className='mt-10 mb-5'>
                    <CarruselHorizontal datos={deportesData} titulo='Expertos en:' />
                </View>

                <View className='mt-7 mb-5'>
                    <CarruselHorizontal datos={deportesData} titulo='Ofrecemos:' />
                </View>

                <View style={{ height:20 }} />
            </ScrollView>
        </SafeAreaView>
    )
}




export default DashboardScreen