
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { Competencia } from "@/core/interfaces";

import { listCompetenciasActivas } from "@/core/actions";






interface CompetenciaState {

    activeCompetencia: Competencia | null;
    competencias: Competencia[];
    isLoadingCompetencia: boolean,
    total: number;
    
    clearActiveCompetencia: () => void,
    startListadoCompetenciasActivas: () => Promise<boolean>,


    // startCrearCompetencia: (competencia: Competencia) => Promise<boolean>,
    // startListadoCompetencias: () => Promise<boolean>,
    // startListadoMisCompetencias: () => Promise<boolean>,
    // startCompenciaPorID: (id:string) => Promise<boolean>,
    // startUpdateCompetencia: (competencia: Competencia) => Promise<boolean>,
    // startUpdateImgPDF: (competencia: any) => Promise<boolean>,
}




const storeApi: StateCreator<CompetenciaState> = (set) => ({

    activeCompetencia: null,
    competencias: [],
    isLoadingCompetencia: false,
    total: 0,



    clearActiveCompetencia: async() => {
        set({ activeCompetencia: null });
    },



    // startCompenciaPorID: async(id: string) => {
    //     try {
    //         const data = await CompetenciaService.competenciaPorID(id);
    //         set({ activeCompetencia: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    startListadoCompetenciasActivas: async() => {
        set({ isLoadingCompetencia: true });
        try {
            const data = await listCompetenciasActivas();
            set({ competencias: data, isLoadingCompetencia: false });
            return true;
        } catch (error:any) {
            set({ isLoadingCompetencia: false });
            return false;
        }
    },




    // startCrearCompetencia: async(competencia: Competencia) => {
    //     try {
    //         const data = await CompetenciaService.createCompetencia(competencia);
    //         Swal.fire('Exitoso', 'Competencia Creada', 'success');
    //         set( state => ({ competencias: [ data, ...state.competencias ] }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },


    
    // startListadoCompetencias: async() => {
    //     set({ isLoadingCompetencia: true });
    //     try {
    //         const data = await CompetenciaService.listCompetencias();
    //         set({ competencias: data, isLoadingCompetencia: false });
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingCompetencia: false });
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    



    // startListadoMisCompetencias: async() => {
    //     set({ isLoadingCompetencia: true });
    //     try {
    //         const data = await CompetenciaService.listadoMisCompetencias();
    //         set({ competencias: data, isLoadingCompetencia: false });
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingCompetencia: false });

    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    // startUpdateCompetencia: async(competencia: Competencia) => {
    //     try {
    //         const data = await CompetenciaService.updateCompetencia(competencia);
    //         Swal.fire('Exitoso', 'Competencia Actualizada', 'success');
    //         set( state => ({ 
    //             competencias: state.competencias.map( (c) => {
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



    // startUpdateImgPDF: async(competencia: any) => {
    //     try {
    //         const data = await CompetenciaService.updateImgPDF(competencia);
    //         Swal.fire('Exitoso', data.msg, 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




});





export const useCompetenciaStore = create<CompetenciaState>()(
    devtools(
        storeApi
    )
)
