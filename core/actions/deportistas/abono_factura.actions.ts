
import { abonoFacturaApi } from "@/core/apis";




export const listAbonosXFactura = async(id:string):Promise<any> => {
    try {
        const { data } = await abonoFacturaApi.get<any>(`/xfactura/${id}`);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



export const createAbonoFactura = async(body: any):Promise<any> => {
    try {
        const { data } = await abonoFacturaApi.post<any>('/', body);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}






// export const eliminarAbonoFactura = async(id:string):Promise<any> => {
//     try {
//         const { data } = await abonoFacturaApi.delete<any>(`/${id}`);
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }

