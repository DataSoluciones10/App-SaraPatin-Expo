
// import { faltasApi } from '../../apis';







// export class FaltasService {



//     static faltaPorID = async(id:string):Promise<any> => {
//         try {
//             const { data } = await faltasApi.get<any>(`/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static listadoFaltas = async():Promise<any[]> => {
//         try {
//             const { data } = await faltasApi.get<any>('/');
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static createFalta = async(falta:any):Promise<any> => {
//         try {
//             const { data } = await faltasApi.post<any>('/', falta);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



    

//     static updateFalta = async(falta: any):Promise<any> => {
//         try {
//             const { data } = await faltasApi.put<any>(`/${falta.id}`, falta);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static agregarFaltasXPrueba = async(faltas:any):Promise<any> => {
//         try {
//             const { data } = await faltasApi.post<any>('/add/prueba', faltas);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }





//     static eliminarFaltaPrueba = async(falta:any):Promise<any> => {
//         try {
//             const { data } = await faltasApi.post<any>('/eliminar/prueba', falta);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }






// }