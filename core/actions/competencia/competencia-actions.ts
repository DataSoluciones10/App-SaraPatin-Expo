

import { competenciaApi } from '../../apis';
import { Competencia, CompetenciaResp, CompetenciasResp } from '../../interfaces';








export const listCompetenciasActivas = async():Promise<Competencia[]> => {
    try {
        const { data } = await competenciaApi.get<CompetenciasResp>('/activas');
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}




// static createCompetencia = async({ img, ...competencia}: Competencia):Promise<Competencia> => {
//     try {
//         const formData = new FormData();
//         formData.append('images', img);  

//         Object.entries(competencia).forEach(([key, value]) => {
//             formData.append(key, value.toString());
//         });
//         const { data } = await competenciaApi.post<CompetenciaResp>('/', formData);
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// static listCompetencias = async():Promise<Competencia[]> => {
//     try {
//         const { data } = await competenciaApi.get<CompetenciasResp>('/all');
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }






// static listadoMisCompetencias = async():Promise<Competencia[]> => {
//     try {
//         const { data } = await competenciaApi.get<CompetenciasResp>('/admin/miss');
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// static competenciaPorID = async(id:string):Promise<Competencia> => {
//     try {
//         const { data } = await competenciaApi.get<CompetenciaResp>(`/${id}`);
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// static updateCompetencia = async({ img, ...competencia}: Competencia):Promise<Competencia> => {
//     try {
//         const formData = new FormData();
//         formData.append('images', img);  

//         Object.entries(competencia).forEach(([key, value]) => {
//             formData.append(key, value.toString());
//         });
//         const { data } = await competenciaApi.put<CompetenciaResp>(`/${competencia.id}`, formData);
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }



// static updateImgPDF = async({ imgpdf, id}: any):Promise<any> => {
//     try {
//         const formData = new FormData();
//         formData.append('images', imgpdf);  

//         const { data } = await competenciaApi.put<any>(`/pdf/${id}`, formData);
//         return data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }
