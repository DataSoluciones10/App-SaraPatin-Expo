
import CarruselPrincipal from '@/presentation/components/components/CarruselPrincipal'
import MainSlideShow from '@/presentation/components/components/MainSlideShow'
import ThemedText from '@/presentation/components/shared/ThemedText'
import { deportesData } from '@/presentation/data/datos'
import useThemeColors from '@/presentation/hooks/global/useThemeColors'
import { SafeAreaView, ScrollView, View } from 'react-native'





const DashboardScreen = () => {


    const { background } = useThemeColors();


    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
            <ScrollView style={{backgroundColor:background, paddingBottom:10}}>
                
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




export default DashboardScreen