
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

import { misIncripciones } from "@/core/actions";






interface InscripcionClubState {

    activeInscripcionClub: any | null;
    inscripcionesClub: any[];
    misInscripcionesClub: any[];
    isLoadingInscripcionClub: boolean,
    totalInsClubes: number;


    startInscripcionClubXId: (id:string) => Promise<boolean>,
    clearTodasIncripcionesClub: () => void,
    clearIncripcioneClub: () => void,
    startMisInscripcionClub: () => Promise<boolean>,

}



const storeApi: StateCreator<InscripcionClubState> = (set) => ({

    activeInscripcionClub: null,
    inscripcionesClub: [],
    misInscripcionesClub: [],
    isLoadingInscripcionClub: false,
    totalInsClubes: 0,



    clearTodasIncripcionesClub: async() => {
        set({ inscripcionesClub: [] });
    },



    clearIncripcioneClub: async() => {
        set({ activeInscripcionClub: null });
    },



    startInscripcionClubXId: async(id) => {
        // try {
        //     const data = await InscripcionClubService.incripcionesXClubXId(id);
        //     set({ activeInscripcionClub: data });
        //     return true;
        // } catch (error:any) {
        //     Swal.fire('Error', error.message, 'error');
        //     return false;
        // }
        return true;
    },



    
    startMisInscripcionClub: async() => {
        try {
            set({ isLoadingInscripcionClub: true });
            const data = await misIncripciones();
            set({ misInscripcionesClub: data, isLoadingInscripcionClub: false});
            return true;
        } catch (error:any) {
            set({ isLoadingInscripcionClub: false });
            return false;
        }
    },



    // startInscripcionXClub: async(id) => {
    //     try {
    //         useInscripcionStore.setState({ isLoadingInscripcion: true });
    //         const data = await InscripcionClubService.incripcionesXClub(id);
    //         useInscripcionStore.setState({ inscripciones: data, isLoadingInscripcion: false })
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingInscripcionClub: false });
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



});





export const useInscripcionClubStore = create<InscripcionClubState>()(
    devtools(
        storeApi
    )
)
