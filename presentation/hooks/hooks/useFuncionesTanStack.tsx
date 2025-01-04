
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";




// await new Promise( (resolve) => setTimeout(resolve, 400));

export const useFuncionesTanStack = () => {


    const queryClient = useQueryClient();
    const [isRefreshing, setIsRefreshing] = useState(false);


    const onPullRefreshConParams = async (params:string, id:string) => {
        setIsRefreshing(true);
        await queryClient.invalidateQueries({ queryKey: [params, 'infinite', id] });
        setIsRefreshing(false);
    }



    const onPullRefresh = async (params:string) => {
        setIsRefreshing(true);
        await queryClient.invalidateQueries({ queryKey: [params] })
        setIsRefreshing(false);
    }





    return {
        // valores
        isRefreshing,

        // Metodos
        onPullRefreshConParams,
        onPullRefresh,
    }



}
