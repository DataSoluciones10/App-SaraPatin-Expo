

import { useEffect } from "react";
import { useClasificatoriaStore, usePruebasStore, useSocketStore } from "@/presentation/stores";






export const useSocketPruebas = (id:string) => {

    const { socket } = useSocketStore();
    const { listadoPruebasDeportista } = usePruebasStore();

    useEffect(() => {
        if (!socket || !id) return;
        socket?.emit('join-room', id);
        socket?.on('pruebas-categoria', (pruebas:any) => { listadoPruebasDeportista([...pruebas]) });

        return () => { socket?.off('pruebas-categoria'); };
    }, [socket])
};






export const useSocketFondoPuntos = (id:string) => {

    const { socket } = useSocketStore();
    const { datosClasificatoriaPuntos } = useClasificatoriaStore();

    useEffect(() => {
        if (!socket || !id) return;
        socket?.emit('join-room', id);
        socket?.on('prueba-puntos', (pruebas:any) => { datosClasificatoriaPuntos([...pruebas]) });

        return () => { socket?.off('prueba-puntos') };
    }, [socket, id])
};





export const useSocketPruebaGrupos = (id:string) => {

    const { socket } = useSocketStore();
    const { datosPruebasXGrupos } = useClasificatoriaStore();

    useEffect(() => {
        if (!socket || !id) return;

        socket?.emit('join-room', id);
        socket?.on('olimpica-velocidad', (pruebas:any) => { datosPruebasXGrupos([...pruebas]) });

        return () => { socket?.off('olimpica-velocidad') };
    }, [socket, id])
};