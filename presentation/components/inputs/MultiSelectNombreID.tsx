
import { useEffect, useState } from 'react';
import { useField } from 'formik';

import { View, Text, TouchableOpacity } from 'react-native'
import { MultiSelect } from 'react-native-element-dropdown';
import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { Ionicons } from '@expo/vector-icons';




interface Props {
  name: string;
  label: string;
  options: any[];
  titulo?: string;
  value?: any;
  setFieldValue: any;
}




export const MultiSelectNombreID = ({ name, options, label, value, titulo, setFieldValue, ...rest }: Props) => {



  const { primary, opaco, disabledColor, text, error, background } = useThemeColors();
  const [isActive, setIsActive] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(value || []);
  const [_, meta] = useField<any>(name);
  const hasError = meta.error && meta.touched; 


  useEffect(() => {
    setSelectedValues(value);
  }, [value]);



  const handleSelect = (valor: any) => {
      setSelectedValues(valor);
      setFieldValue(name, valor);
  };




    return (

        <View style={{ marginBottom: 16 }}>
            {titulo && (
            <Text style={{ fontSize:13, fontWeight:'bold', marginBottom:1, color:hasError ? error : text }}>
                {titulo}
            </Text>
            )}

            {/* Dropdown */}
            <View style={{ borderWidth:1, borderColor: hasError ? error : isActive ? primary : opaco, borderRadius:6, 
                minHeight:45, justifyContent:'center', backgroundColor:background, position:'relative' }}
            >

              <MultiSelect
                  placeholderStyle={{ color: disabledColor }}
                  selectedTextStyle={{ color: hasError ? error : text }}
                  itemContainerStyle={{ backgroundColor: background }}
                  itemTextStyle={{ color: text }}
                  style={{paddingHorizontal:15, position:'absolute', flex:1, width:'100%'}}
                  data={ options }
                  labelField="nombre"
                  valueField="id"
                  placeholder={selectedValues.length === 0 ? label : ''} 
                  value={ selectedValues }
                  onChange={ handleSelect }
                  activeColor={ primary }
                  onFocus={() => setIsActive(true)}
                  onBlur={() => setIsActive(false)}
                  renderSelectedItem={(item, unselect) => (
                    <TouchableOpacity
                      onPress={() => unselect?.(item)}
                      style={{ flexDirection:'row', alignItems:'center', backgroundColor:`${primary}90`,
                        borderRadius:4, paddingHorizontal:8, paddingVertical:4, marginVertical: 2, marginRight: 4,
                    }}>
                      <Text style={{ color:'white', fontSize:13, marginRight:4 }}>
                        {item.nombre}
                      </Text>
                      <Ionicons name="close-circle" size={16} color='white' />
                    </TouchableOpacity>
                  )}
              />
          </View>
            {/* Mensaje de error */}
            {hasError && <Text style={{ color: error }}>{meta.error}</Text>}
        </View>
    );
}





//!PENDIENTE SI NO FUNCIONA USAR ESTE Y PONER EN EL PLACEHOLDER LOS VALORES Y CAMBIAR EL 
//! COLOR DEL TEXTO DE OPACO A COLOR DEL TEXT.
{/* <Dropdown
  data={items}
  labelField="nombre"
  valueField="id"
  value={ { id: '1', nombre: 'Manzana' } }
  placeholder={label}
  style={{ paddingHorizontal: 15 }}
  placeholderStyle={{ color: opaco }}
  selectedTextStyle={{ color: hasError ? error : text }}
  itemContainerStyle={{ backgroundColor: background }}
  itemTextStyle={{ color: text }}
  activeColor={primary}
  onFocus={() => setIsActive(true)}
  onBlur={() => setIsActive(false)}
  // onChange={ (e:any) => handleSelect(e.id) }
  onChange={ handleSelect }
  renderItem={(item) => (
    <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10,
        backgroundColor: selectedValues.find((value:any) => value === item.id) ? primary : background,
    }}>
      <Text style={{ color: text }}>{item.nombre}</Text>
      {selectedValues.find((value:any) => value === item.id) && <Text style={{ color: text }}>✔</Text>}
    </View>
  )}
/> */}