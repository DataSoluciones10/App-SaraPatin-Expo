
import { useRef, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, TextInputProps, Text } from 'react-native';
import { useField } from "formik";
import { ThemedText } from '../textos/ThemedText';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';



interface Props extends TextInputProps {
    name: string;
    titulo?: string;
    style?: any;
}



export const InputFormDecimales = ({ titulo, name, style, ...rest }: Props) => {



    const inputRef = useRef<TextInput>(null);
    const { primary, opaco, text, error } = useThemeColors();
    const [isActive, setIsActive] = useState(false);
    const [field, meta, helpers] = useField<any>(name); 
    const hasError = meta.error && meta.touched;



    const formatDecimal = (value: string): string => {
        const numericValue = value.replace(/[^0-9.]/g, ''); 
        const [integer, decimal] = numericValue.split('.');
        const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return decimal !== undefined ? `${formattedInteger}.${decimal}` : formattedInteger;
    };




    const handleChangeText = (text: string) => {
        const formattedText = formatDecimal(text);
        helpers.setValue(formattedText);
    };



    return (
        <View style={[{ marginBottom: 16 }, style]}>
            {titulo &&
                <ThemedText style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 1, color: hasError ? error : text }}>
                    {titulo}
                </ThemedText>
            }
            <View onTouchStart={() => inputRef.current?.focus()} style={{ borderColor: hasError ? error : isActive ? primary : opaco }}
                className={`flex-row items-center border rounded-md px-2 py-1`}
            >
                <TextInput
                    ref={inputRef}
                    {...rest}
                    value={formatDecimal(field.value)}
                    placeholderTextColor="gray"
                    onChangeText={ handleChangeText }
                    onFocus={() => setIsActive(true)}
                    onBlur={() => { setIsActive(false); helpers.setTouched(true); }}
                    style={{ color: hasError ? error : text }}
                    className="flex-1 mr-2"
                    keyboardType="numeric"
                />
            </View>
            {hasError && (<Text style={{ color: error }}>{meta.error}</Text>)}
        </View>
    );
};