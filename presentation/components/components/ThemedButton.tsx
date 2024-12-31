
import { Text, Pressable, PressableProps, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';



interface Props extends PressableProps {
    children: string;
    radius?: number;
    icon?: keyof typeof Ionicons.glyphMap;
    disabled?: boolean;
    color?: any;
}




export const ThemedButton = ({ children, icon, radius=5, disabled=false, color=null, ...rest }: Props) => {

    const { primary, disabledColor } = useThemeColors();
    const buttonColor = color || primary;


    return (

        <Pressable style={{backgroundColor: (disabled) ? disabledColor : buttonColor, borderRadius:radius }} { ...rest }
            className="px-4 py-3 flex-row items-center justify-center bg-primary active:opacity-70 gap-3"
            disabled={disabled}
        >
            {disabled ? (
                <ActivityIndicator size="small" color="white" />
            ) : (
                icon && <Ionicons name={icon} size={22} color="white" />
            )}
            <Text style={{fontSize:15, color:'white', fontWeight:'600'}}>{ children }</Text>
        </Pressable>
    );
};

