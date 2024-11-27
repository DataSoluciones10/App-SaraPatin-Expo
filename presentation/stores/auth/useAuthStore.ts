
import { authCheckStatus, authLogin } from '@/core/actions';
import { create } from 'zustand';




export type AuthStatus = 'authenticated' | 'unauthenticated' | 'cheking';

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: any;


    login: (email:string, password:string) => Promise<boolean>;
    checkStatus: () => Promise<boolean>;
    logout: () => Promise<void>;
    changeStatus: (token?:string, user?:any) => boolean;

}



export const useAuthStore = create<AuthState>()( (set, get) => ({

    status: 'cheking',
    token: undefined,
    user: undefined,



    changeStatus: (token?:string, user?:any) => {
        if(!token || !user){
            set({status: 'unauthenticated', token: undefined, user: undefined});
            return false;
        }

        set({ status: 'authenticated', token: token, user: user });
        return true;
    },





    login: async(email:string, password:string) => {
        const resp = await authLogin({email, password});
        return get().changeStatus(resp.token, resp.user);
    },



    
    checkStatus: async() => {
        // const resp = await authCheckStatus();
        const resp = {token: undefined, user: undefined};
        return get().changeStatus(resp.token, resp.user);
    },




    logout: async() => {


        set({ status: 'unauthenticated', token: undefined, user: undefined });

    },





}))