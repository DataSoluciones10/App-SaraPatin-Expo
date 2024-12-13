
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

import { Club } from "@/core/interfaces";
import { clubPorDirector } from "@/core/actions";







interface ClubState {

    activeClub: Club | null;
    clubes: Club[];
    isLoadingClub: boolean;
    total: number;


    startClubPorID: (id:string) => Promise<boolean>,
    startClubTodosNameId: () => Promise<boolean>,
    startCrearClub: (club: Club) => Promise<boolean>,
    clearActiveClub: () => void,
    startUpdateClub: (club: Club) => Promise<boolean>,
    startClubPorDirector: () => Promise<boolean>,
    startSubirDocumentos: (club: any) => Promise<boolean>,

}




const storeApi: StateCreator<ClubState> = (set) => ({

    activeClub: null,
    clubes: [],
    isLoadingClub: false,
    total: 0,




    clearActiveClub: async() => {
        set({ activeClub: null });
    },




    startClubPorDirector: async() => {
        try {
            set({ isLoadingClub: true });
            const data = await clubPorDirector();
            set({ clubes: data.data, isLoadingClub: false });
            return true;
        } catch (error:any) {
            set({ isLoadingClub: false });
            return false;
        }
    },




    
    startCrearClub: async(club: Club) => {
        try {
            // const data = await ClubService.createClub(club);
            // set( state => ({ 
            //     clubes: [ data, ...state.clubes ]
            // }));
            return true;
        } catch (error:any) {
            return false;
        }
    },
    


    startClubPorID: async(id: string) => {
        try {
            // const data = await ClubService.clubPorID(id);
            // set({ activeClub: data });
            return true;
        } catch (error:any) {
            return false;
        }
    },




    startClubTodosNameId: async() => {
        try {
            // const data = await ClubService.todosClubesNameId();
            // set({ clubes: data });
            return true;
        } catch (error:any) {
            return false;
        }
    },
    


    



    startUpdateClub: async(club: Club) => {
        try {
            // const data = await ClubService.updateClub(club);
            // set( state => ({ 
            //     clubes: state.clubes.map( (c) => {
            //         if(c.id === data.id){
            //             return data
            //         }
            //         return c
            //     })
            // }));
            return true;
        } catch (error:any) {
            return false;
        }
    },



    startSubirDocumentos: async(body) => {
        try {
            // const data = await ClubService.subirDocumentos(body);
            // set({ activeClub: data });
            return true;
        } catch (error:any) {
            return false;
        }
    },
    


});






export const useClubStore = create<ClubState>()(
    devtools(
        storeApi
    )
)
