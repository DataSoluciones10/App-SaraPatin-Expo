


import { TarjetaIconoTexto } from "@/presentation/components";
import { DisenioPagina } from "@/presentation/layouts"
import { router, useLocalSearchParams } from "expo-router";

import { FlatList, Text } from 'react-native';






const OpcionesProfesor = () => {


    const { id } = useLocalSearchParams();
    

    const navigateTo = () => {
        // router.push(url);
        router.push({ pathname: '/profesores/[id]', params:{id: `${id}`} })
    };
    
    

    const opciones = [
        { key: '1', icono:"create", titulo:'Editar Profesor', function: () => navigateTo() },
        { key: '2', icono:"settings", titulo:'Ajustes', function: null },
    ];




    return (
        <DisenioPagina title='Opciones Profesor'>
            
            <FlatList
                data={opciones}
                keyExtractor={(item) => item.key}
                numColumns={2}
                renderItem={({ item }) => (
                    <TarjetaIconoTexto
                        onPress={item.function}
                        icon={item.icono}
                        titulo={item.titulo}
                    />
                    
                )}
                columnWrapperStyle={{justifyContent:'space-between'}}
                contentContainerStyle={{padding:15}}
            />

        </DisenioPagina>
    )

}


export default OpcionesProfesor