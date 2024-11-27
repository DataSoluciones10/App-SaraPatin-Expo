
import { useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, TextInputProps } from 'react-native';
import { Ionicons } from  '@expo/vector-icons';
import { useThemeColor } from '../../themes/hooks/useThemeColor';




interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
}




const TextInputThemed = ({ icon, ...rest }: Props) => {


    const inputRef = useRef<TextInput>(null);
    const textColor = useThemeColor({}, 'text');
    const primaryColor = useThemeColor({}, 'primary');

    const [isActive, setIsActive] = useState(false);



    return (
        
        <View onTouchStart={() => inputRef.current?.focus()} 
            style={{borderColor: isActive ? primaryColor : 'gray',}}
            className={`flex-row items-center border rounded-md px-2 py-1 mb-4`}
        >
            {icon &&
            <Ionicons 
                name={icon}
                size={21}
                color={isActive ? primaryColor : textColor}
                className="mr-2"
            />
            }

            <TextInput
                ref={inputRef}
                {...rest}
                placeholderTextColor="gray"
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                style={{ color: textColor }}
                className="flex-1 mr-2"
            />
        </View>
    )


}

export default TextInputThemed;

// const styles = StyleSheet.create({
//     border: {
//         borderWidth: 1,
//         borderRadius: 5,
//         padding: 5,
//         marginBottom: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//     }
// })