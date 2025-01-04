
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { listadoMisProfesores, profesorPorID } from '@/core/actions';






export const useMisProfesores = () => {

    const profesoresQuery = useInfiniteQuery({
        queryKey: ['mis-entidades', 'infinite'],
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

    // const queryClient = useQueryClient();
    // const { show, AlertInfo } = useAlertInfo();
    
    
    const profesorQueryId = useQuery({
        queryKey: ['profesorId', uid],
        queryFn: () => profesorPorID(uid),
        staleTime: 1000 * 60 * 60,
    });


    // const deportistaMutation = useMutation({
    //     mutationFn: async( data:any ) => updateCreateDeportistas(data),

    //     onSuccess: ( data:any ) => {
    //         queryClient.invalidateQueries({ queryKey: ['mis-deportistas', 'infinite'] });
    //         queryClient.invalidateQueries({ queryKey: ['deportistaId', data.id] });

    //         show({ title: 'Exitoso', message: 'El deportista se guardo con exito.', buttonText: 'Cerrar', type: 'success' });
    //     },
    //     onError: (error:any) => {
    //         const mensajeError = error?.response?.data?.msg || error?.message || 'Error desconocido';
    //         show({ title: 'Error', message: mensajeError, buttonText: 'Cerrar', type: 'error' });
    //     },
    // });


    return {
        profesorQueryId,
    }
    
}

