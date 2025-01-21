import { clasificatoriaApi } from "@/core/apis";










    
    export const listadoPuntosXFiltro = async({id, rama, categoria, prueba }:any):Promise<any[]> => {
        try {
            const { data } = await clasificatoriaApi.get<any>(`/puntos/filtros/${id}?rama=${rama}&categoria=${categoria}&prueba=${prueba}`);
            return data.data;
        } catch (error: any) {
            const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
            throw new Error(errores);
        }
    }



//     static listadoClasificatoriaXOlimpica = async(id:string):Promise<any[]> => {
//         try {
//             const { data } = await clasificatoriaApi.get<any>(`/olimpica/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     //SERVICIOS DE CLASIFICATORIAS
//     static listadoClasificatoriaXRonda = async(id:string):Promise<any[]> => {
//         try {
//             const { data } = await clasificatoriaApi.get<any>(`/ronda/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static clasificatoriaPorArbitro = async():Promise<any> => {
//         try {
//             const { data } = await clasificatoriaApi.get(`/xarbitro`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static listadoClasificatoriaXFiltro = async(valor:any):Promise<any[]> => {
//         try {
//             const { data } = await clasificatoriaApi.post<any>(`/filtros/${valor.id}`, valor);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static generarClasificatoria = async(datos:any):Promise<any> => {
//         try {
//             const { data } = await clasificatoriaApi.post<any>('/', datos);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static actualizarClasificatoriaSerie = async(datos:any):Promise<any[]> => {
//         try {
//             const { data } = await clasificatoriaApi.post<any>(`/update/serie`, datos);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static cerrarClasificatorias = async(datos:any):Promise<boolean> => {
//         try {
//             const { data } = await clasificatoriaApi.post<any>(`/cerrar/clasificatoria`, datos);
//             Swal.fire('Exitoso', data.msg, 'success');
//             return true;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     // SERVICIOS DE CLASIFICATORIA POR PUNTOS
//     static createPruebaPuntos = async(pruebas:any):Promise<any> => {
//         try {
//             const { data } = await clasificatoriaApi.post<any>('/puntos', pruebas);
//             return data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static listadoPuntosTotal = async({id, rama, categoria }:any):Promise<any> => {
//         try {
//             const { data } = await clasificatoriaApi.get<any>(`/puntos/total/${id}?rama=${rama}&categoria=${categoria}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static listadoPuntosXDeportista = async(valor:any):Promise<any[]> => {
//         try {
//             const { data } = await clasificatoriaApi.post<any>(`/xdeportista`, valor);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static crearPuntosAdmin = async(valor:any):Promise<any[]> => {
//         try {
//             const { data } = await clasificatoriaApi.post<any>(`/puntos/admin`, valor);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static eliminarRegistroPuntos = async(id:string):Promise<any> => {
//         try {
//             const { data } = await clasificatoriaApi.delete<any>(`/puntos/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



// }