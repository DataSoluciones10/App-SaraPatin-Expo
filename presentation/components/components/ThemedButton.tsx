
import { Text, Pressable, PressableProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';



interface Props extends PressableProps {
    children: string;
    radius?: number;
    icon?: keyof typeof Ionicons.glyphMap;
}




export const ThemedButton = ({ children, icon, radius=5, ...rest }: Props) => {

    const { primary } = useThemeColors();


    return (

        <Pressable style={{backgroundColor: primary, borderRadius:radius }}  { ...rest }
            className="px-4 py-3 flex-row items-center justify-center bg-primary active:opacity-70 gap-3"
        >
            { icon && ( <Ionicons name={icon} size={22} color="white" /> )}
            <Text style={{fontSize:15, color:'white', fontWeight:'600'}}>{ children }</Text>
        </Pressable>
    );
};

