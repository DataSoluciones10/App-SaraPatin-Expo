
import { deportistasApi } from "@/core/apis";
import { Deportista, DeportistaResp, FormDeportista } from "@/core/interfaces";



const emptyDeportista = {
    nombre: '',
    tipo_documento: '',
    cedula: '',
    correo: '',
    movil: '',
    departamento: '',
    ciudad: '',
    rama: '',
    patin: '',
    fechaNacimiento: '',
    peso: '',
    talla: '',
    eps: '',
    informacion: '',
    club: [],
    profesor: [],
    mensualidad: '',
    dias_pagos: '',
};



export const deportistaPorID = async(id:string):Promise<any> => {
    if(id === 'new') return emptyDeportista;
    try {
        const { data } = await deportistasApi.get<any>(`/xid/${id}`);
        const { deportista:valor, ...user } = data.data;
        const datos = {
            ...user,
            rama: valor.rama,
            patin: valor.patin,
            talla: valor.talla?.toString() ?? '',
            peso: valor.peso?.toString() ?? '', 
            eps: valor.eps,
            profesor: valor.profesor,
            fechaNacimiento: valor.fechaNacimiento,
            mensualidad: user.mensualidad?.toString() ?? '',
            dias_pagos: user.dias_pagos?.toString() ?? '',
        }
        return datos || null;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



export const listadoMisDeportistas = async({ page=0, termino='' }):Promise<any> => {
    try {
        const params = new URLSearchParams();
        params.append('page',  page.toString());
        params.append('termino',  termino);
        const { data } = await deportistasApi.get<any>('/xadmin', { params });
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}




export const updateCreateDeportistas = async({ img, club, profesor, ...deportista}: FormDeportista):Promise<Deportista> => {
    try {
        const formData = new FormData() as any;
        if( img && img.includes('file') ){ formData.append('images', { uri:img, type:'image/jpeg', name: img.split('/').pop() }); }
        formData.append('club', JSON.stringify(club));
        formData.append('profesor', JSON.stringify(profesor));

        Object.entries(deportista).forEach(([key, value]:any) => {
            formData.append(key, value.toString());
        });

        if( deportista.id && deportista.id !== 'new' ) {
            const { data } = await deportistasApi.put<DeportistaResp>(`/${deportista.id}`, formData, 
                { headers: { 'Content-Type': 'multipart/form-data' }
            });
            return data.data;
        }

        const { data } = await deportistasApi.post<DeportistaResp>('/', formData,  
            { headers: { 'Content-Type': 'multipart/form-data' }
        });
        return data.data;

    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}





// export const updateCreateDeportistas = async({ img, club, profesor, ...deportista}: FormDeportista):Promise<Deportista> => {
//     try {
//         const formData = new FormData();
//         if ( img ){ formData.append('images', img) } 
//         formData.append('club', JSON.stringify(club));
//         formData.append('profesor', JSON.stringify(profesor));

//         // Object.entries(deportista).forEach(([key, value]:any) => {
//         //     formData.append(key, value.toString());
//         // });

//         Object.entries(deportista).forEach(([key, value]) => {
//             if (value !== undefined && value !== null) {
//                 formData.append(key, value.toString());
//             }
//         });

//         if( deportista.id && deportista.id !== 'new' ) {
//             const { data } = await deportistasApi.put<DeportistaResp>(`/${deportista.id}`, formData);
//             return data.data;
//         }

//         console.log('crear')
//         const { data } = await deportistasApi.post<DeportistaResp>('/', formData);
//         return data.data;

//     } catch (error: any) {
//         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
//         throw new Error(errores);
//     }
// }


