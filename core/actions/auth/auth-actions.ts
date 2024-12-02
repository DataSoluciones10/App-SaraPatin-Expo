
import { authApi } from "@/core/apis";




export const authLogin = async(body:any) => {
    try {
        const { data } = await authApi.post<any>('/login', body);
        return data
    } catch (error) {
        console.log(error)
        return false;
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