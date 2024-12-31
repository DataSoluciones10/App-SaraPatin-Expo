
import { categoriaTemporadaApi } from "@/core/apis";








export const categoriaTemporadaXID = async(id:string):Promise<any> => {
    try {
        const { data } = await categoriaTemporadaApi.get<any>(`/xid/${id}`);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}


    

export const categoriaTemporadaXArbitro = async(datos:any):Promise<any> => {
    try {
        const { data } = await categoriaTemporadaApi.post<any>(`/xarbitro`, datos);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}




export const listadoCategoriaTemporada = async(id:string):Promise<any[]> => {
    try {
        const { data } = await categoriaTemporadaApi.get<any>(`/temporada/${id}`);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}




    // static activarTipoPatin = async(temporada:any):Promise<any> => {
    //     try {
    //         const { data } = await categoriaTemporadaApi.post<any>('/activepatin', temporada);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }



    
    // static cerrarFase = async(categoria:any):Promise<any> => {
    //     try {
    //         const { data } = await categoriaTemporadaApi.post<any>('/cerrar/fase', categoria);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }




    // static activarPruebaTemporada = async(prueba:any):Promise<any> => {
    //     try {
    //         const { data } = await categoriaTemporadaApi.post<any>('/activar/prueba', prueba);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }




    // static actualizarCategoriaTem = async(categoria:any):Promise<any> => {
    //     try {
    //         const { data } = await categoriaTemporadaApi.put<any>(`/${categoria.id}`, categoria);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }
