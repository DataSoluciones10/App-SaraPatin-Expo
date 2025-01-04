
import { clubesApi } from "@/core/apis";
import { Club, ClubResp } from "@/core/interfaces";



const emptyEntidad = {
    nombre: '',
    delegado: '',
    nit: '',
    entidad: '',
    correo: '',
    movil: '',
    departamento: '',
    ciudad: '',
    descripcion: '',
};




export const clubPorID = async(id:string):Promise<Club> => {
    if(id === 'new') return emptyEntidad;
    try {
        const { data } = await clubesApi.get<ClubResp>(`/id/${id}`);
        const  dato  = data.data;
        const datos = {
            nombre: '',
            delegado: '',
            nit: '',
            entidad: '',
            correo: '',
            movil: '',
            departamento: '',
            ciudad: '',
            descripcion: '',
        }
        return datos || null;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}








export const clubPorDirector = async():Promise<any> => {
    try {
        const { data } = await clubesApi.get<any>(`/miclub`);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}














// export const todosClubesNameId = async():Promise<any> => {
//     try {
//         const { data } = await clubesApi.get<ClubesResp>('/solo/nameid');
//         return data.data;
//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }






    // export const  listadoClubes = async({ page=0, termino='' }:any):Promise<any> => {
    //     try {
    //         const params = new URLSearchParams();
    //         params.append('page',  page.toString());
    //         params.append('termino',  termino);
    //         const { data } = await clubesApi.get<ClubesResp>('/', { params });
    //         useClubStore.setState({ total: data.total});
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }

    






    // export const  createClub = async({ img, ...club }: Club):Promise<Club> => {
    //     try {

    //         const formData = new FormData();
    //         formData.append('images', img);  

    //         Object.entries(club).forEach(([key, value]) => {
    //             formData.append(key, value.toString());
    //         });
    //         const { data } = await clubesApi.post<ClubResp>('/', formData);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }



    // export const  updateClub = async({ img, ...club }: Club):Promise<Club> => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('images', img);  

    //         Object.entries(club).forEach(([key, value]) => {
    //             formData.append(key, value.toString());
    //         });
    //         const { data } = await clubesApi.put<ClubResp>(`/${club.id}`, formData);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }



    // export const  subirDocumentos = async({ img, ...club }: any):Promise<any> => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('images', img);  

    //         Object.entries(club).forEach(([key, value]:any) => {
    //             formData.append(key, value.toString());
    //         });
    //         const { data } = await clubesApi.put<ClubResp>(`/documentos/${club.id}`, formData);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }
