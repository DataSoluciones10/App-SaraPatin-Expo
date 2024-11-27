
import { useRef, useState } from 'react';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { View, TextInputProps } from 'react-native';
import { Ionicons } from  '@expo/vector-icons';
import { useThemeColor } from '../../themes/hooks/useThemeColor';




interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
}




const TextInputPassword = ({ icon, ...rest }: Props) => {


    const inputRef = useRef<TextInput>(null);
    const textColor = useThemeColor({}, 'text');
    const primaryColor = useThemeColor({}, 'primary');

    const [isActive, setIsActive] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);



    return (
        
        <View onTouchStart={() => inputRef.current?.focus()} 
            style={{borderColor: isActive ? primaryColor : 'gray',}}
            className={`flex-row items-center border rounded-md px-2 py-1 mb-4`}
            // onStartShouldSetResponder={() => true}
            // onMoveShouldSetResponderCapture={() => false}
        >
            {icon &&
            <Ionicons 
                name={icon}
                size={22}
                color={isActive ? primaryColor : textColor}
                className="mr-2"
            />
            }

            <TextInput
                ref={inputRef}
                {...rest}
                secureTextEntry={!isPasswordVisible}
                placeholderTextColor="gray"
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
                style={{ color: textColor }}
                className="flex-1 mr-2"
            />


            <Pressable className="active:opacity-70"
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            >
            <Ionicons
                name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                size={21}
                color={textColor}
            />
            </Pressable>

        </View>
    )


}

export default TextInputPassword;

