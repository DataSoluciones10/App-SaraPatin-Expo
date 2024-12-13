

import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";







interface DeportistasState {

    activeDeportista: any | null;
    deportistas: any[];
    isLoadingDeportista: boolean;
    total: number;

    
    clearActiveDeportista: () => void,
    clearListDeportistas: () => void,
    
    
    // startDeportistaXEntidad: (id:string) => Promise<boolean>,
    // startDeportistaPorID: (id:string) => Promise<boolean>,
    // startCrearDeportista: (usuario: any) => Promise<boolean>,
    // startCrearDeportistaExcel: (archivo: any) => Promise<boolean>,
    // startUpdateDeportista: (usuario: any) => Promise<boolean>,
    // startTotalDeportistas: (total: number) => void,
    // startDeportistaEliminarMasivo: (usuarios:string[]) => Promise<boolean>,
}




const storeApi: StateCreator<DeportistasState> = (set) => ({

    activeDeportista: null,
    deportistas: [],
    isLoadingDeportista: false,
    total: 0,

    

    clearActiveDeportista: async() => {
        set({ activeDeportista: null });
    },



    clearListDeportistas: async() => {
        set({ deportistas: [] });
    },
    

    startTotalDeportistas: (total:number) => {
        set({ total });
    },



    // startDeportistaPorID: async(id: string) => {
    //     try {
    //         const data = await DeportistasService.deportistaPorID(id);
    //         set({ activeDeportista: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    // startDeportistaXEntidad: async(id: string) => {
    //     try {
    //         set({ isLoadingDeportista: true });
    //         const data = await DeportistasService.deportistaXEntidad(id);
    //         set({ deportistas: data, isLoadingDeportista: false });
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingDeportista: false });
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    // startCrearDeportista: async(deportista: FormDeportista) => {
    //     try {
    //         const data = await DeportistasService.createDeportista(deportista);
    //         Swal.fire('Exitoso', 'Deportista Creado', 'success');
    //         set( state => ({ 
    //             deportistas: [ data, ...state.deportistas ]
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startCrearDeportistaExcel: async(deportistas: any) => {
    //     try {
    //         const data = await DeportistasService.createDeportistaPorExcel(deportistas);
    //         Swal.fire('Exitoso', 'Deportistas Creados', 'success');
    //         set( state => ({ 
    //             deportistas: [ ...data, ...state.deportistas ]
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // startUpdateDeportista: async(usuario: FormDeportista) => {
    //     try {
    //         const data = await DeportistasService.updateDeportista(usuario);
    //         Swal.fire('Exitoso', 'Deportista Actualizado', 'success');
    //         set( state => ({ 
    //             deportistas: state.deportistas.map( (c) => {
    //                 if(c.id === data.id){ return data }
    //                 return c
    //             })
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },





    
    // startDeportistaEliminarMasivo: async(usuarios: string[]) => {
    //     try {
    //         const data = await DeportistasService.eliminarUsuariosMultiples(usuarios);
    //         const eliminados = data.eliminados;
    //         const noeliminados = data.noEliminados;

    //         set( state => ({ 
    //             deportistas: state.deportistas.filter( (c) => !eliminados.includes(c.id))
    //         }));

    //         if(noeliminados.length > 0) {
    //             Swal.fire('Usuarios No Eliminados', noeliminados.join(', '), 'error');
    //         } else {
    //             Swal.fire('Usuarios Eliminados', 'Deportistas Eliminados Con Exito', 'success');
    //         }
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingDeportista: false });
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




});






export const useDeportistaStore = create<DeportistasState>()(
    devtools(
        storeApi
    )
)
