
import { authCheckStatus, authLogin } from '@/core/actions';
import { SecureStorage } from '@/core/adapters/secure-storage';
import { create } from 'zustand';




export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: any;


    startLogin: (email:string, password:string) => Promise<boolean>;
    startCheckStatus: () => Promise<boolean>;
    startLogout: () => Promise<void>;

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
        const { token, usuario } = await authLogin({correo, password});
        return get().changeStatus(token, usuario);
    },



    
    startCheckStatus: async() => {
        const resp = await authCheckStatus();
        if( !resp ){
            set({ status:'unauthenticated', token:undefined, user:undefined });
            return false;
        }
        return get().changeStatus(resp.token, resp.usuario);
    },



    startLogout: async() => {
        await SecureStorage.deleteItem('token');
        set({ status: 'unauthenticated', token: undefined, user: undefined });
    },



}))