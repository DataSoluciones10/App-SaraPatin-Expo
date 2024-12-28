

import { useState } from 'react';

import { Modal, View, TouchableOpacity, StyleSheet, Platform, useWindowDimensions, Text } from 'react-native';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '@/presentation/components';





interface InfoAlertProps {
    title?: string;
    message: string;
    buttonText?: string;
    onClose?: () => void;
    type?: 'primary' | 'success' | 'warning' | 'error';
}





export const useAlertInfo = () => {



    const { width } = useWindowDimensions();
    const { primary, success, error, background, warning } = useThemeColors();
    const [isVisible, setIsVisible] = useState(false);
    const [config, setConfig] = useState<InfoAlertProps>({ message: '' });

    const getAlertColor = (type: InfoAlertProps['type'] = 'primary') => {
        const alertColors = {
            primary: primary,
            success: success,
            warning: warning,
            error: error
        };
        return alertColors[type];
    };

    const show = ({
        title = 'Información',
        message,
        buttonText = 'Entendido',
        onClose = () => {},
        type = 'primary'
    }: InfoAlertProps) => {
        if (Platform.OS === 'ios' || Platform.OS === 'android') {
            setConfig({ title, message, buttonText, onClose, type });
            setIsVisible(true);
        }
    };

    const handleClose = () => {
        config.onClose?.();
        setIsVisible(false);
    };

    return {
        show,
        AlertInfo: () => (
            <Modal transparent visible={isVisible} animationType="fade" onRequestClose={handleClose}>
                <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
                    <View style={[ styles.modalContent, { backgroundColor: background, width: width * 0.85, maxWidth: 400 }]}>
                        <View style={{ marginBottom: 12 }}>
                            <ThemedText type='h2' bold style={{ textAlign: 'center' }}>
                                { config.title }
                            </ThemedText>
                        </View>

                        <ThemedText type='semi-bold' style={{ textAlign: 'center', fontSize: 16, marginBottom: 16 }}>
                            { config.message }
                        </ThemedText>

                        <TouchableOpacity onPress={handleClose}
                            style={[ styles.button, { backgroundColor: getAlertColor(config.type) }]}
                        >
                            <Text style={{fontSize:15, color:'white', fontWeight:'bold'}}>
                                { config.buttonText }
                            </Text>
                        </TouchableOpacity>
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
    button: {
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});