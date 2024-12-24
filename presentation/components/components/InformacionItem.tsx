

import { View } from 'react-native'
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../textos/ThemedText';






export const InformacionItem = ({icon, label, value, verificar, mb=0}:any) => {


    const { opaco, background, success } = useThemeColors();


    return (
        <View style={{backgroundColor:background, borderColor:opaco, marginBottom:mb}} className="flex-row items-center p-3 rounded-xl border">
            <View style={{backgroundColor:opaco}} className="w-10 h-10 rounded-full items-center justify-center">
                <Ionicons name={icon} size={20} color='white' />
            </View>
            <View className="ml-3 flex-1">
                <ThemedText type='semi-bold' numberOfLines={1} style={{fontSize:12, color:'gray'}}>{label}</ThemedText>
                <ThemedText type='normal' numberOfLines={1} style={{fontSize:14}}>{value}</ThemedText>
            </View>

            {verificar && (
            <View style={{backgroundColor:background, paddingHorizontal:12, paddingVertical:4, borderRadius:'100%'}}>
                <Ionicons name="checkmark-circle" size={25} color={success} />
            </View>
            )}
        </View>
    )
}
