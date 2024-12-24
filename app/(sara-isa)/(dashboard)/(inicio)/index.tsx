
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
                <View className='my-5'>
                    <ThemedText type='h2' bold className='pl-4 pb-1'>Expertos en:</ThemedText>
                    <CarruselHorizontal datos={deportesData} />
                </View>

                <View className='my-5'>
                    <ThemedText type='h2' bold className='pl-4 pb-1'>Ofrecemos:</ThemedText>
                    <CarruselHorizontal datos={deportesData} />
                </View>


                <View style={{ height:20 }} />
            </ScrollView>
        </SafeAreaView>
    )
}




export default DashboardScreen