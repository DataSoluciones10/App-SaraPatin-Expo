
import { useState } from 'react';
import { View, Text } from 'react-native';
import { useField } from 'formik';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { Dropdown } from 'react-native-element-dropdown';



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
    const [_, meta] = useField<any>(name);
    const hasError = meta.error && meta.touched; 



    return (

        <View style={{ marginBottom: 16 }}>
            {titulo && (
            <Text style={{ fontSize: 13, fontWeight: 'bold', marginBottom: 1, color: hasError ? error : text }}>
                {titulo}
            </Text>
            )}

            {/* Dropdown */}
            <View style={{ borderWidth:1, borderColor: hasError ? error : isActive ? primary : opaco, borderRadius:6, 
                height:45, justifyContent:'center', backgroundColor:background,  }}
            >
                <Dropdown
                    data={options}
                    value={value}
                    labelField="name" 
                    valueField="id" 
                    placeholder={label}
                    style={{paddingHorizontal:15}}
                    placeholderStyle={{ color:'gray' }}
                    selectedTextStyle={{ color: hasError ? error : text }}
                    itemContainerStyle={{ backgroundColor: background }}
                    itemTextStyle={{ color:text }}
                    activeColor={primary}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                    onChange={(item:any) => setFieldValue(name, item.id)}
                    {...rest}
                />
            </View>
            {/* Mensaje de error */}
            {hasError && <Text style={{ color: error }}>{meta.error}</Text>}
        </View>
    );
};



