
// import { inscripcionApi } from '../../apis';
// import { useInscripcionStore } from '../../store';







// export class InscripcionService {



//     static inscripcionXId = async(id:string):Promise<any> => {
//         try {
//             const { data } = await inscripcionApi.get<any>(`/xid/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static createInscripcion = async(inscripcion:any):Promise<any> => {
//         try {
//             const { data } = await inscripcionApi.post<any>('/', inscripcion);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static listadoXTemporadaXPatin = async({ page=0, termino='', id='' }):Promise<any> => {
//         try {
//             const params = new URLSearchParams();
//             params.append('page',  page.toString());
//             params.append('termino',  termino);
//             const { data } = await inscripcionApi.get<any>(`/temporada/${id}`, { params });
//             useInscripcionStore.setState({ total: data.total });
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }


    

//     static listadoXTemporadaXEntidad = async({ page=0, termino='', id='' }):Promise<any[]> => {
//         try {
//             const params = new URLSearchParams();
//             params.append('page',  page.toString());
//             params.append('termino',  termino);
//             const { data } = await inscripcionApi.get<any>(`/entidad/${id}`, { params });
//             useInscripcionStore.setState({ total: data.total });
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }





//     static listadoXCategoriasTemporada = async(id:string):Promise<any[]> => {
//         try {
//             const { data } = await inscripcionApi.get<any>(`/categorias/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }

    



//     static verificarInscripcion = async(inscripcion:any):Promise<any> => {
//         try {
//             const { data } = await inscripcionApi.post<any>('/verificar/inscritos', inscripcion);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }



//     static crearInscripcionExtra = async(inscripcion:any):Promise<any> => {
//         try {
//             const { data } = await inscripcionApi.post<any>('/inscritos/extra', inscripcion);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static eliminarInscripcionXProfesor = async(id:string):Promise<any> => {
//         try {
//             const { data } = await inscripcionApi.delete<any>(`/${id}`);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }




//     static actualizarInscripcion = async(datos:any):Promise<any> => {
//         try {
//             const { data } = await inscripcionApi.put<any>(`/editar`, datos);
//             return data.data;
//         } catch (error: any) {
//             const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//             throw new Error(errores);
//         }
//     }


    
// }