
import { useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, TextInputProps, Text } from 'react-native';
import { Ionicons } from  '@expo/vector-icons';

import { useField } from "formik";
import useThemeColors from '@/presentation/hooks/global/useThemeColors';




interface Props extends TextInputProps {
    icon?: keyof typeof Ionicons.glyphMap;
    name: string;
    style?: any;
}




export const TextInputThemed = ({ icon, name, style, ...rest }: Props) => {


    const inputRef = useRef<TextInput>(null);
    const { primary, opaco, text, error } = useThemeColors();

    const [isActive, setIsActive] = useState(false);
    const [field, meta] = useField<any>(name);
    const hasError = meta.error;


    return (
        
        <View style={[{marginBottom:16}, style]}>

            <View onTouchStart={() => inputRef.current?.focus()} style={{borderColor: hasError ? error : isActive ? primary : opaco}}
                className={`flex-row items-center border rounded-md px-2 py-1`}
            >

                {icon && 
                <Ionicons 
                    name={icon} size={21} className="mr-2"
                    color={hasError ? error : isActive ? primary : opaco}
                />}

                <TextInput
                    ref={inputRef}
                    {...rest}
                    placeholderTextColor="gray"
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    style={{color: hasError ? error : text}}
                    className="flex-1 mr-2"
                    value={field.value}
                />
            </View>

            {hasError && (<Text style={{color:error}}>{ meta.error }</Text>)}
        </View>
    )

}
