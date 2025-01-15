
import { useState } from "react";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { generarFacturasDeportista, listFacturasXClubes } from "@/core/actions";



interface Props {
    estado?: any;
}



export const useFacturasDeportista = ({ estado=null }:Props) => {


    const queryClient = useQueryClient();
    const [page, setPage] = useState(0);
    const [termino, setTermino] = useState('');


    const pagosDeportistaQuery = useInfiniteQuery({
        queryKey: ['pago-deportistas', 'infinite'],
        queryFn: ({pageParam = 0}) => listFacturasXClubes({ estado, termino, page: pageParam }),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    })


    const chagePage = (num: any) => {
        setPage(num - 1);
    }


    const chageTermino = (valor: string) => {
        setPage(0);
        setTermino(valor)
    }


    return {
        // Estados
        termino,
        page,

        // Metodos
        chagePage,
        chageTermino,
        pagosDeportistaQuery,
        loadNextPage: pagosDeportistaQuery.fetchNextPage,
    }


    // const pagosDeportistaQuery = useQuery({
    //     queryKey: ['pagos-deportista', { estado, termino, page }], 
    //     queryFn: () => listFacturasXClubes({ estado, termino, page }),
    // });



    // const mutationFactura = useMutation({
    //     mutationFn: (data) => AbonoFacturaService.createAbonoFactura(data),
    //     onSuccess: (factura) => {
    //         queryClient.setQueryData(
    //             ['pagos-deportista', { estado, termino, page }],
    //             (old:any) => {
    //                 Swal.fire('Exitoso', 'Pago Realizado', 'success');
    //                 if(!old) return [factura];

    //                 return old.map((cacheFactura:any) => {
    //                     if (cacheFactura.id === factura.id) {
    //                         cacheFactura = { ...factura };
    //                     }
    //                     return cacheFactura;
    //                 });
    //                 // .filter((cacheFactura:any) => cacheFactura.estado_cobrar === estado)
    //             }
    //         )
    //     },
    //     onError: (error) => {
    //         Swal.fire('Error', error.message, 'error');
    //     }
    // });


}
