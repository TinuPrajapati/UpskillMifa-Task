import { useState,useEffect,useCallback } from "react";

const useFetch =(url)=>{
    const [data,setData] = useState([]); 
    const [loading,setLoading] = useState(false); 
    const [error,setError] = useState(null); 
    
    const apiData = useCallback(async ()=>{
        setLoading(true);
        try{
            const value = await fetch(url);
            if(!value.ok){
                throw new Error(value.status);
            }
            const res = await value.json();
            setData(res);
        }catch(err){
            if(err.message == 404){
               return setError('404 page not Found')
            }
            setError(err.message)
        }finally{
            setLoading(false)
        }
    },[url]);

    useEffect(()=>{
        apiData()
    },[apiData])

    return {data,loading,error}
};

export default useFetch;