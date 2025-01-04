
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { clubPorDirector, clubPorID, updateCreateEntidad } from '@/core/actions';
import { useAlertInfo } from '../../hooks/useAlertInfo';






export const useMisEntidades = () => {

    const entidadesQuery = useInfiniteQuery({
        queryKey: ['mis-entidades', 'infinite'],
        queryFn: ({pageParam = 0}) => clubPorDirector(),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    })

    return {
        entidadesQuery,
    }
}






export const useEntidadId = (uid:string) => {

    const queryClient = useQueryClient();
    const { show, AlertInfo } = useAlertInfo();
    
    
    const clubQueryId = useQuery({
        queryKey: ['clubId', uid],
        queryFn: () => clubPorID(uid),
        staleTime: 1000 * 60 * 60,
    });


    const entidadMutation = useMutation({
        mutationFn: async( data:any ) => updateCreateEntidad(data),

        onSuccess: ( data:any ) => {
            queryClient.invalidateQueries({ queryKey: ['mis-entidades', 'infinite'] });
            queryClient.invalidateQueries({ queryKey: ['clubId', data.id] });

            show({ title: 'Exitoso', message: 'La entidad se guardo con exito.', buttonText: 'Cerrar', type: 'success' });
        },
        onError: (error:any) => {
            const mensajeError = error?.response?.data?.msg || error?.message || 'Error desconocido';
            show({ title: 'Error', message: mensajeError, buttonText: 'Cerrar', type: 'error' });
        },
    });


    return {
        AlertInfo,

        clubQueryId,
        entidadMutation,
    }
    
}


