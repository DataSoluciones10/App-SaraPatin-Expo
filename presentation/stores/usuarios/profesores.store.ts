
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

import { Usuario } from "@/core/interfaces";
import { listadoMisProfesoresAndYo } from "@/core/actions";








interface ProfesoresState {

    activeProfesor: Usuario | null;
    profesores: Usuario[];
    isLoadingProfesor: boolean;
    total: number;

    
    startMisProfesores: () => Promise<boolean>,
    adminAndProfesores: () => Promise<boolean>,

    // startCrearProfesor: (usuario: Usuario) => Promise<boolean>,
    // startUpdateProfesor: (profesor: Usuario) => Promise<boolean>,
}




const storeApi: StateCreator<ProfesoresState> = (set) => ({

    activeProfesor: null,
    profesores: [],
    isLoadingProfesor: false,
    total: 0,



    startMisProfesores: async() => {
        // try {
        //     set({ isLoadingProfesor: true });
        //     const data = await ProfesoresService.listadoMisProfesores();
        //     set({ profesores: data.data, isLoadingProfesor: false });
        //     return true;
        // } catch (error:any) {
        //     set({ isLoadingProfesor: false });
        //     Swal.fire('Error', error.message, 'error');
        //     return false;
        // }
        return false;
    },


    adminAndProfesores: async() => {
        try {
            set({ isLoadingProfesor: true });
            const data = await listadoMisProfesoresAndYo();
            set({ profesores: data.data, isLoadingProfesor: false });
            return true;
        } catch (error:any) {
            set({ isLoadingProfesor: false });
            return false;
        }
    },


    // startCrearProfesor: async(profesor: Usuario) => {
    //     try {
    //         const data = await ProfesoresService.createProfesor(profesor);
    //         Swal.fire('Exitoso', 'Profesor Creado', 'success');
    //         set( state => ({ 
    //             profesores: [ data, ...state.profesores ]
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },


    // startUpdateProfesor: async(profesor: Usuario) => {
    //     try {
    //         const data = await ProfesoresService.updateProfesor(profesor);
    //         Swal.fire('Exitoso', 'Profesor Actualizado', 'success');
    //         set( state => ({ 
    //             profesores: state.profesores.map( (c) => {
    //                 if(c.id === data.id){
    //                     return data
    //                 }
    //                 return c
    //             })
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },


});






export const useProfesoresStore = create<ProfesoresState>()(
    devtools(
        storeApi
    )
)
