
import { useQuery } from '@tanstack/react-query';
import { categoriaTemporadaXID } from '@/core/actions';







export const useCategoriaTemporadaXId = (id:string) => {


    const categoriaTemporadaQueryId = useQuery({
        queryKey: ['categoria-tem-id', id],
        queryFn: () => categoriaTemporadaXID(id),
        staleTime: 1000 * 60 * 60,
    });






    return {
        categoriaTemporadaQueryId,
    }
}






