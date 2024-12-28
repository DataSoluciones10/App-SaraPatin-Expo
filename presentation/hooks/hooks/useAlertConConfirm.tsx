

import { useState } from 'react';

import { Modal, View, TouchableOpacity, StyleSheet, Platform, useWindowDimensions, Text } from 'react-native';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '@/presentation/components';





interface AlertProps {
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    type?: 'primary' | 'success' | 'warning' | 'error';
}





export const useAlertConConfirm = () => {


    const { width } = useWindowDimensions();
    const { primary, success, error, background, warning } = useThemeColors();
    const [isVisible, setIsVisible] = useState(false);
    const [config, setConfig] = useState<AlertProps>({});


    const getAlertColor = (type: AlertProps['type'] = 'primary') => {
        const alertColors = {
            primary: primary,
            success: success,
            warning:  warning,
            error: error
        };
        return alertColors[type];
    };



    const showDialog = ({
        title = 'Confirmación',
        message = '¿Estás seguro?',
        confirmText = 'Aceptar',
        cancelText = 'Cancelar',
        onConfirm = () => {},
        onCancel = () => {},
        type = 'primary'
    }: AlertProps) => {
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
        setConfig({ title, message, confirmText, cancelText, onConfirm, onCancel, type });
        setIsVisible(true);
        }
    };



    const handleConfirm = () => {
        config.onConfirm?.();
        setIsVisible(false);
    };



    const handleCancel = () => {
        config.onCancel?.();
        setIsVisible(false);
    };




    return {
        showDialog,

        AlertModal: () => (
            <Modal transparent visible={isVisible} animationType="fade" onRequestClose={handleCancel}>
                <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                <View style={[ styles.modalContent, {backgroundColor:background, width:width * 0.85, maxWidth:400}]}>
                    <View style={{ marginBottom:12 }}>
                        <ThemedText type='h2' bold style={{textAlign:'center'}}>
                            { config.title }
                        </ThemedText>
                    </View>

                    <ThemedText type='semi-bold' style={{textAlign:'center', fontSize:16, marginBottom:16}}>
                        { config.message }
                    </ThemedText>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity  onPress={handleCancel}
                            style={[ styles.button, { backgroundColor:error } ]}
                        >
                            <Text style={{fontSize:15, color:'white', fontWeight:'bold'}}>
                                { config.cancelText }
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={handleConfirm}
                            style={[ styles.button, { backgroundColor: getAlertColor(config.type) }]}
                        >
                            <Text style={{fontSize:15, color:'white', fontWeight:'bold'}}>
                                { config.confirmText }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </Modal>
        )
    };
};



const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        borderRadius: 16,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    message: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        lineHeight: 22,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 12,
    },
    
    button: {
        flex: 1,
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
