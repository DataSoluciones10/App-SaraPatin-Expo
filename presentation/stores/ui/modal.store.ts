import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";





interface ModalState {

    modalForm: boolean;
    modalFormDos: boolean;
    // modalFormTres: boolean;
    // modalNoCierra: boolean;
    // modalImagen: boolean;


    modalFormToggle: (valor:boolean) => void;
    modalFormDosToggle: (valor:boolean) => void;
    // modalFormTresToggle: (valor:boolean) => void;
    // modalNoCierraToggle: (valor:boolean) => void;
    // modalImagenToggle: (valor:boolean) => void;

}




const storeApi: StateCreator<ModalState> = (set) => ({

    modalForm: false,
    modalFormDos: false,
    // modalFormTres: false,
    // modalNoCierra: false,
    // modalImagen: false,


    modalFormToggle: (valor) => {
        set({ modalForm: valor })
    },


    modalFormDosToggle: (valor) => {
        set({ modalFormDos: valor })
    },

    // modalFormTresToggle: (valor) => {
    //     set({ modalFormTres: valor })
    // },

    // modalNoCierraToggle: (valor) => {
    //     set({ modalNoCierra: valor })
    // },

    // modalImagenToggle: (valor) => {
    //     set({ modalImagen: valor })
    // },

});





export const useModalStore = create<ModalState>()(
    devtools(
        storeApi
    )
)
