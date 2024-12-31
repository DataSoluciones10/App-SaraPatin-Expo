
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

import { incripcionesXClubXId, misIncripciones } from "@/core/actions";






interface InscripcionClubState {

    activeInscripcionClub: any | null;
    inscripcionesClub: any[];
    misInscripcionesClub: any[];
    isLoadingInscripcionClub: boolean,
    totalInsClubes: number;


    clearTodasIncripcionesClub: () => void,
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
