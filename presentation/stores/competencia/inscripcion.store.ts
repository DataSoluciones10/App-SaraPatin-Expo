
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";






interface InscripcionState {

    activeInscripcion: any | null;
    inscripciones: any[];
    inscripcionExtraordinaria: any[];
    idsInscripciones: any[];
    contadorXCategorias: any[];
    isLoadingInscripcion: boolean,
    total: number;

    clearTodasIncripciones: () => void,
    clearIdsIncripciones:  () => void,
    startClearInscrionesExtraordinarias: () => void,
    startClearActiveInscripcion: () => void,
    // startInscripcionXID: (id: any) => Promise<boolean>,
    // startCrearInscripcion: (inscripcion: any) => Promise<boolean>,
    // startVerificarInscripciones: (inscripcion: any) => Promise<boolean>,
    // startInscripcionExtraordinaria: (inscripcion: any) => Promise<boolean>,
    // startContadorXCategoria: (inscripcion: string) => Promise<boolean>,
    // startEditarInscripcion: (inscripcion: any) => Promise<boolean>,
}





const storeApi: StateCreator<InscripcionState> = (set) => ({

    activeInscripcion: null,
    inscripciones: [],
    inscripcionExtraordinaria: [],
    idsInscripciones: [],
    contadorXCategorias: [],
    isLoadingInscripcion: false,
    total: 0,


    clearTodasIncripciones: () => {
        set({ inscripciones: [] });
    },


    clearIdsIncripciones: () => {
        set({ idsInscripciones: [] });
    },


    startClearInscrionesExtraordinarias: () => {
        set({ inscripcionExtraordinaria: [] });
    },



    startClearActiveInscripcion: () => {
        set({ activeInscripcion: null });
    },



    // startInscripcionXID: async(id: string) => {
    //     try {
    //         const data = await InscripcionService.inscripcionXId(id);
    //         set({ activeInscripcion: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startCrearInscripcion: async(inscripcion: any) => {
    //     try {
    //         const data = await InscripcionService.createInscripcion(inscripcion);
    //         Swal.fire('Exitoso', 'Inscripcion Creada', 'success');
    //         set( state => ({ 
    //             inscripciones: [ ...state.inscripciones, data ]
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },

    


    // startVerificarInscripciones: async(inscripcion: any) => {
    //     try {
    //         const data = await InscripcionService.verificarInscripcion(inscripcion);
    //         set({ inscripcionExtraordinaria: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    
    // startInscripcionExtraordinaria: async(inscripcion:any) => {
    //     try {
    //         const data = await InscripcionService.crearInscripcionExtra(inscripcion);
    //         Swal.fire('Exitoso', 'Inscripcion Creada', 'success');
    //         set( state => ({ 
    //             inscripciones: [ data, ...state.inscripciones ]
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startContadorXCategoria: async(categoria: string) => {
    //     try {
    //         const data = await InscripcionService.listadoXCategoriasTemporada(categoria);
    //         set({ contadorXCategorias: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    // startEditarInscripcion: async(inscripcion: any) => {
    //     try {
    //         await InscripcionService.actualizarInscripcion(inscripcion);
    //         Swal.fire('Exitoso', 'Inscripción Actualiza', 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },
    



});



export const useInscripcionStore = create<InscripcionState>()(
    devtools(
        storeApi
    )
)
