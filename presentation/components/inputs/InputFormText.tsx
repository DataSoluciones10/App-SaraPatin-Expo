
import { useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, TextInputProps, Text } from 'react-native';
import { useField } from "formik";
import { ThemedText } from '../textos/ThemedText';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';




interface Props extends TextInputProps {
    name: string;
    titulo?:string;
    style?: any;
    disabled?: boolean;
}




export const InputFormText = ({ titulo, name, style, disabled=false, ...rest }: Props) => {


    const inputRef = useRef<TextInput>(null);
    const { primary, opaco, text, error } = useThemeColors();

    const [isActive, setIsActive] = useState(false);
    const [_, meta] = useField<any>(name);
    const hasError = meta.error && meta.touched; 



    return (
        
        <View style={[{marginBottom:16}, style]}>
            {titulo && 
            <ThemedText style={{fontSize:13, fontWeight:'bold', marginBottom:1, color: hasError ? error : text}}>
                { titulo }
            </ThemedText> 
            }

            <View onTouchStart={() => inputRef.current?.focus()} style={{borderColor: hasError ? error : isActive ? primary : opaco}}
                className={`flex-row items-center border rounded-md px-2 py-1`}
            >
                <TextInput
                    ref={inputRef}
                    {...rest}
                    placeholderTextColor="gray"
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    style={{color: hasError ? error : text}}
                    className="flex-1 mr-2"
                    editable={!disabled}
                />
            </View>
            {hasError && (<Text style={{color:error}}>{ meta.error }</Text>)}
        </View>

    )

}