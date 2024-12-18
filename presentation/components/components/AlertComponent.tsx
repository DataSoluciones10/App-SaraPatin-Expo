
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import {  Alert, AlertButton, Platform } from 'react-native';



interface Props {
    titulo: string, 
    msg: string, 
    buttons?: AlertButton[],
}



export const AlertComponent = (titulo:string, msg:string, buttons:AlertButton[]) => {


    const { background, primary, text } = useThemeColors();


    Alert.alert(
        titulo, 
        msg, 
        buttons || [{ text: 'Aceptar', style: 'default' }],
        {
            cancelable: true,
            ...(Platform.OS === 'ios' ? {
                style: { 
                    titleStyle: { 
                        color: primary,
                        fontWeight: 'bold'
                    },
                    messageStyle: { 
                        color: text 
                    },
                    containerStyle: {
                        backgroundColor: background,
                        borderRadius: 10
                    }
                }
            } : {})
        } as any
    )
}
