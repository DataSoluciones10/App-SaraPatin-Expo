
import { Alert } from 'react-native';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deportistaPorID, listadoMisDeportistas, updateCreateDeportistas } from '@/core/actions';
import { useAlertInfo } from '../../hooks/useAlertInfo';





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

    const queryClient = useQueryClient();
    const { show, AlertInfo } = useAlertInfo();
    
    
    const deportistaQueryId = useQuery({
        queryKey: ['deportistaId', uid],
        queryFn: () => deportistaPorID(uid),
        staleTime: 1000 * 60 * 60,
    });



    const deportistaMutation = useMutation({
        mutationFn: async( data:any ) => updateCreateDeportistas(data),

        onSuccess: ( data:any ) => {
            queryClient.invalidateQueries({ queryKey: ['mis-deportistas', 'infinite'] });
            queryClient.invalidateQueries({ queryKey: ['deportistaId', data.id] });

            show({ title: 'Exitoso', message: 'El deportista se guardo con exito.', buttonText: 'Cerrar', type: 'success' });
        },
        onError: (error:any) => {
            const mensajeError = error?.response?.data?.msg || error?.message || 'Error desconocido';
            show({ title: 'Error', message: mensajeError, buttonText: 'Cerrar', type: 'error' });
        },
    });




    return {
        AlertInfo,
        deportistaQueryId,
        deportistaMutation,
    }
}



