
import { useCallback, useState } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View, Button, StyleSheet, Platform, TextInput } from 'react-native';
import { DisenioPagina } from '@/presentation/layouts';
import dayjs from 'dayjs';
import DateTimePicker from '@react-native-community/datetimepicker';



const FiltroPagos = () => {


    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
  
    const showPicker = () => {
      setShow(true);
    };
  
    const onChange = (event:any, selectedDate:any) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };


    return (
        <DisenioPagina title='Filtro de Pagos'>
            <Text>FiltroPagos</Text>



            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={showPicker}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                    {date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                    </Text>
                </TouchableOpacity>

                {show && (
                    <DateTimePicker
                    value={date}
                    mode="date"
                    display={'spinner'}
                    onChange={onChange}
                    />
                )}
                </View>

                {/* <SafeAreaView>
                    <Text>Month Year Picker Example</Text>
                    <Text>{dayjs(date, "MM-YYYY").format("MM-YYYY")}</Text>
                    <TouchableOpacity onPress={() => showPicker(true)}>
                        <Text>OPEN</Text>
                    </TouchableOpacity>
                    {show && (
                        <MonthPicker
                            onChange={onValueChange}
                            value={date}
                            // minimumDate={new Date()}
                            // maximumDate={new Date(2025, 5)}
                            locale="es"
                            mode="full"
                        />
                    )}
                </SafeAreaView>

                <View style={{ padding: 20 }}>
                    <Text>
                        Fecha seleccionada: {date.toLocaleDateString('es-ES', { 
                        month: 'long', 
                        year: 'numeric' 
                        })}
                    </Text>
                    
                    <Button title="Seleccionar fecha" onPress={showPicker} />

                    {show && (
                        <MonthPicker
                        onChange={onValueChange}
                        value={date}
                        // minimumDate={new Date(2000, 0)}
                        // maximumDate={new Date(2025, 11)}
                        locale="es"
                        // mode="full" // puedes usar 'default', 'calendar', 'spinner'
                        okButton="Aceptar"
                        cancelButton="Cancelar"
                        />
                    )}
                    </View> */}




        </DisenioPagina>
    )

}


const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    button: {
      padding: 15,
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    buttonText: {
      fontSize: 16,
      textAlign: 'center',
    }
  });

export default FiltroPagos