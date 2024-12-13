

import { ciudadesApi } from '@/core/apis';
import { Ciudad, CiudadesResp, Region, RegionesResp } from '@/core/interfaces';








export const listadoCiudades = async(region: string):Promise<Ciudad[]> => {
    try {
        const { data } = await ciudadesApi.get<CiudadesResp>(`/region?region=${region}`);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}





export const listadoRegiones = async():Promise<Region[]> => {
    try {
        const { data } = await ciudadesApi.get<RegionesResp>(`/regiones`);
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}

