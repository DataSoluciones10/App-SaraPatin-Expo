
// import { StateCreator, create } from "zustand";
// import { devtools } from "zustand/middleware";

// import Swal from "sweetalert2";
// import { ConfiguracionClubService } from "../../services";







// interface ConfiguracionesClubState {

//     activeConfiguracionClub: any;
//     configuracionesClub: any;
//     cargarConfiguraciones: boolean;


//     startListadoMisConfiguraciones: () => Promise<boolean>,
//     startCrearConfiguraciones: (body: any) => Promise<boolean>,
//     starActiveConfiguracion: (body: any) => void,
//     startUpdateConfiguraciones: (body: any) => Promise<boolean>,

// }




// const storeApi: StateCreator<ConfiguracionesClubState> = (set) => ({

//     activeConfiguracionClub: null,
//     configuracionesClub: [],
//     cargarConfiguraciones: false,




//     starActiveConfiguracion: async(body: any) => {
//         set({ activeConfiguracionClub: body });
//     },



//     startListadoMisConfiguraciones: async() => {
//         try {
//             set({ cargarConfiguraciones: true });
//             const data = await ConfiguracionClubService.listadoMisConfiguraciones();
//             set({ configuracionesClub: data, cargarConfiguraciones: false });
//             return true;
//         } catch (error:any) {
//             set({ cargarConfiguraciones: false });
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },



//     startCrearConfiguraciones: async(body) => {
//         try {
//             const data = await ConfiguracionClubService.crearConfiguraciones(body);
//             Swal.fire('Exitoso', 'Configuración Creada', 'success');
//             set( state => ({ 
//                 configuracionesClub: [ data, ...state.configuracionesClub ]
//             }));
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },




//     startUpdateConfiguraciones: async(body) => {
//         try {
//             const data = await ConfiguracionClubService.actualizarConfiguracion(body);
//             Swal.fire('Exitoso', 'Configuración Actualizada', 'success');
//             set( state => ({ 
//                 configuracionesClub: state.configuracionesClub.map( (c:any) => {
//                     if(c.id === data.id){
//                         return data
//                     }
//                     return c
//                 })
//             }));
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },





// });





// export const useConfiguracionClubStore = create<ConfiguracionesClubState>()(
//     devtools(
//         storeApi
//     )
// )
