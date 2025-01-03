

import { usuariosApi } from "@/core/apis";
import { UsuariosResp } from "@/core/interfaces";







    export const listadoMisProfesores = async():Promise<UsuariosResp> => {
        try {
            const { data } = await usuariosApi.get<UsuariosResp>('/admin/profesor');
            return data;
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




    // static createProfesor = async({ img, club, ...profesor}: Usuario):Promise<Usuario> => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('images', img);  

    //         formData.append('club', JSON.stringify(club));

    //         Object.entries(profesor).forEach(([key, value]) => {
    //             formData.append(key, value.toString());
    //         });
    //         const { data } = await usuariosApi.post<UsuarioResp>('/profesor', formData);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }


    // static updateProfesor = async({ img, club, ...user}: Usuario):Promise<Usuario> => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('images', img);  

    //         formData.append('club', JSON.stringify(club));

    //         Object.entries(user).forEach(([key, value]) => {
    //             formData.append(key, value.toString());
    //         });
    //         const { data } = await usuariosApi.put<UsuarioResp>(`/profesor/${user.id}`, formData);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }


