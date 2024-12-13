
import dayjs from 'dayjs';
import 'dayjs/locale/es'; 
dayjs.locale('es')



export const categoriaDeportista = (fecha: Date) => {
    const fechaNacimiento = dayjs(fecha);
    const fechaActual = dayjs();

    return fechaActual.diff(fechaNacimiento, "years");
}


export const formatearFecha = (fecha: Date) => {
    if(!fecha) return;
    return dayjs(fecha).format('DD [de] MMMM [de] YYYY');
}