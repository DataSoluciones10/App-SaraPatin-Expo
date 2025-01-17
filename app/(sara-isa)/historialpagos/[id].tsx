
import { View, FlatList, StyleSheet } from 'react-native';

import { useAbonosXFacturaDeprotista } from '@/presentation/hooks';
import { DisenioPagosDeportista } from '@/presentation/layouts';
import { useLocalSearchParams } from 'expo-router';
import { MensajeListaVacia } from '@/presentation/components';
import { ThemedText } from '../../../presentation/components/textos/ThemedText';
import { separadorMillares } from '@/presentation/helpers';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';

import dayjs from 'dayjs';
import { Ionicons } from '@expo/vector-icons';







const HistorialPagosDeportista = () => {


    const { id } = useLocalSearchParams();
    const { abonosFacturaDeprotistaXF  } = useAbonosXFacturaDeprotista(`${id}`);
    const { opaco } = useThemeColors();



    return (

        <DisenioPagosDeportista title='Historial de Abonos'>
            <FlatList
                data={abonosFacturaDeprotistaXF?.data || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.container, {borderColor: opaco}]}>
                        <ThemedText style={styles.text}>
                            {dayjs(item.fecha_pago).format('DD[/]MMM[/]YYYY')}
                        </ThemedText>
                        <ThemedText style={styles.text}>{`$${separadorMillares(item.valor)}`}</ThemedText>
                        <ThemedText style={styles.text}>{item.medio_pago}</ThemedText>
                    </View>
                )}
                contentContainerStyle={{flexGrow:1, padding:10}}
                onEndReachedThreshold={ 0.8 }
                showsVerticalScrollIndicator={ false }
                ListEmptyComponent={ <MensajeListaVacia titulo="No tienes abonos a esta factura..." />}
            />
        </DisenioPagosDeportista>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    },
});


export default HistorialPagosDeportista;
