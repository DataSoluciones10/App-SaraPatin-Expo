

import { useEffect } from "react";
import { useCategoriasTemporadaStore, useSocketStore } from "@/presentation/stores";






export const useSocketCategoriaTemporada = (id:string) => {

    const { socket } = useSocketStore();
    const { startActivarCategoriaTem } = useCategoriasTemporadaStore();


    useEffect(() => {
        if (!socket || !id) return;
        console.log('me ejecute')
        socket?.emit('join-room', id);
        socket?.on('competir-update', (data:any) => { startActivarCategoriaTem(data) });
        
        return () => { socket?.off('competir-update') };
    }, [socket, id]);

};

