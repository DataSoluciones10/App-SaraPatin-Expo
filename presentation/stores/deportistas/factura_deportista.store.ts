
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";







interface FacturaDeportistaState {

    activeFacturaDeportista: any;

    activarFacturaDeportista: (total: number) => void,

}




const storeApi: StateCreator<FacturaDeportistaState> = (set) => ({

    activeFacturaDeportista: null,


    activarFacturaDeportista: (payload:any) => {
        set({ activeFacturaDeportista: payload });
    },



});






export const useFacturaDeportistaStore = create<FacturaDeportistaState>()(
    devtools(
        storeApi
    )
)
