import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";





interface ImagenState {

    imagen: File | undefined | string;
    valorImagen: (valor: File | undefined | string) => void;

}




const storeApi: StateCreator<ImagenState> = (set) => ({

    imagen: undefined,




    valorImagen: (valor) => {
        set({ imagen: valor })
    },

    

});




export const useImagenStore = create<ImagenState>()(
    devtools(
        storeApi
    )
)
