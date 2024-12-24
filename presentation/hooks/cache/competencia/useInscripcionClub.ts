
import { Alert } from 'react-native';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { misIncripciones } from '@/core/actions';





export const useMisInscripciones = () => {
    const misInscripcionesQuery = useInfiniteQuery({
        queryKey: ['mis-inscripciones', 'infinite'],
        queryFn: ({pageParam = 0}) => misIncripciones(),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    })

    return {
        misInscripcionesQuery,
        // loadNextPage: deportistasQuery.fetchNextPage,
    }
}







