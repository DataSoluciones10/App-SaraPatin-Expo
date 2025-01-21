
import { View, FlatList, Text, Animated, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { MensajeListaVacia, TarjetaPruebasGrupos, TarjetasDeFondoPuntos } from '@/presentation/components'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';






    const baseDatos = {
        faltas: ['1', '2', '3'],
        deportista: { nombre: 'David Cortes Messi' },
        club_inscrito: { entidad: { nombre: 'Leonas de Fuego' } },
        tiempo: '00:34:345',
        numero_competencia: { numero_competencia: '010' },
        posicion: '1',
    };
        




    
    const datos = Array.from({ length: 20 }, (_, index) => ({
        id: (index + 1).toString(),
        ...baseDatos,
    }));





export const VerPruebasXGrupos = () => {

        // <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        //     <Text style={{color: 'red'}}>Pendiente por trabajar Grupos</Text>
        // </View>

    return (

        <View style={{marginHorizontal:15}}>
            <TarjetaPruebasGrupos />
        </View>

    )
}



