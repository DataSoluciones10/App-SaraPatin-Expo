
import { Text, Pressable, PressableProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';



interface Props extends PressableProps {
    children: string;
    radius?: number;
    icon?: keyof typeof Ionicons.glyphMap;
}




export const ThemedButton = ({ children, icon, radius=5, ...rest }: Props) => {

    const primaryColor = useThemeColor({}, 'primary');

    return (

        <Pressable style={{backgroundColor: primaryColor, borderRadius:radius }}  { ...rest }
            className="px-4 py-3 flex-row items-center justify-center bg-primary active:opacity-70 gap-3"
        >
            { icon && ( <Ionicons name={icon} size={24} color="white" /> )}
            <Text className="text-white font-semibold">{children}</Text>
        </Pressable>
    );
};

