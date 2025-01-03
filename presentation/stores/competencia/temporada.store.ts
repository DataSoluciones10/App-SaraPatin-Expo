
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { useCategoriasTemporadaStore } from "./categorias_temporada.store";
import { confirmarTemporada } from "@/core/actions";







interface TemporadaState {

    activeTemporada: any | null;
    temporadas: any[];
    isLoadingTemporada: boolean,
    inscripcionActiva: boolean,
    total: number;

    startConfirmarTemporada: (temporada: any) => Promise<boolean>,

    // startCrearTemporada: (temporada: any) => Promise<boolean>,
    // startListadoXCompetencias: (id:string) => Promise<boolean>,
    // startUpdateSetting: (temporada: any) => Promise<boolean>,
    // startTemporadaID: (id:string) => Promise<boolean>,
    // clearActiveTemporada: () => void,
    // startLimpiarTemporadaActiva: () => void,
    // startUpdateTemporada: (temporada: any) => Promise<boolean>,
}







const storeApi: StateCreator<TemporadaState> = (set) => ({

    activeTemporada: null,
    temporadas: [],
    isLoadingTemporada: false,
    inscripcionActiva: false,
    total: 0,



    // clearActiveTemporada: () => {
    //     set({ activeTemporada: null });
    // },


    // startLimpiarTemporadaActiva: () => {
    //     set({ inscripcionActiva: false });
    // },




    startConfirmarTemporada: async(temporada: any) => {
        try {
            const data = await confirmarTemporada(temporada);
            set({ inscripcionActiva: data });
            return true;
        } catch (error:any) {
            return false;
        }
    },





    // startTemporadaID: async(id: string) => {
    //     try {
    //         const data = await TemporadaService.temporadaPorID(id);
    //         set({ activeTemporada: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },


//     startCrearTemporada: async(temporada: any) => {
//         try {
//             const data = await TemporadaService.createTemporada(temporada);
//             Swal.fire('Exitoso', 'Temporada Creada', 'success');
//             set( state => ({ 
//                 temporadas: [ ...state.temporadas, data ]
//             }));
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },



//     startUpdateTemporada: async(temporada: any) => {
//         try {
//             const data = await TemporadaService.updateTemporada(temporada);
//             Swal.fire('Exitoso', 'Temporada Actualizada', 'success');
//             set({ activeTemporada: data });
//             useCategoriasTemporadaStore.getState().startCategoriasXTemporada(data.id);
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },

    
    
//     startListadoXCompetencias: async(id) => {
//         set({ isLoadingTemporada: true });
//         try {
//             const data = await TemporadaService.listTemporadasXCompetencia(id);
//             set({ temporadas: data, isLoadingTemporada: false });
//             return true;
//         } catch (error:any) {
//             set({ isLoadingTemporada: false });
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },

    
    

//     startUpdateSetting: async(temporada: any) => {
//         try {
//             const data = await TemporadaService.updateTemporadaSetting(temporada);
//             Swal.fire('Exitoso', 'Ajuste Realizado', 'success');
//             set({ temporadas: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },




});





export const useTemporadaStore = create<TemporadaState>()(
    devtools(
        storeApi
    )
)
