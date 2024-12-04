
import { useRef, useState } from 'react';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { View, TextInputProps, Text } from 'react-native';
import { Ionicons } from  '@expo/vector-icons';

import { useField } from "formik";
import useThemeColors from '@/presentation/hooks/global/useThemeColors';




interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
    name: string;
}




export const TextInputPassword = ({ icon, name, ...rest }: Props) => {


    const inputRef = useRef<TextInput>(null);
    const { primary, opaco, text, error } = useThemeColors();

    const [isActive, setIsActive] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [field, meta] = useField<any>(name);
    const hasError = meta.error;



    return (

        <View className='mb-4'>
            <View onTouchStart={() => inputRef.current?.focus()} 
                style={{borderColor: hasError ? error : isActive ? primary : opaco}}
                className={`flex-row items-center border rounded-md px-2 py-1`}
                // onStartShouldSetResponder={() => true}
                // onMoveShouldSetResponderCapture={() => false}
            >
                {icon &&
                <Ionicons 
                    name={icon}
                    size={22}
                    color={hasError ? error : isActive ? primary : opaco}
                    className="mr-2"
                />}

                <TextInput
                    ref={inputRef}
                    {...rest}
                    secureTextEntry={!isPasswordVisible}
                    placeholderTextColor="gray"
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    style={{color: text}}
                    className="flex-1 mr-2"
                    value={field.value}
                />

                <Pressable className="active:opacity-70" onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Ionicons
                        name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                        size={21}
                        color={hasError ? error : isActive ? primary : opaco}
                    />
                </Pressable>
            </View>

            {hasError && (<Text style={{color:error}}>{ meta.error }</Text>)}
        </View>
    )
}

