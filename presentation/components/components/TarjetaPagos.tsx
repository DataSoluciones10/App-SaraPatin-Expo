
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { separadorMillares } from '@/presentation/helpers';
import { router } from 'expo-router';
import { useFacturaDeportistaStore, useModalStore } from '@/presentation/stores';

import dayjs from 'dayjs';





export const TarjetaPagos = ({ item }: any) => {
    

    const { modalFormToggle } = useModalStore();
    const { activarFacturaDeportista } = useFacturaDeportistaStore();
    const { text, primary, success, warning, error, opaco, background, disabledColor } = useThemeColors();
    


    const getStatusColor = (status:any) => {
        switch (status.toUpperCase()) {
            case 'PAGO': return success;
            case 'SALDO': return warning;
            case 'DEUDA': return error;
            default: return primary;
        }
    };


    const handleHistorial = () => {
        router.push({ pathname:'/historialpagos/[id]', params:{id: item.id}})
    }


    const handleAgregarAbono = () => {
        activarFacturaDeportista(item);
        modalFormToggle(true);
    }
    


    return (

        <View style={[styles.container, {backgroundColor: background, borderColor: opaco}]}>
            <View style={[styles.statusStrip, { backgroundColor: getStatusColor(item.estado_cobrar) }]} />
            
            <View style={styles.contentContainer}>
                <View style={{flex:1}}>
                    <ThemedText type='semi-bold' numberOfLines={1} style={styles.nombre}>
                        {item.deportista.nombre}
                    </ThemedText>
                </View>

                <View style={styles.header}>
                    <View style={[styles.dateChip, { backgroundColor: primary + '20' }]}>
                        <Ionicons name="calendar-outline" size={12} color={primary} />
                        <ThemedText type='semi-bold' style={[styles.dateText, { color: primary }]}>
                            {dayjs(item.mes_pago).format('MMMM-YYYY').toUpperCase()}
                        </ThemedText>
                    </View>
                    <View style={[styles.statusBadge, {backgroundColor: getStatusColor(item.estado_cobrar) + '20'}]}>
                        <Ionicons size={16} color={getStatusColor(item.estado_cobrar)} 
                            name={item.estado_cobrar === 'PAGO' ? "checkmark-circle-outline" : "alert-circle-outline"} 
                        />
                        <ThemedText type='semi-bold' style={[styles.dateText, { color: getStatusColor(item.estado_cobrar) }]}>
                            {item.estado_cobrar}
                        </ThemedText>
                    </View>
                </View>

                <View style={styles.footter}>
                    <View style={{flex: 1}}>
                        <ThemedText style={[styles.infoLabel, {color:disabledColor}]}>Saldo Pendiente</ThemedText>
                        <View style={styles.amountContainer}>
                            <Ionicons name="wallet-outline" size={15} color={text} />
                            <ThemedText type='semi-bold' style={{fontSize:14}}>
                                ${separadorMillares(item.saldo)}
                            </ThemedText>
                        </View>
                    </View>

                    {/* Botones de acción */}
                    <View style={styles.actions}>
                        {(item.estado_cobrar === 'PAGO') &&
                            <TouchableOpacity style={[styles.actionButton, { backgroundColor: primary + '10' }]}>
                                <Ionicons name="download-outline" size={20} color={primary} />
                            </TouchableOpacity>
                        }
                        {(item.estado_cobrar !== 'PAGO') &&
                            <TouchableOpacity style={[styles.actionButton, {backgroundColor: primary + '10'}]}
                                onPress={ handleAgregarAbono }
                            >
                                <Ionicons name="add" size={20} color={primary} />
                            </TouchableOpacity>
                        }
                        <TouchableOpacity style={[styles.actionButton, { backgroundColor: primary + '10' }]} 
                            onPress={ handleHistorial }
                        >
                            <Ionicons name="time-outline" size={20} color={primary} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>


    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 14,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
    },

    statusStrip: {
        height: 3,
        width: '100%',
    },

    contentContainer: {
        padding: 10,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    
    nombre: {
        fontSize: 17,
        marginBottom: 5,
    },

    dateChip: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
        gap: 4,
    },

    dateText: {
        fontSize: 11,
    },

    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        gap: 4,
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 8,
    },
    actionButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    footter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    infoLabel: {
        fontSize: 12,
        marginBottom: 2,
    },

    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
});