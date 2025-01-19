
import { View, FlatList, Text } from 'react-native';
import { MensajeListaVacia, TarjetasDeFondoPuntos } from '@/presentation/components'






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


    return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color: 'red'}}>Pendiente por trabajar Grupos</Text>
        </View>
    )
}
