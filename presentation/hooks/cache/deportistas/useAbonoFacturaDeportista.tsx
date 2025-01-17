
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAbonoFactura, listAbonosXFactura } from "@/core/actions";
import { useAlertInfo } from "../../hooks/useAlertInfo";





export const useAbonosXFacturaDeprotista = (id:string) => {

    const abonosFacturaDeprotistaXF = useQuery({
        queryKey: ['abonos-x-factura', id],
        queryFn: () => listAbonosXFactura(id),
        staleTime: 1000 * 60 * 60,
    });


    return {
        abonosFacturaDeprotistaXF,
    }
}




export const useCrearAbonoFacDeportista = () => {

    const queryClient = useQueryClient();
    const { show, AlertInfo } = useAlertInfo();
    
    const mutationFactura = useMutation({
        mutationFn: (data) => createAbonoFactura(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pago-deportistas', 'infinite', "['DEUDA', 'SALDO']"] });
            show({ title: 'Exitoso', message: 'Abono creado', buttonText: 'Cerrar', type: 'success' });
        },
        onError: (error:any) => {
            const mensajeError = error?.response?.data?.msg || error?.message || 'Error desconocido';
            show({ title: 'Error', message: mensajeError, buttonText: 'Cerrar', type: 'error' });
        }
    });



    
    return {
        AlertInfo,
        mutationFactura,
    }
}