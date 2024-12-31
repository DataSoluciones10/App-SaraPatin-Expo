
import { router  } from 'expo-router';
import { FlatList } from 'react-native';

import { TarjetaIconoTexto } from '@/presentation/components';
import { DisenioPagina } from '@/presentation/layouts/DisenioPagina';








const MenuScreen = () => {


    const navigateTo = (url:any) => {
        router.push(url);
    };


    const opciones = [
        { key: '1', icono:"business", titulo:'Mis Entidades', function: () => alert('Mi Perfil') },
        { key: '2', icono:"people-circle", titulo:'Mis Deportistas', function: () => navigateTo('/deportistas') },
        { key: '3', icono:"people", titulo:'Mis Profesores', function: () => navigateTo('/profesores') },
        { key: '4', icono:"wallet", titulo:'Pagos', function: () => alert('Pagos') },
        { key: '5', icono:"documents", titulo:'Asistencias', function: () => alert('Asistencias') },
        { key: '6', icono:"pricetags", titulo:'Stock', function: () => alert('Stock') },
    ];



    return (

        <DisenioPagina title='Menu' subtitle='opciones de perfil'>

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

export default MenuScreen