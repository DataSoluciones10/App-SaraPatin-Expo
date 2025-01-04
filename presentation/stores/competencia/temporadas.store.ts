
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { temporadaIsAbierta } from "@/core/actions";
import { useInscripcionStore } from "./inscripcion.store";







interface TemporadaState {

    activeTemporada: any | null;
    temporadas: any[];
    isLoadingTemporada: boolean,
    inscripcionActiva: boolean,
    total: number;


    startLimpiarTemporadaActiva: () => void,
    startConfirmarTemporada: (temporada: any) => Promise<boolean>,

}





const storeApi: StateCreator<TemporadaState> = (set) => ({

    activeTemporada: null,
    temporadas: [],
    isLoadingTemporada: false,
    inscripcionActiva: false,
    total: 0,





    startLimpiarTemporadaActiva: () => {
        set({ inscripcionActiva: false });
    },


    startConfirmarTemporada: async(temporada: any) => {
        try {
            const data = await temporadaIsAbierta(temporada);
            set({ inscripcionActiva: data.data });
            useInscripcionStore.setState({idsInscripciones:data.data2});
            return true;
        } catch (error:any) {
            return false;
        }
    },



});





export const useTemporadaStore = create<TemporadaState>()(
    devtools(
        storeApi
    )
)
