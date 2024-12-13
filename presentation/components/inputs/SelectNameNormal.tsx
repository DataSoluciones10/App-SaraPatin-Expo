
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useField } from 'formik';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';




interface Props {
    name: string;
    label: string;
    options: { name: string; valor: boolean }[];
}



export const SelectNameNormal = ({ name, options, label, ...rest }: Props) => {


    const { primary, opaco, text, error, background } = useThemeColors();
    const [isActive, setIsActive] = useState(false);
    const [field, meta, helpers] = useField<any>(name);

    const hasError = meta.error && meta.touched; 


    return (

        <View className="mb-2">
            {/* {label && 
            <ThemedText style={{fontSize:15, fontWeight:'bold', marginBottom:1, color: hasError ? error : text}}>
                { label }
            </ThemedText> 
            } */}

            <View className={`border rounded-md px-2`} 
                style={{ borderColor: hasError ? error : isActive ? primary : opaco, height:45, justifyContent:'center' }}>

                <Picker
                    mode="dropdown"
                    style={{ color:( field.value === '' || !field.value) ? '#B0B0B0' : hasError ? error : text }}
                    itemStyle={{ backgroundColor:background }}
                    selectedValue={field.value}
                    onValueChange={(value) => { helpers.setValue(value) }}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    {...rest}
                >
                    <Picker.Item label={label} enabled={false} value='' />
                    {options.map((option) => (
                        <Picker.Item key={option.name} label={option.name} value={option.valor} />
                    ))}
                </Picker>
            </View>

            {hasError && <Text style={{ color: error }}>{meta.error}</Text>}
        </View>

    );
};



