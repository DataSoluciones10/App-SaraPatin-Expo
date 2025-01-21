
import { listadoPruebasXFiltro } from "@/core/actions";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
// import { useSocketStore } from "../sistema/sockets.store";
// import { useClasificatoriaStore } from "./clasificatoria_store";





interface PruebasState {

    activePrueba: any | null;
    pruebasDeportista: any[];
    noPruebaDeportistas: any[];
    pruebasEntidad: any[];
    isLoadingPruebas: boolean,



    // startPruebaID: (id:string) => Promise<boolean>,
    clearActiveListPruebas: (tipo:string) => void,
    listadoPruebasDeportista: (datos:any[]) => void,
    startListadoPruebasXFiltros: (pruebas:any) => Promise<boolean>,
    // startCrearPrueba: (prueba: any) => Promise<any>,
    // startListadoPruebasXArbitro: () => Promise<boolean>,
    // startActualizarPrueba: (prueba:any) => Promise<boolean>,
    // startcerrarPruebaYPremiar: (prueba: any) => Promise<any>,
    // startEliminarPrueba: (prueba:string) => Promise<boolean>,
    // startDeportistasNoRealizarPrueba: (pruebas:any) => Promise<boolean>,
}





const storeApi: StateCreator<PruebasState> = (set) => ({


    activePrueba: null,
    pruebasDeportista: [],
    noPruebaDeportistas: [],
    pruebasEntidad: [],
    isLoadingPruebas: false,




    
    clearActiveListPruebas: async(tipo:string) => {
        const key = tipo === 'DEPORTISTAS' ? 'pruebasDeportista' : 'pruebasEntidad';
        set({ [key]: [] });
    },



    listadoPruebasDeportista: async(datos:any[]) => {
        set({ pruebasDeportista: datos });
    },



    // startPruebaID: async(id: string) => {
    //     try {
    //         const data = await PruebasService.pruebaPorID(id);
    //         set({ activePrueba: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    startListadoPruebasXFiltros: async(pruebas) => {
        try {
            const data = await listadoPruebasXFiltro(pruebas);
            if(pruebas.tipoReporte === 'DEPORTISTAS') {
                set({ pruebasDeportista: data, pruebasEntidad: [] });
                return true;
            } else {
                set({ pruebasEntidad: data, pruebasDeportista: [] });
                return true;
            }
        } catch (error:any) {
            return false;
        }
    },
    
    

    // startListadoPruebasXArbitro: async() => {
    //     try {
    //         const data = await PruebasService.pruebaPorArbitro();
    //         set({ pruebasDeportista: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },

    

    // startCrearPrueba: async(prueba: any) => {
    //     try {
    //         const data = await PruebasService.createPrueba(prueba);
    //         if(data.clasifica) {
    //             useClasificatoriaStore.getState().agregarClasificatoria(data.data);
    //         } else {
    //             set( state => ({ pruebasDeportista: [ data.data, ...state.pruebasDeportista ] }));
    //         }
    //         const { socket } = useSocketStore.getState();
    //         socket?.emit('crear-prueba', { data: data.data });
    //         return data;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },

    


    // startActualizarPrueba: async(prueba: any) => {
    //     try {
    //         const data = await PruebasService.updatePrueba(prueba);
    //         set( state => ({ 
    //             pruebasDeportista: state.pruebasDeportista.map( (c) => {
    //                 if(c.id === data.id){ return data }
    //                 return c
    //             })
    //         }));
    //         Swal.fire('Exitoso', 'Prueba Actualizada', 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startcerrarPruebaYPremiar: async(prueba) => {
    //     try {
    //         const data = await PruebasService.cerrarPruebaYPremiar(prueba);
    //         Swal.fire('Exitoso', data.msg, 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    // startDeportistasNoRealizarPrueba: async(prueba) => {
    //     try {
    //         const data = await PruebasService.deportistasNoRealizaronPrueba(prueba);
    //         set({ noPruebaDeportistas: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startEliminarPrueba: async(id: string) => {
    //     try {
    //         const data = await PruebasService.eliminarPrueba(id);
    //         set( state => ({ 
    //             pruebasDeportista: state.pruebasDeportista.filter( (c) => c.id !== data.id )
    //         }));
    //         Swal.fire('Exitoso', 'Prueba Eliminada', 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },

});





export const usePruebasStore = create<PruebasState>()(
    devtools(
        storeApi
    )
)
