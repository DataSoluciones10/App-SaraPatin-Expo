
import { useState } from "react";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { facturasDeportistaPorID, generarFacturasDeportista, listFacturasXClubes } from "@/core/actions";



interface Props {
    estado?: any;
}



export const useFacturasDeportista = ({ estado=null }:Props) => {

    // const queryClient = useQueryClient();
    const [termino, setTermino] = useState('');

    const pagosDeportistaQuery = useInfiniteQuery({
        queryKey: ['pago-deportistas', 'infinite', estado],
        queryFn: ({pageParam = 0}) => listFacturasXClubes({ estado, termino, page: pageParam }),
        staleTime: 1000 * 60 * 60, // 1 hora
        initialPageParam: 0,
        getNextPageParam: (_, allPages) => allPages.length
    });


    const chageTermino = (valor: string) => {
        setTermino(valor)
    }


    return {
        // Estados
        termino,
        // Metodos
        chageTermino,
        pagosDeportistaQuery,
        loadNextPage: pagosDeportistaQuery.fetchNextPage,
    }

}




export const useFacturaDeportistaXId = (id:string) => {

    const facturaDeportistaQueryId = useQuery({
        queryKey: ['pago-deportista-id', id],
        queryFn: () => facturasDeportistaPorID(id),
        staleTime: 1000 * 60 * 60,
    });



    return {
        facturaDeportistaQueryId,
    }
}