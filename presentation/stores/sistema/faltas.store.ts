
// import { StateCreator, create } from "zustand";
// import { devtools } from "zustand/middleware";
// import { FaltasService } from "../../services";

// import Swal from "sweetalert2";
// import { usePruebasStore } from "../competencia/pruebas_store";






// interface FaltasState {

//     activeFalta: any;
//     faltas: any[];

//     clearActiveFalta: () => void,
//     clearListadoFaltas: () => void,
//     startListadoFaltas: () => Promise<boolean>,
//     startFaltaPorID: (id:string) => Promise<boolean>,
//     startSavingFalta: (falta: any) => Promise<boolean>,
//     startagregarFaltasXPrueba: (falta: any) => Promise<boolean>,
//     startEliminarFaltaPrueba: (falta: any) => Promise<boolean>,
// }




// const storeApi: StateCreator<FaltasState> = (set) => ({

//     activeFalta: null,
//     faltas: [],




//     clearActiveFalta: async() => {
//         set({ activeFalta: null });
//     },


//     clearListadoFaltas: async() => {
//         set({ faltas: [] });
//     },



//     startFaltaPorID: async(id:string) => {
//         try {
//             const data = await FaltasService.faltaPorID(id);
//             set({ activeFalta: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },




//     startListadoFaltas: async() => {
//         try {
//             const data = await FaltasService.listadoFaltas();
//             set({ faltas: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },



//     startSavingFalta: async(falta: any) => {
//         try {
//             if( falta.id ) {
//                 const data = await FaltasService.updateFalta(falta);
//                 Swal.fire('Exitoso', 'Falta Actualizada', 'success');
//                 set( state => ({ 
//                     faltas: state.faltas.map( (c) => {
//                         if(c.id === data.id){ return data }
//                         return c
//                     })
//                 }));
//             } else {
//                 const data = await FaltasService.createFalta(falta);
//                 Swal.fire('Exitoso', 'Falta Creada', 'success');
//                 set( state => ({ faltas: [ data, ...state.faltas ] }));
//             }
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },




//     startagregarFaltasXPrueba: async(faltas: any) => {
//         try {
//             const data = await FaltasService.agregarFaltasXPrueba(faltas);
//             Swal.fire('Exitoso', `${(faltas.falta.length > 1) ? 'Faltas Creadas.' : 'Falta Creada.'}`, 'success');
//             usePruebasStore.setState({ activePrueba: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },

    


//     startEliminarFaltaPrueba: async(falta: any) => {
//         try {
//             const data = await FaltasService.eliminarFaltaPrueba(falta);
//             Swal.fire('Exitoso', 'Falta Eliminada', 'success');
//             usePruebasStore.setState({ activePrueba: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },


// });





// export const useFaltasStore = create<FaltasState>()(
//     devtools(
//         storeApi
//     )
// )
