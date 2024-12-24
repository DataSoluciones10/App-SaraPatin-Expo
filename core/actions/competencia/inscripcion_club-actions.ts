

// import { useInscripcionClubStore } from '../../store';
import { inscripcionClubApi } from "@/core/apis";








export const misIncripciones = async():Promise<any> => {
    try {
        const { data } = await inscripcionClubApi.get<any>('/me');
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}




    
    // static incripcionesXClubXId = async(id:string):Promise<any> => {
    //     try {
    //         const { data } = await inscripcionClubApi.get<any>(`/xid/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }




    // static listadoClubXTemporadaXPatin = async({page, termino, id}:any):Promise<any[]> => {
    //     try {
    //         const params = new URLSearchParams();
    //         params.append('page',  page.toString());
    //         params.append('termino',  termino);
    //         params.append('id',  id);
    //         const { data } = await inscripcionClubApi.get<any>(`/temporada/patin`, {params});
    //         useInscripcionClubStore.setState({ totalInsClubes: data.total });
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data.errors[0]['msg'] || error.response.data['msg'];
    //         throw new Error(errores);
    //     }
    // }




    // static inscripcionesClubesXFase = async(id:string):Promise<any> => {
    //     try {
    //         const { data } = await inscripcionClubApi.get<any>(`/clubes/fase/${id}`);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }


    

    // static filtroInscripciones = async(body:any):Promise<any> => {
    //     try {
    //         const { data } = await inscripcionClubApi.post<any>(`/filtros/inscripciones`, body);
    //         return data.data;
    //     } catch (error: any) {
    //         const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
    //         throw new Error(errores);
    //     }
    // }

    