
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

import { Ciudad, Region } from "@/core/interfaces";
import { listadoCiudades, listadoRegiones } from "@/core/actions";





interface CiudadesState {

    activeCiudad: Ciudad | null;
    ciudades: Ciudad[];

    activeRegion: Region | null;
    regiones: Region[];

    startListadoCiudades: (region: string) => Promise<boolean>,
    startListadoRegiones: () => Promise<boolean>,

}




const storeApi: StateCreator<CiudadesState> = (set) => ({

    activeCiudad: null,
    ciudades: [],

    activeRegion: null,
    regiones: [],



    startListadoCiudades: async(region: string) => {
        try {
            const data = await listadoCiudades(region);
            set({ ciudades: data });
            return true;
        } catch (error:any) {
            return false;
        }
    },



    startListadoRegiones: async() => {
        try {
            const data = await listadoRegiones();
            set({ regiones: data });
            return true;
        } catch (error:any) {
            return false;
        }
    },




});





export const useCiudadesStore = create<CiudadesState>()(
    devtools(
        storeApi
    )
)
