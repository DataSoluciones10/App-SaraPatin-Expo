
import { deportistasApi } from "@/core/apis";



const emptyDeportista = {
    nombre: '',
    tipo_documento: '',
    cedula: '',
    correo: '',
    movil: '',
    club: '',
    departamento: '',
    ciudad: '',
    rama: '',
    patin: '',
    fechaNacimiento: '',
    peso: '',
    talla: '',
    eps: '',
    informacion: '',
}


export const deportistaPorID = async(id:string):Promise<any> => {
    if(id === 'new') return emptyDeportista;
    try {
        const { data } = await deportistasApi.get<any>(`/xid/${id}`);
        const { deportista:valor, ...user } = data.data;
        const datos = {
            ...user,
            rama: valor.rama,
            patin: valor.patin,
            talla: valor.talla.toString(),
            peso: valor.peso.toString(),
            eps: valor.eps,
            fechaNacimiento: valor.fechaNacimiento,
        }
        return datos || null;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}





export const listadoMisDeportistas = async({ page=0, termino='' }):Promise<any> => {
    try {
        const params = new URLSearchParams();
        params.append('page',  page.toString());
        params.append('termino',  termino);

        const { data } = await deportistasApi.get<any>('/xadmin', { params });
        return data.data;
    } catch (error: any) {
        const errores = error.response.data['msg'] || error.response.data.errors[0]['msg'];
        throw new Error(errores);
    }
}