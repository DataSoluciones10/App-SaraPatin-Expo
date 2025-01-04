

import { usuariosApi } from "@/core/apis";
import { Usuario, UsuarioResp, UsuariosResp } from "@/core/interfaces";




const emptyProfesor = {
    nombre: '',
    cedula: '',
    tipo_documento: '',
    club: [],
    correo: '',
    movil: '',
    departamento: '',
    ciudad: '',
    dias_pagos: '',
}



export const profesorPorID = async(id:string):Promise<any> => {
    if(id === 'new') return emptyProfesor;
    try {
        const { data } = await usuariosApi.get<any>(`/${id}`);
        const dato = data.data;
        const datos = {
            id, img: dato.img,
            nombre: dato.nombre,
            cedula: dato.cedula,
            tipo_documento: dato.tipo_documento,
            club: dato.club,
            correo: dato.correo,
            movil: dato.movil,
            departamento: dato.departamento._id,
            ciudad: dato.ciudad._id,
            dias_pagos: dato.dias_pagos || '',
            estado: dato.estado,
        }
        return datos || null;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



export const listadoMisProfesores = async():Promise<any> => {
    try {
        const { data } = await usuariosApi.get<any>('/admin/profesor');
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



export const listadoMisProfesoresAndYo = async():Promise<UsuariosResp> => {
    try {
        const { data } = await usuariosApi.get<UsuariosResp>('/profesor/andadmin');
        return data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}



export const updateCreateProfesores = async({ img, club, ...profesor}: Usuario):Promise<Usuario> => {
    try {
        const formData = new FormData() as any;
        if( img && img.includes('file') ){ formData.append('images', { uri:img, type:'image/jpeg', name: img.split('/').pop() }); }
        formData.append('club', JSON.stringify(club));

        Object.entries(profesor).forEach(([key, value]:any) => {
            formData.append(key, value.toString());
        });

        if( profesor.id && profesor.id !== 'new' ) {
            const { data } = await usuariosApi.put<UsuarioResp>(`/profesor/${profesor.id}`, formData, 
                { headers: { 'Content-Type': 'multipart/form-data' }
            });
            return data.data;
        }

        const { data } = await usuariosApi.post<UsuarioResp>('/profesor', formData,  
            { headers: { 'Content-Type': 'multipart/form-data' }
        });
        return data.data;

    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}


