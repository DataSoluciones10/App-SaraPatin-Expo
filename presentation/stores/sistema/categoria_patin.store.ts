
// import { StateCreator, create } from "zustand";
// import { devtools } from "zustand/middleware";
// import { CategoriaPatinService } from "../../services";

// import Swal from "sweetalert2";







// interface CategoriaPatinState {

//     activeCategoriaPatin: any;
//     categoriasPatin: any;


//     startListadoCategoriaPatin: () => Promise<boolean>,
//     // startListadoRegiones: () => Promise<boolean>,

// }




// const storeApi: StateCreator<CategoriaPatinState> = (set) => ({

//     activeCategoriaPatin: null,
//     categoriasPatin: [],



//     startListadoCategoriaPatin: async() => {
//         try {
//             const data = await CategoriaPatinService.listadoCategoriaPatin();
//             set({ categoriasPatin: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },



// });





// export const useCategoriaPatinStore = create<CategoriaPatinState>()(
//     devtools(
//         storeApi
//     )
// )
