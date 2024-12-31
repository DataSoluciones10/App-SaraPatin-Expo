
import { Alert } from 'react-native';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { incripcionesXClubXId, misIncripciones } from '@/core/actions';





export const useMisInscripciones = () => {
    const misInscripcionesQuery = useInfiniteQuery({
        queryKey: ['mis-inscripciones', 'infinite'],
        queryFn: ({pageParam = 0}) => misIncripciones(),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    });

    return {
        misInscripcionesQuery,
        // loadNextPage: deportistasQuery.fetchNextPage,
    }
}



export const useInscripcionEntidadXId = (id:string) => {

    // const queryClient = useQueryClient();

    const inscripcionClubQueryId = useQuery({
        queryKey: ['inscripcion-club-id', id],
        queryFn: () => incripcionesXClubXId(id),
        staleTime: 1000 * 60 * 60,
    });



    // const deportistaMutation = useMutation({
    //     mutationFn: async( data:any ) => updateCreateDeportistas(data),

    //     onSuccess( data:any ) {
    //         queryClient.invalidateQueries({ queryKey: ['mis-deportistas', 'infinite'] });
    //         queryClient.invalidateQueries({ queryKey: ['deportistaId', data.id] });

    //         Alert.alert('Deportista Guardado', 'El deportista se guardo con exito.')
    //     }
    // });




    return {
        inscripcionClubQueryId,
    }
}






