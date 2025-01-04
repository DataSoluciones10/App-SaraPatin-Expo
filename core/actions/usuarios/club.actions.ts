
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
            id, img: dato.img,
            nombre: dato.nombre,
            delegado: dato.delegado,
            nit: dato.nit,
            entidad: dato.entidad,
            correo: dato.correo,
            movil: dato.movil,
            departamento: dato.departamento._id,
            ciudad: dato.ciudad._id,
            descripcion: dato.descripcion,
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





export const updateCreateEntidad = async({ img, ...club}: Club):Promise<Club> => {
    try {
        const formData = new FormData() as any;
        if( img && img.includes('file') ){ formData.append('images', { uri:img, type:'image/jpeg', name: img.split('/').pop() }); }

        Object.entries(club).forEach(([key, value]:any) => {
            formData.append(key, value.toString());
        });

        if( club.id && club.id !== 'new' ) {
            const { data } = await clubesApi.put<ClubResp>(`/${club.id}`, formData, 
                { headers: { 'Content-Type': 'multipart/form-data' }
            });
            return data.data;
        }

        const { data } = await clubesApi.post<ClubResp>('/', formData,  
            { headers: { 'Content-Type': 'multipart/form-data' }
        });
        return data.data;

    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



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
