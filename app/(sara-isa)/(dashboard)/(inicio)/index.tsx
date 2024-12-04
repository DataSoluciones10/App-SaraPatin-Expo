
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { deportesData } from '@/presentation/data/datos';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { useAuthStore } from '@/presentation/stores';
import { CarruselPrincipal, MainSlideShow, ThemedButton, ThemedText } from '@/presentation/components';





const DashboardScreen = () => {


    const { background } = useThemeColors();
    const { startLogout } = useAuthStore();
    // const safeArea = useSafeAreaInsets();



    const handleLogout = () => {
        startLogout()
    }


    
    return (
        <SafeAreaView style={{ flex:1, backgroundColor:background }}>
            <ScrollView  style={{ backgroundColor:background }}>
                
                {/* Carusel Principal */}
                <CarruselPrincipal />

                {/* Carrusel de Imagenes */}
                <View className='my-10'>
                    <ThemedText type='h2' bold className='pl-3'>Expertos en:</ThemedText>
                    <MainSlideShow datos={deportesData ?? []} />
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