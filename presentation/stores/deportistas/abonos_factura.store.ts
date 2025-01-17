
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";








interface AbonosFacturaState {

    activeAbono: any;
    abonos: any;
    isLoadingAbonos: boolean;
    
    listadoAbonoFacturaClear: () => boolean,

}




const storeApi: StateCreator<AbonosFacturaState> = (set) => ({


    activeAbono: null,
    abonos: [],
    isLoadingAbonos: false,
    

    

    listadoAbonoFacturaClear: () => {
        set({ abonos: [] });
        return true;
    },



});






export const useAbonosFacturaStore = create<AbonosFacturaState>()(
    devtools(
        storeApi
    )
)
