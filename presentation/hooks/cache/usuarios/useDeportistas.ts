
import { Alert } from 'react-native';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { deportistaPorID, listadoMisDeportistas, updateCreateDeportistas } from '@/core/actions';





export const useDeportistas = () => {
    const deportistasQuery = useInfiniteQuery({
        queryKey: ['mis-deportistas', 'infinite'],
        queryFn: ({pageParam = 0}) => listadoMisDeportistas({page: pageParam}),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    })

    return {
        deportistasQuery,
        loadNextPage: deportistasQuery.fetchNextPage,
    }
}






export const useDeportistaId = (uid:string) => {

    
    const deportistaQueryId = useQuery({
        queryKey: ['deportistaId', uid],
        queryFn: () => deportistaPorID(uid),
        staleTime: 1000 * 60 * 60,
    });



    const deportistaMutation = useMutation({
        mutationFn: async( data:any ) => updateCreateDeportistas(data),
        onSuccess( data:any ) {
            Alert.alert('Deportista Guardado', 'El deportista se guardo con exito.')
        }
    });




    return {
        deportistaQueryId,
        deportistaMutation,
    }
}



