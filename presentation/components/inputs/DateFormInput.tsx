
import { useState } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useField } from 'formik';

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';
import { formatearFecha } from '@/presentation/helpers';








export const DateFormInput = ({ titulo, value, name, placeholder, style, setFieldValue, ...rest}:any) => {


    const { opaco, text, error, success } = useThemeColors();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [_, meta] = useField<any>(name);
    const hasError = meta.error && meta.touched; 


    const handleToggle = () => {
        setShowDatePicker(!showDatePicker);
    }


    const handleDateChange = (_: any, selectedDate?: Date) => {
        setShowDatePicker(false); 
        if (selectedDate) {
            setFieldValue(name, selectedDate.toISOString()); 
        }
    };



    return (
        <View style={[{marginBottom:16}, style]}>
            {titulo && 
            <ThemedText style={{fontSize:13, fontWeight:'bold', marginBottom:1, color: hasError ? error : text}}>
                { titulo }
            </ThemedText> 
            }

            {showDatePicker && (
                <DateTimePicker
                    mode="date"
                    value={value ? new Date(value) : new Date()}
                    display="spinner"
                    onChange={handleDateChange}
                    positiveButton={{label: 'OK', textColor:success}}
                    negativeButton={{label: 'Cancelar', textColor:error}}
            />)}


            <View className={`flex-row items-center border rounded-md px-2 py-1`}
                style={{borderColor: hasError ? error  : opaco}}
            >

                <Pressable onPress={() => handleToggle()} style={{flex:1}}>
                    <TextInput
                        {...rest}
                        editable={false} 
                        placeholder={placeholder}
                        placeholderTextColor="gray"
                        style={{color: hasError ? error : text, flex:1}}
                        className="flex-1 mr-2"
                        value={formatearFecha(value)}
                    />
                </Pressable>
            </View>

            {hasError && (<Text style={{color:error}}>{ meta.error }</Text>)}
        </View>

    )
}
