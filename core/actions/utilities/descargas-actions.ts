

import { descargasApi } from '../../apis';









// export const descargarReportePruebas = async(pruebas:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/reporte/pruebas`, pruebas, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// export const descargarReporteEntidades = async(pruebas:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/reporte/entidades`, pruebas, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// export const descargarReporteClasificatoria = async(pruebas:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/reporte/clasificatoria`, pruebas, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// export const descargarReportePuntos = async(pruebas:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/reporte/puntos`, pruebas, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// export const descargarIncripcionesFiltroClub = async(datos:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/filtro/club`, datos, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// export const descargarIncripcionesFiltroDeportista = async(datos:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/filtro/deportista`, datos, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }






// //PDF de inscripciones por entidad
// export const descargarIncripcionesTemporada = async(datos:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/inscripciones/deportista`, datos, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }




// export const descargarCertificadoDeportivo = async(datos:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/certificado/deportivo`, datos, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }




// export const descargarComprobantePagoFactura = async(id:string):Promise<any> => {
//     try {
//         const { data } = await descargasApi.get<any>(`/factura/deportista/${id}`, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }




export const descargarFacturaCompetencia = async(pago:any):Promise<any> => {
    try {
        const { data } = await descargasApi.post<any>(`/factura/competencia`, pago, {
            responseType: 'blob', headers: { Accept: 'application/pdf', 'Content-Type': 'application/json' }
        });
        return data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}




// export const descargarBaterias = async(datos:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/reporte/baterias`, datos, {responseType: 'arraybuffer'});
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }




// export const descargarDataExcel = async(datos:any):Promise<any> => {
//     try {
//         const { data } = await descargasApi.post<any>(`/transformar/excel`, datos);
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// } 
