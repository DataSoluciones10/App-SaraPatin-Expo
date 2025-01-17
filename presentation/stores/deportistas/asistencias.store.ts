
import Swal from "sweetalert2";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { AsistenciasService } from "../../services";








interface AsistenciasState {

    asistencias: any;
    asisMesActivo: any;
    totalAsistencias: number;
    totalAsistenciasMes: number;
    isLoadingAsistencias: boolean;

    startTotalAsistencias: (total: number) => void,
    startTotalAsistenciasMes: (total: number) => void,
    startListadoAsistenciasXMes: (id:string) => Promise<boolean>,
    limpiarAsistenciasAndMes: () => void,


}




const storeApi: StateCreator<AsistenciasState> = (set) => ({


    asistencias: [],
    asisMesActivo: null,
    totalAsistencias: 0,
    totalAsistenciasMes: 0,
    isLoadingAsistencias: false,

    


    startTotalAsistencias: (total: number) => {
        set({ totalAsistencias: total });
    },



    startTotalAsistenciasMes: (total: number) => {
        set({ totalAsistenciasMes: total });
    },




    startListadoAsistenciasXMes: async(id) => {
        try {
            set({ isLoadingAsistencias: true });
            const data = await AsistenciasService.listAsistenciaXMes(id);
            set({ asistencias: data.data, asisMesActivo: data.data2, isLoadingAsistencias: false });
            return true;
        } catch (error:any) {
            set({ isLoadingAsistencias: false });
            Swal.fire('Error', error.message, 'error');
            return false;
        }
    },


    

    limpiarAsistenciasAndMes: () => {
        set({ asistencias: [], asisMesActivo: null });
    },

    


});






export const useAsistenciasStore = create<AsistenciasState>()(
    devtools(
        storeApi
    )
)
