
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';




interface Props {
    titulo: string; 
    icon: any;
    onPress: any; 
    isLast?: boolean;
}





export const TarjetaIconoTexto = ({ onPress, icon, titulo, isLast=false }: Props) => {


    const { primary, background, disabledColor } = useThemeColors();



    return (

        <View style={{ backgroundColor:background, borderRadius:14, overflow:'hidden', flex: 0.5,
            borderWidth:1, borderColor:disabledColor, margin:10 }}
        >
            <TouchableOpacity onPress={ onPress } style={[styles.card, {backgroundColor: background}]} >
                <View className="items-center">
                    <Ionicons name={icon} size={45} color={primary} />
                    <ThemedText type="semi-bold" className="mt-2 text-center">
                        { titulo }
                    </ThemedText>
                </View>
            </TouchableOpacity>
        </View>

    )
}




const styles = StyleSheet.create({
    card: {
        height: 120,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    }
});