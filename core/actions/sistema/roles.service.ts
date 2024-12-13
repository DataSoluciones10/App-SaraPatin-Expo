

// import { rolesApi } from '../../apis';
// import { Roles, RolesResp } from '../../interfaces';







// export class RolesService {


//     static createRol = async(rol: Roles):Promise<Roles> => {
//         try {
//             const { data } = await rolesApi.post<RolesResp>('/', rol);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static listadoRoles = async():Promise<Roles[]> => {
//         try {
//             const { data } = await rolesApi.get<Roles[]>('/');
//             return data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static rolPorID = async(id:string):Promise<Roles> => {
//         try {
//             const { data } = await rolesApi.get<RolesResp>(`/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }


//     static updateRol = async(rol: Roles):Promise<Roles> => {
//         try {
//             const { data } = await rolesApi.put<RolesResp>(`/${rol.id}`, rol);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     // if ( error instanceof AxiosError ) {
//     //     console.log(error.response?.data);
//     //     throw new Error(error.response?.data);
//     //   }

// }