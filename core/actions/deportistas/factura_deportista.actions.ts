






    
    // static listFacturasXDeportista = async(id:string):Promise<any> => {
    //     try {
    //         const { data } = await facturaDeportistaApi.get<any>(`/xdeportista/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }

import { facturaDeportistaApi } from "@/core/apis";



    // static facturasDeportistaPorID = async(id:string):Promise<any> => {
    //     try {
    //         const { data } = await facturaDeportistaApi.get(`/xid/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }



export const generarFacturasDeportista = async():Promise<any> => {
    try {
        const { data } = await facturaDeportistaApi.get<any>(`/generar/facturas`);
        // Swal.fire('Exitoso', data.msg, 'success');
        return true;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        // Swal.fire('Exitoso', errores, 'error');
        return false;
    }
}






export const listFacturasXClubes = async({ estado, termino, page }:any):Promise<any> => {
    try {
        const params = new URLSearchParams();
        params.append('estado',  estado);
        params.append('termino',  termino);
        params.append('page',  page);
        const { data } = await facturaDeportistaApi.get<any>(`/xclub`, { params });
        // useFacturaDeportistaStore.getState().startTotalFacturas(data.total);

        return data.data
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



    




    // static filtroFacturaXMeses = async({ inicio, final, pago, page }:any):Promise<any> => {
    //     try {
    //         const params = new URLSearchParams();
    //         params.append('inicio',  inicio);
    //         params.append('final',  final);
    //         params.append('pago',  pago);
    //         params.append('page',  page.toString());


    //         const [data, totales] = await Promise.all([
    //             facturaDeportistaApi.get<any>(`/filtros`, { params }),
    //             facturaDeportistaApi.get<any>(`/filtros/total`, { params }),
    //         ]);


    //         useFacturaDeportistaStore.getState().startTotalFacturas(data.data.total);
    //         useFacturaDeportistaStore.getState().startListarTablaTotales(totales.data.data);

    //         return data.data.data

    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }
