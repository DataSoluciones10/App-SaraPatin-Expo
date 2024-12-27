
import { TarjetaSencilla } from '@/presentation/components'
import { DisenioPagina } from '@/presentation/layouts'
import { View, Text, FlatList } from 'react-native'






const MisDeportistasInscriptos = () => {


    const data = [
    { key:'1', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'2', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'3', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'4', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'5', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'6', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'7', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'8', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'9', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    { key:'10', nombre: 'DAvid Messi', categoria:10, rama: 'DAMA', club: 'Club leonas de fuengo independiente de medellin', numero: '010'},
    ]


    return (

        <DisenioPagina title={`Deportistas Inscriptos`}>
            <FlatList
                data={data}
                keyExtractor={(item:any) => item.key}
                renderItem={({ item }) => (
                    <TarjetaSencilla 
                        // onPress={item.function}
                        key={ item.key }
                        dato={item}
                    />
                )}
                contentContainerStyle={{padding:12}}
            />

        </DisenioPagina>
        
    )
}

export default MisDeportistasInscriptos