
import { authCheckStatus, authLogin } from '@/core/actions';
import { SecureStorage } from '@/core/adapters/secure-storage';
import { create } from 'zustand';




export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: any;

    startLogin: (email:string, password:string) => Promise<boolean | any>;
    startCheckStatus: () => Promise<boolean>;
    startLogout: () => Promise<boolean>;

    changeStatus: (token?:string, user?:any) => Promise<boolean>;
}



export const useAuthStore = create<AuthState>()( (set, get) => ({

    status: 'checking',
    token: undefined,
    user: undefined,



    changeStatus: async(token?:string, user?:any) => {
        if(!token || !user){
            set({status: 'unauthenticated', token: undefined, user: undefined});
            await SecureStorage.deleteItem('token');
            return false;
        }

        set({ status: 'authenticated', token: token, user: user });
        await SecureStorage.setItem('token', token);
        return true;
    },





    startLogin: async(correo:string, password:string) => {
        try {
            const { token, usuario } = await authLogin({correo, password});
            return get().changeStatus(token, usuario);
        } catch (error:any) {
            // const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
            throw new Error(error);
        }
    },




    
    startCheckStatus: async() => {
        const resp = await authCheckStatus();
        if( !resp ){
            return get().changeStatus(undefined, undefined);
        }
        return get().changeStatus(resp.token, resp.usuario);
    },





    startLogout: async() => {
        await SecureStorage.deleteItem('token');
        set({ status: 'unauthenticated', token: undefined, user: undefined });
        return false; 
    },



}))