
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { listadoMisProfesores, profesorPorID, updateCreateProfesores } from '@/core/actions';
import { useAlertInfo } from '../../hooks/useAlertInfo';






export const useMisProfesores = () => {

    const profesoresQuery = useInfiniteQuery({
        queryKey: ['mis-profesores', 'infinite'],
        queryFn: ({pageParam = 0}) => listadoMisProfesores(),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    })

    return {
        profesoresQuery,
    }
}






export const useProfesorId = (uid:string) => {

    const queryClient = useQueryClient();
    const { show, AlertInfo } = useAlertInfo();
    
    
    const profesorQueryId = useQuery({
        queryKey: ['profesorId', uid],
        queryFn: () => profesorPorID(uid),
        staleTime: 1000 * 60 * 60,
    });


    const profesorMutation = useMutation({
        mutationFn: async( data:any ) => updateCreateProfesores(data),

        onSuccess: ( data:any ) => {
            queryClient.invalidateQueries({ queryKey: ['mis-profesores', 'infinite'] });
            queryClient.invalidateQueries({ queryKey: ['profesorId', data.id] });

            show({ title: 'Exitoso', message: 'El profesor se guardo con exito.', buttonText: 'Cerrar', type: 'success' });
        },
        onError: (error:any) => {
            const mensajeError = error?.response?.data?.msg || error?.message || 'Error desconocido';
            show({ title: 'Error', message: mensajeError, buttonText: 'Cerrar', type: 'error' });
        },
    });


    return {
        AlertInfo,

        profesorQueryId,
        profesorMutation,
    }
    
}

