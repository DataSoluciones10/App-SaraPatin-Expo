
import { inscripcionApi, temporadaApi } from "@/core/apis";







export const temporadaIsAbierta = async(temporada:any):Promise<any> => {
    try {
        const [data, data2] = await Promise.all([
            temporadaApi.post<any>('/confirmar', temporada),
            inscripcionApi.post<any>('/ids/inscritos', temporada)
        ]);
        return {data: data.data.data, data2: data2.data.data };
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}
