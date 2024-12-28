
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { eliminarInscripcionXProfesor, listadoXTemporadaXEntidad } from '@/core/actions';
import { useAlertInfo } from '../../hooks/useAlertInfo';





export const useInscripcionesMisDeportistas = (id:string) => {

    const inscripcionMisDeportistas = useInfiniteQuery({
        queryKey: ['inscripciones-mis-deportistas', 'infinite', id],
        queryFn: ({pageParam = 0}) => listadoXTemporadaXEntidad({page: pageParam, id}),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    });



    return {
        inscripcionMisDeportistas,
        loadNextPage: inscripcionMisDeportistas.fetchNextPage,
    }
}







export const useInscripcionDeportistas = (id:string) => {

    const queryClient = useQueryClient();
    const { show, AlertInfo } = useAlertInfo();


    const eliminarInscripcion = useMutation({
        mutationFn: async (uid: string) => eliminarInscripcionXProfesor(uid),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['inscripciones-mis-deportistas', 'infinite', id] });
            queryClient.invalidateQueries({ queryKey: ['mis-inscripciones', 'infinite'] });

            show({ title: 'Exitoso', message: 'Inscripción eliminada', buttonText: 'Cerrar', type: 'success' });
        },
        onError: (error:any) => {
            const mensajeError = error?.response?.data?.msg || error?.message || 'Error desconocido';
            show({ title: 'Error', message: mensajeError, buttonText: 'Cerrar', type: 'error' });
        },
    });



    return {
        AlertInfo,

        eliminarInscripcion,
    }
}






