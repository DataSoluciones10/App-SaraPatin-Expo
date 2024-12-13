
// import { StateCreator, create } from "zustand";
// import { devtools } from "zustand/middleware";
// import { Roles } from "../../interfaces";
// import { RolesService } from "../../services";

// import Swal from "sweetalert2";






// interface RolesState {

//     activeRol: Roles | null;
//     roles: Roles[];

//     startListadoRoles: () => Promise<boolean>,
//     startCrearRol: (competencia: Roles) => Promise<boolean>,
//     startRolPorID: (id:string) => Promise<boolean>,
//     clearActiveRol: () => void,
//     startUpdateRol: (rol: Roles) => Promise<boolean>,
// }




// const storeApi: StateCreator<RolesState> = (set) => ({

//     activeRol: null,
//     roles: [],


//     startRolPorID: async(id: string) => {
//         try {
//             const data = await RolesService.rolPorID(id);
//             set({ activeRol: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },



//     clearActiveRol: async() => {
//         set({ activeRol: null });
//     },



//     startCrearRol: async(rol: Roles) => {
//         try {
//             const data = await RolesService.createRol(rol);
//             Swal.fire('Exitoso', 'Rol Creado', 'success');
//             set( state => ({ 
//                 roles: [ data, ...state.roles ]
//             }));
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },


    
//     startListadoRoles: async() => {
//         try {
//             const data = await RolesService.listadoRoles();
//             set({ roles: data });
//             return true;
//         } catch (error:any) {
//             Swal.fire('Error', error.message, 'error');
//             return false;
//         }
//     },



//     startUpdateRol: async(rol: Roles) => {
//         try {
//             const data = await RolesService.updateRol(rol);
//             Swal.fire('Exitoso', 'Rol Actualizado', 'success');
//             set( state => ({ 
//                 roles: state.roles.map( (c) => {
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





// export const useRolesStore = create<RolesState>()(
//     devtools(
//         storeApi
//     )
// )
