
import { FlatList } from 'react-native';
import { router } from 'expo-router';
import { DisenioPagina } from '@/presentation/layouts';
import { useMisEntidades } from '@/presentation/hooks';
import { FAB, MensajeListaVacia, TarjetaInscripcionClub } from '@/presentation/components';





const MisEntidades = () => {


    const { entidadesQuery } = useMisEntidades();



    const handleOnPress = (item:any) => {
        console.log(item);
    }



    return (

        <DisenioPagina title='Mis Entidades'>
        
            <FlatList
                data={entidadesQuery.data?.pages.flatMap((page:any) => page) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TarjetaInscripcionClub
                        carpeta="entidades" img={item.img}
                        titulo={ item.nombre }
                        subtitulo1={ item.correo } 
                        subtitulo2={`Tipo: ${item.entidad}`}
                        iconos={ false }
                        onPress={ () =>  handleOnPress(item) }
                        isClub={ false }
                    />
                )}
                contentContainerStyle={{flexGrow:1, padding:10}}
                showsVerticalScrollIndicator={ false }
                ListEmptyComponent={ <MensajeListaVacia titulo="No tienes entidades creadas" />}
            />

            <FAB iconName='add-outline' onPress={ () => router.push({ pathname:'/clubes/[id]', params:{id:'new'} })} />
        </DisenioPagina>
    )


}

export default MisEntidades