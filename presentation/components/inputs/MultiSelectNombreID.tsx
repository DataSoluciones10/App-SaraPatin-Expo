

import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';





export const MultiSelectNombreID = () => {

    const [selectedItems, setSelectedItems] = useState<any>([]);
    const items = [
      { id: '1', label: 'Manzana' },
      { id: '2', label: 'Banana' },
      { id: '3', label: 'Cereza' },
    ];



    const toggleItem = (item:any) => {
        if (selectedItems.includes(item.id)) {
            setSelectedItems(selectedItems.filter((id:any) => id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item.id]);
        }
    };
    



    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <TouchableOpacity
                    style={[
                    styles.item,
                    selectedItems.includes(item.id) && styles.selectedItem,
                    ]}
                    onPress={() => toggleItem(item)}
                >
                    <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
                )}
            />
            <Text style={styles.selectedText}>Seleccionados: {selectedItems.join(', ')}</Text>
        </View>
    );
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    item: {
      padding: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    selectedItem: {
      backgroundColor: '#6200EE',
    },
    itemText: {
      color: '#000',
    },
    selectedText: {
      marginTop: 20,
      fontWeight: 'bold',
    },
  });


