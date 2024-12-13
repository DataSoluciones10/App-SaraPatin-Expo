
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { useAuthStore } from '@/presentation/stores';
import { CarruselHorizontal, CarruselPrincipal, ThemedButton, ThemedText } from '@/presentation/components';
import { deportesData } from '@/presentation/data';






const DashboardScreen = () => {


    const { background } = useThemeColors();
    const { startLogout } = useAuthStore();




    const handleLogout = () => {
        startLogout()
    }


    
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


                <ThemedButton icon="log-in-outline" onPress={ () => handleLogout() }>
                    Salir
                </ThemedButton>


                <View style={{ height:20 }} />

            </ScrollView>
        </SafeAreaView>
    )
}




export default DashboardScreen