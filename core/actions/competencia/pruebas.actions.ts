
import { pruebasApi } from "@/core/apis";






    // static pruebaPorID = async(id:string):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.get<any>(`/xid/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }




export const listadoPruebasXFiltro = async(body:any):Promise<any[]> => {
    try {
        const { data } = await pruebasApi.post<any>(`/filtros`, body);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



export const generalCompetenciaXFiltros = async(body:any):Promise<any> => {
    try {
        const { data } = await pruebasApi.post<any>(`/general`, body);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}





    // static deportistasNoRealizaronPrueba = async(pruebas:any):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.post<any>('/no/prueba', pruebas);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }




    // static pruebaPorArbitro = async():Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.get(`/xarbitro`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }
    




    // static pruebasXCategoriaAndEntidad = async(datos:any):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.post(`/categoria/entidad`, datos);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }





    // static createPrueba = async(pruebas:any):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.post<any>('/', pruebas);
    //         return data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }



    // static updatePrueba = async(prueba:any):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.put<any>(`/${prueba.id}`, prueba);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }





    // static cerrarPruebaYPremiar = async(pruebas:any):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.post<any>('/cerrar/premiar', pruebas);
    //         return data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }








    

    // static eliminarPrueba = async(id:string):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.delete<any>(`/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }






    // static recorPista = async(id:string):Promise<any> => {
    //     try {
    //         const { data } = await pruebasApi.get<any>(`/recorpista/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }

