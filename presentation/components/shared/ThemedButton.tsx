
import { Text, Pressable, PressableProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/presentation/themes/hooks/useThemeColor';




interface Props extends PressableProps {
    children: string;
    icon?: keyof typeof Ionicons.glyphMap;
}


const ThemedButton = ({ children, icon, ...rest }: Props) => {

    const primaryColor = useThemeColor({}, 'primary');


    return (

        <Pressable {...rest} style={{backgroundColor: primaryColor}}
            className="px-4 py-3 rounded-md flex-row items-center justify-center bg-primary active:opacity-70"
        >
            {icon && (
            <Ionicons
                name={icon}
                size={24}
                color="white"
                style={{ marginHorizontal: 5 }}
            />
            )}
            <Text className="text-white font-semibold">{children}</Text>
        </Pressable>
    );
};



export default ThemedButton;
