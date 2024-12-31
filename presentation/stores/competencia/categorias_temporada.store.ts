
import { categoriaTemporadaXID } from "@/core/actions";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
// import { useSocketStore } from "../sistema/sockets.store";







interface CategoriasTemporadaState {

    activeCategoriaTemporada: any | null;
    categoriasTemporada: any[];
    isLoadingCategoriaTemporada: boolean,
    total: number;
    
    
    // startCategoriasXArbitro: (datos:any) => Promise<boolean>,
    // startCategoriasXTemporada: (id:string) => Promise<boolean>,
    // startActiveTipoPatin: (categoria: any) => Promise<boolean>,
    // startCerrarFaseXPatin: (temporada: any) => Promise<boolean>,
    // actualizarCategoriaXNumeracion: (dato:any) => Promise<any>,
    // startActivarPrueba: (prueba: any) => Promise<boolean>,
    // actualizarCategoriaTemporada: (dato:any) => Promise<any>,
    // startActivarCategoriaTem: (data:any) => void,
    categoriasXPatinXTipoCompetencia: (id:string) => Promise<any[]>,
}




const storeApi: StateCreator<CategoriasTemporadaState> = (set) => ({

    activeCategoriaTemporada: null,
    categoriasTemporada: [],
    isLoadingCategoriaTemporada: false,
    total: 0,
    
    


    // startActivarCategoriaTem: (data: any) => {
    //     set({ activeCategoriaTemporada: data });
    // },



    // startCategoriasXArbitro: async(datos) => {
    //     try {
    //         const data = await CategoriaTemporadaService.categoriaTemporadaXArbitro(datos);
    //         set({ activeCategoriaTemporada: data, isLoadingCategoriaTemporada: false });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    

    // startActiveTipoPatin: async(categoria: any) => {
    //     try {
    //         const data = await CategoriaTemporadaService.activarTipoPatin(categoria);
    //         set( state => ({ 
    //             categoriasTemporada: state.categoriasTemporada.map( (c) => {
    //                 if(c.id === data.id) return data;
    //                 return c
    //             }),
    //         }));
    //         Swal.fire('Exitoso', `Patin ${data.titulo} ${(data.estado) ? 'Activado' : 'Desactivado'}`, 'success');
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },

    


    // startCategoriasXTemporada: async(id:string) => {
    //     set({ isLoadingCategoriaTemporada: true });
    //     try {
    //         const data = await listadoCategoriaTemporada(id);
    //         set({ categoriasTemporada: data, isLoadingCategoriaTemporada: false });
    //         return true;
    //     } catch (error:any) {
    //         set({ isLoadingCategoriaTemporada: false });
    //         return false;
    //     }
    // },




    // startCerrarFaseXPatin: async(temporada: any) => {
    //     try {
    //         const data = await CategoriaTemporadaService.cerrarFase(temporada);
    //         Swal.fire('Exitoso', `Fase ${generarTituloCategoriaTemporada(temporada.fases)} Cerrada Con Exito.`, 'success');
    //         set( state => ({ 
    //             categoriasTemporada: state.categoriasTemporada.map( (c) => {
    //                 if(c.id === data.id) return data;
    //                 return c
    //             }),
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },




    // actualizarCategoriaXNumeracion: async(dato: any) => {
    //     try {
    //         set( state => ({ 
    //             categoriasTemporada: state.categoriasTemporada.map( (c) => {
    //                 if(c.id === dato.id) return dato;
    //                 return c
    //             }),
    //         }));
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    // actualizarCategoriaTemporada: async(dato: any) => {
    //     try {
    //         const data = await CategoriaTemporadaService.actualizarCategoriaTem(dato);
    //         Swal.fire('Exitoso', `Fase Actualizada`, 'success');
    //         set({ activeCategoriaTemporada: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },
    

    

    // startActivarPrueba: async(prueba: any) => {
    //     try {
    //         const data = await CategoriaTemporadaService.activarPruebaTemporada(prueba);
    //         Swal.fire('Exitoso', `Prueba ${prueba.prueba} Activa`, 'success');
    //         const { socket } = useSocketStore.getState();
    //         socket?.emit('update-competir', { data });
    //         set({ activeCategoriaTemporada: data });
    //         return true;
    //     } catch (error:any) {
    //         Swal.fire('Error', error.message, 'error');
    //         return false;
    //     }
    // },



    
    categoriasXPatinXTipoCompetencia: async(id:string) => {
        const data = await categoriaTemporadaXID(id);
        if ( !data ) return [];

        const categorias:any = {
            LIGA: {
                SEMIPROFESIONAL: ['4', '5', '6' ,'7', '8', '9', '10', '11', '12', '13', '14', '15-16-17', 'master'],
                NOVATOS: ['7', '8', '9', '10', '11', '12', '13', 'prejuvenil', 'juvenil', 'master'],
                LIGADOS: ['7', '8', '9', '10', '11', '12', '13', 'prejuvenil', 'juvenil', 'mayores'],
            },
            FESTIVAL: {
                default: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18+'],
            },
            CLASIFICATORIA: {
                default: ['5-6', '7-8', '9-10', '11-12', '13-14', '15+'],
            }
        };

        const tipoCompetencia = categorias[data?.competencia?.tipo_competencia];
        if ( !tipoCompetencia ) return [];

        return tipoCompetencia[data.titulo] || tipoCompetencia.default;
    },



});




export const useCategoriasTemporadaStore = create<CategoriasTemporadaState>()(
    devtools(
        storeApi
    )
)
