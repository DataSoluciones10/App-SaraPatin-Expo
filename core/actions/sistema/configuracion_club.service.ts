
// import { configuracionClubApi } from "../../apis";









// export class ConfiguracionClubService {




//     static listadoMisConfiguraciones = async():Promise<any> => {
//         try {
//             const { data } = await configuracionClubApi.get<any>(`/`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static crearConfiguraciones = async(body:any):Promise<any> => {
//         try {
//             const { data } = await configuracionClubApi.post<any>(`/`, body);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static actualizarConfiguracion = async(body:any):Promise<any> => {
//         try {
//             const { data } = await configuracionClubApi.put<any>(`/${body.id}`, body);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }


    
// }