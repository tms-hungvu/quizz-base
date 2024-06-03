import useSWR from "swr";
import { useCallback, useEffect, useMemo, useState } from "react";

import { isArray, isEmpty } from "lodash";

export function useSwr<T, K = T>(
  url: string,
  key: keyof T,
  fetchOptions?: any
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const fetcher = useCallback(async (fetchService : any) => {
    setIsLoading(true);
    const response = await fetchService();
    setIsLoading(false);
    return  response;
  }, []);



  const { data, error, isValidating, mutate } = useSWR(url, fetcher, {
    fetchOptions,
  } as any);

   useEffect(() => {
        if (isValidating) {
            setIsLoading(true)
        }  setTimeout(function(){
            setIsLoading(false)
        }, 500)
    },[isValidating])
  


  const create = useCallback(
    async (serviceCreate : any , newItem: K, shouldRevalidate = false) => {
        setIsLoading(true);
        const response = await serviceCreate(newItem);
        const result =  response ;
        if (data && mutate) {
            let newData : any= data
            if (isArray(data)) {
                newData = [...data, result]
            }
            await mutate(newData, shouldRevalidate)
        }
        setIsLoading(false);
        return result;
    }, [url, data, mutate]);


    const update = useCallback(async (serviceUpdate : any, updatedItem: any, shouldRevalidate = false): Promise<T> => {


        setIsLoading(true);

        const response = await serviceUpdate(updatedItem , Number(updatedItem.id) );
        const result : any =  response ;
       
        if (data && mutate) {
            let newData : any = data
            if (isArray(data)) {
                newData = data.map((item) => {
                    if(item.id == result.id){
                        return result;
                    }else {
                        return item;
                    }
                })
            }
            await mutate(newData, shouldRevalidate);
        }
        setIsLoading(false);
        return result;
    }, [url, data, mutate, key])
  


    const remove = useCallback(async (serviceDelete: any, shouldRevalidate = false,  id : string | number): Promise<T> => {


        setIsLoading(true);
        const response = await serviceDelete(id);
       
        const result =  response.data ;
       
        if (data && mutate) {
            let newData : any = data
            if (isArray(data)) {
                newData = data.filter(item => item.id != id)
            }
            await mutate(newData, shouldRevalidate);
        }
        setIsLoading(false);
        return result;
    }, [url, data, mutate, key])
    
    const memoizedData = useMemo(() => (!isEmpty(data) ? data : []), [data])

    return {
        remove,
        update,
        create,
        fetcher : { data: memoizedData, error, loading : isLoading, mutate },

    }
}
