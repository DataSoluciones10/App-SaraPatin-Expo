
import { FlatList } from 'react-native';
import { router } from 'expo-router';

import { FAB, MensajeListaVacia, TarjetaInscripcionClub } from '@/presentation/components';
import { DisenioPagina } from '@/presentation/layouts';
import { useMisProfesores } from '@/presentation/hooks';





const MisProfesores = () => {
    

    const { profesoresQuery } = useMisProfesores();
    


    return (
        <DisenioPagina title='Mis Profesores'>

            <FlatList
                data={profesoresQuery.data?.pages.flatMap((page:any) => page) || []}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TarjetaInscripcionClub
                        carpeta="usuarios"
                        img={item.img}
                        titulo={ item.nombre }
                        subtitulo1={ item.correo } 
                        subtitulo2={ item.movil }
                        iconos={ false }
                        onPress={  () => router.push({ pathname: '/profesores/opciones/[id]', params:{id: item.id} }) }
                        isClub={ false }
                    />
                )}
                contentContainerStyle={{flexGrow:1, padding:10}}
                showsVerticalScrollIndicator={ false }
                ListEmptyComponent={ <MensajeListaVacia titulo="No tienes profesores creados" />}
            />

            <FAB iconName='add-outline' onPress={ () => router.push({ pathname:'/profesores/[id]', params:{id:'new'} })} />
        </DisenioPagina>
    )

    
}

export default MisProfesores