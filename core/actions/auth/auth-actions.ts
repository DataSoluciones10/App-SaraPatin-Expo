
import { authApi } from "@/core/apis";




export const authLogin = async(body:any) => {
    try {
        const { data } = await authApi.post<any>('/login', body);
        return data
    } catch (error:any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}





export const authCheckStatus = async() => {
    try {
        const { data } = await authApi.get<any>('/renew');
        return data;
    } catch (error) {
        return null;
    }
}