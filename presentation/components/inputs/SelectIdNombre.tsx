
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useField } from 'formik';
import { ThemedText } from '../textos/ThemedText';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';




interface Props {
    name: string;
    label: string;
    options: any[];
    titulo?: string;
    value?: string;
    setFieldValue: any;
}



export const SelectIdNombre = ({ name, options, label, value, titulo, setFieldValue, ...rest }: Props) => {


    const { primary, opaco, text, error, background } = useThemeColors();
    const [isActive, setIsActive] = useState(false);
    const [field, meta] = useField<any>(name);
    const hasError = meta.error && meta.touched; 



    return (

        <View style={{marginBottom:16}}>

            {titulo && 
                <ThemedText style={{fontSize:13, fontWeight:'bold', marginBottom:1, color: hasError ? error : text}}>
                    { titulo }
                </ThemedText> 
            }

            <View className={`border rounded-md `} 
                style={{ borderColor: hasError ? error : isActive ? primary : opaco, height:45, justifyContent:'center' }}>

                <Picker
                    mode="dropdown"
                    style={{ color:( field.value === '' || !field.value) ? 'gray' : hasError ? error : text }}
                    itemStyle={{ backgroundColor:background }}
                    selectedValue={value}
                    onValueChange={(value) => { setFieldValue(name, value) }}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    {...rest}
                >
                    <Picker.Item label={label} value="" style={{color: 'gray'}}/>
                    {options.map((option) => (
                        <Picker.Item key={option.id} label={option.name} value={option.id} />
                    ))}
                </Picker>
            </View>

            {hasError && <Text style={{ color: error }}>{meta.error}</Text>}
        </View>
    );
};



