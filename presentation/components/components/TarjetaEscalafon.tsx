

import useThemeColors from '@/presentation/hooks/global/useThemeColors';
import { ThemedText } from '../textos/ThemedText';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



interface Props {
    dato: any; 
    // onPress: any;
}





export const TarjetaEscalafon = ({ dato }: Props) => {


    const { primary, error, opaco, background, disabledColor } = useThemeColors();

    console.log(dato);


    return (

        <View style={[styles.card]}>
            <Text>Holis</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    card: {
      marginVertical: 10,
      marginHorizontal: 15,
      borderRadius: 10,
      padding: 10,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    highlightCard: {
      borderWidth: 2,
      borderColor: '#4caf50',
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    position: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: '#555',
    },
    entity: {
      fontSize: 14,
      color: '#777',
    },
    cardDetails: {
      marginTop: 10,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    },
    pruebaContainer: {
      marginBottom: 10,
    },
    pruebaTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    pruebaItem: {
      marginHorizontal: 5,
      alignItems: 'center',
    },
    pruebaText: {
      fontSize: 14,
      fontWeight: '500',
    },
    puntos: {
      fontSize: 14,
      color: '#333',
    },
    noAsistio: {
      color: 'red',
    },
    totalPuntos: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 5,
    },
  });