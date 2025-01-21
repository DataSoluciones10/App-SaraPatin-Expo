
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

import { listadoPuntosXFiltro } from "@/core/actions";




interface ClasificatoriasState {

    activeClasificatoria: any | null;
    clasificatorias: any[];
    clasificatoriasXJuez: any[];
    clasificatoriasXPuntos: any[];
    isLoadingClasificatoria: boolean,

    

    datosClasificatoriaPuntos: (datos:any[]) => void,
    startListadoPuntosXFiltros: (prueba: any) => Promise<any>,


    // limpiarListadoClasificatorias: () => void,
    // limpiarListadoClasiXJuez: () => void,
    // setClasificatoriaActive: (dato:any) => void,
    // removeClasificatoriaActive: () => void,

    // startListadoClasificatoriaXArbitro: () => Promise<boolean>,
    // listadoClasificatoriaXOlimpica: (id:string) => Promise<boolean>,
    // listadoClasificatoriaXFiltro: (id:any) => Promise<boolean>,
    // startCrearVelocidadOlimpica: (clasificatoria: any) => Promise<boolean>,
    // startGenerarClasificatorias: (datos:any) => Promise<boolean>,
    // startListadoClasificatoriaXRondas: (id:string) => Promise<boolean>,
    // setCambiarClasificatoriaSerie: (dato:any) => Promise<boolean>,
    // startCrearPruebaPuntos: (prueba: any) => Promise<any>,
    // startListadoPuntosTotal: (value: any) => Promise<any>,
    // startListadoPuntosXDeportista: (prueba: any) => Promise<any>,
    // startEliminarRegistroPuntos: (id: string) => Promise<any>,


    // agregarClasificatoria: (dato:any) => void,
    // startCrearPuntosAdmin: (prueba: any) => Promise<any>,
    
}





const storeApi: StateCreator<ClasificatoriasState> = (set) => ({


    activeClasificatoria: null,
    clasificatorias: [],
    clasificatoriasXJuez: [],
    clasificatoriasXPuntos: [],
    isLoadingClasificatoria: false,



    // limpiarListadoClasificatorias: () => {
    //     set({ clasificatorias: [] });
    // },


    // limpiarListadoClasiXJuez: () => {
    //     set({ clasificatoriasXJuez: [] });
    // },


    // setClasificatoriaActive: (dato) => {
    //     set({ activeClasificatoria: dato })
    // },
    

    // removeClasificatoriaActive: () => {
    //     set({ activeClasificatoria: null });
    // },


    datosClasificatoriaPuntos: (datos:any) => {
        set({ clasificatoriasXPuntos: datos });
    },



    startListadoPuntosXFiltros: async(pruebas) => {
        try {
            const data = await listadoPuntosXFiltro(pruebas);
            set({ clasificatoriasXPuntos: data });
        } catch (error:any) {
            return false;
        }
    },




    // listadoClasificatoriaXOlimpica: async(id:string) => {
    //     try {
    //         const data = await ClasificatoriaService.listadoClasificatoriaXOlimpica(id);
    //         set({ clasificatorias: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startCrearVelocidadOlimpica: async(clasificatoria: any) => {
    //     try {
    //         const data = await ClasificatoriaService.createPruebaOlimpica(clasificatoria);
    //         if(data.ok) {
    //             const { socket } = useSocketStore.getState();
    //             socket?.emit('velocidad-olimpica', { categoria: clasificatoria.categoria });
    //         }
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },


    

    // startListadoClasificatoriaXArbitro: async() => {
    //     try {
    //         const data = await ClasificatoriaService.clasificatoriaPorArbitro();
    //         set({ clasificatoriasXJuez: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },


    

    // startListadoClasificatoriaXRondas: async(id) => {
    //     set({ isLoadingClasificatoria: true });
    //     try {
    //         const data = await ClasificatoriaService.listadoClasificatoriaXRonda(id);
    //         set({ clasificatorias: data, isLoadingClasificatoria: false });
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingClasificatoria: false });
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // listadoClasificatoriaXFiltro: async(valor) => {
    //     set({ isLoadingClasificatoria: true });
    //     try {
    //         const data = await ClasificatoriaService.listadoClasificatoriaXFiltro(valor);
    //         set({ clasificatoriasXJuez: data, isLoadingClasificatoria: false });
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingClasificatoria: false });
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },

    


    // setCambiarClasificatoriaSerie: async(datos) => {
    //     try {
    //         const data = await ClasificatoriaService.actualizarClasificatoriaSerie(datos);
    //         set({ clasificatorias: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },
    



    // startGenerarClasificatorias: async(datos: any) => {
    //     try {
    //         const data = await ClasificatoriaService.generarClasificatoria(datos);
    //         set({ clasificatorias: data });
    //         Swal.fire('Exitoso', 'Generación de Series', 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startCrearPruebaPuntos: async(prueba: any) => {
    //     try {
    //         const data = await ClasificatoriaService.createPruebaPuntos(prueba);
    //         const { socket } = useSocketStore.getState();
    //         socket?.emit('puntos-prueba', { data: data.data });
    //         socket?.emit('update-competir', {data:data.data2});
    //         return data;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



   




    // startListadoPuntosTotal: async(puntos) => {
    //     try {
    //         const data = await ClasificatoriaService.listadoPuntosTotal(puntos);
    //         set({ clasificatoriasXPuntos: data });
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startEliminarRegistroPuntos: async(id: string) => {
    //     try {
    //         const data = await  ClasificatoriaService.eliminarRegistroPuntos(id);
    //         set( state => ({ 
    //             clasificatoriasXJuez: state.clasificatoriasXJuez.filter( (c) => c.id !== data.id )
    //         }));
    //         Swal.fire('Exitoso', 'Registro Puntos Eliminado', 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    // startListadoPuntosXDeportista: async(datos) => {
    //     try {
    //         const data = await ClasificatoriaService.listadoPuntosXDeportista(datos);
    //         set({ clasificatoriasXJuez: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },   






    // startCrearPuntosAdmin: async(datos) => {
    //     try {
    //         const data = await ClasificatoriaService.crearPuntosAdmin(datos);
    //         set( state => ({ clasificatoriasXJuez: [data, ...state.clasificatoriasXJuez] }));
    //         Swal.fire('Exitoso', 'Puntos Adicionados', 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },









    // agregarClasificatoria: async(dato) => {
    //     set( state => ({ clasificatoriasXJuez: [ dato, ...state.clasificatoriasXJuez ] }));
    // },

    
    


});




export const useClasificatoriaStore = create<ClasificatoriasState>()(
    devtools(
        storeApi
    )
)
