

import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { deportistaPorID, listadoMisDeportistas } from '@/core/actions'



export const useDeportistas = () => {
    const deportistasQuery = useInfiniteQuery({
        queryKey: ['mis-deportistas', 'infinite'],
        queryFn: ({pageParam = 0}) => listadoMisDeportistas({page: pageParam}),

        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) => allPages.length
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


    return {
        deportistaQueryId,
    }
}



