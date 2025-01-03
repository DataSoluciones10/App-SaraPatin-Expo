
import { inscripcionApi, temporadaApi } from "@/core/apis";
import { useInscripcionStore } from "@/presentation/stores";








export const confirmarTemporada = async(temporada:any):Promise<any> => {
    try {
        const [data, data2] = await Promise.all([
            temporadaApi.post<any>('/confirmar', temporada),
            inscripcionApi.post<any>('/ids/inscritos', temporada)
        ]);
        useInscripcionStore.setState({idsInscripciones: data2.data.data});
        return data.data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}




    // static createTemporada = async(temporada:any):Promise<any> => {
    //     try {
    //         const { data } = await temporadaApi.post<any>('/', temporada);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }




    // static updateTemporada = async(temporada: any):Promise<any> => {
    //     try {
    //         const { data } = await temporadaApi.put<any>(`/${temporada.id}`, temporada);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }



    // static listTemporadasXCompetencia = async(id:string):Promise<any[]> => {
    //     try {
    //         const { data } = await temporadaApi.get<any>(`/competencia/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }



    // static updateTemporadaSetting = async(temporada: any):Promise<any> => {
    //     try {
    //         const { data } = await temporadaApi.post<any>(`/setting`, temporada);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }