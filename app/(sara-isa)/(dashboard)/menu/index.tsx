
import { TarjetasSencillas } from '@/presentation/components';
import { DisenioPagina } from '@/presentation/layouts/DisenioPagina';
import { useNavigation, router  } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';







const Menu = () => {


    const navigateTo = (url:any) => {
        router.push(url);
    };



    const opciones = [
        { key: '1', icono:"compass", titulo:'Entidades', url: '/', function: () => alert('Mi Perfil') },
        { key: '2', icono:"people-circle", titulo:'Deportistas', url: '/deportistas', function: () => navigateTo('/deportistas') },
        { key: '3', icono:"people", titulo:'Profesores', url: '/settings', function: () => navigateTo('/profesores') },
        { key: '4', icono:"logo-bitcoin", titulo:'Pagos', url: '/profile', function: () => alert('Pagos') },
        { key: '5', icono:"documents", titulo:'Asistencias', url: '/', function: () => alert('Asistencias') },
    ];




    return (

        <DisenioPagina title='Menu' subtitle='opciones de perfil'>

            <FlatList
                data={opciones}
                keyExtractor={(item) => item.key}
                numColumns={2}
                renderItem={({ item }) => (
                    <TarjetasSencillas
                        onClickHandler={item.function}
                        url={item.url}
                        icon={item.icono}
                        titulo={item.titulo}
                    />
                    
                )}
                contentContainerStyle={{ padding: 25 }}
            />

        </DisenioPagina>
    )


}

export default Menu