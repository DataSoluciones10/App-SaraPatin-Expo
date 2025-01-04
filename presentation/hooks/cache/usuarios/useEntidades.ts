
import { useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';
import { clubPorDirector, clubPorID } from '@/core/actions';






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

    // const queryClient = useQueryClient();
    // const { show, AlertInfo } = useAlertInfo();
    
    
    const clubQueryId = useQuery({
        queryKey: ['clubId', uid],
        queryFn: () => clubPorID(uid),
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
        clubQueryId,
    }
    
}






// export const useDeportistasInscripcion = () => {

//     const inscripcionesSemiQuery = useInfiniteQuery({
//         queryKey: ['inscripciones-me', 'semiprofesional'],
//         queryFn: ({pageParam = 0}) => listadoMisDeportistasInscripcion({page: pageParam, patin: 'SEMIPROFESIONAL'}),
//         staleTime: 1000 * 60 * 60, // 1 hora
//         initialPageParam: 0,
//         getNextPageParam: (_, allPages) => allPages.length
//     });


//     const inscripcionesNovatosQuery = useInfiniteQuery({
//         queryKey: ['inscripciones-me', 'novatos'],
//         queryFn: ({pageParam = 0}) => listadoMisDeportistasInscripcion({page: pageParam, patin: 'NOVATOS'}),
//         staleTime: 1000 * 60 * 60, // 1 hora
//         initialPageParam: 0,
//         getNextPageParam: (_, allPages) => allPages.length
//     });


//     const InscripcionesLigadosQuery = useInfiniteQuery({
//         queryKey: ['inscripciones-me', 'ligados'],
//         queryFn: ({pageParam = 0}) => listadoMisDeportistasInscripcion({page: pageParam, patin: 'LIGADOS'}),
//         staleTime: 1000 * 60 * 60, // 1 hora
//         initialPageParam: 0,
//         getNextPageParam: (_, allPages) => allPages.length
//     });


//     return {
//         inscripcionesSemiQuery,
//         inscripcionesNovatosQuery,
//         InscripcionesLigadosQuery,
//         // loadNextPage: InscripcionesNovatos.fetchNextPage,
//     }
// }

