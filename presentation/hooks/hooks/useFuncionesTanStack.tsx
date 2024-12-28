
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";





export const useFuncionesTanStack = () => {


    const queryClient = useQueryClient();
    const [isRefreshing, setisRefreshing] = useState(false);


    const onPullRefreshConParams = async (params:string, id:string) => {
        setisRefreshing(true);
        queryClient.invalidateQueries({ queryKey: [params,'inscripciones-mis-deportistas', 'infinite', id] })
        setisRefreshing(false);
    }



    const onPullRefresh = async (params:string) => {
        setisRefreshing(true);
        await new Promise( (resolve) => setTimeout(resolve, 400));
        queryClient.invalidateQueries({ queryKey: [params, 'infinite'] })
        setisRefreshing(false);
    }






    return {
        // valores
        isRefreshing,

        // Metodos
        onPullRefreshConParams,
        onPullRefresh,
    }



}
