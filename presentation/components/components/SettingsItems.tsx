

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { Ionicons } from '@expo/vector-icons';
import { Switch, View } from 'react-native'
import { ThemedText } from '../textos/ThemedText';
import { TouchableOpacity } from 'react-native';






export const SettingsItems = ({icon, label, showSwitch=false, switchValue=false, onSwitchChange, mb=0}:any) => {

    

    const { primary, opaco, background } = useThemeColors();



    return (

        <TouchableOpacity style={{backgroundColor:background, borderColor:opaco, marginBottom:mb}} 
            className="flex-row items-center p-3 rounded-xl border"
        >
            <View style={{backgroundColor:opaco}} className="w-10 h-10 rounded-full items-center justify-center">
                <Ionicons name={icon} size={20} color="white" />
            </View>
            <ThemedText type='normal' numberOfLines={1} style={{fontSize:14, marginLeft:10, flex:1}}>{label}</ThemedText>

            {showSwitch ? (
                <Switch
                    value={switchValue} 
                    onValueChange={onSwitchChange} 
                    trackColor={{false:opaco, true:primary}}
                    thumbColor={switchValue ? primary : '#9CA3AF'}
                />
            ) : (
                <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            )}
        </TouchableOpacity>
        
    )
}
