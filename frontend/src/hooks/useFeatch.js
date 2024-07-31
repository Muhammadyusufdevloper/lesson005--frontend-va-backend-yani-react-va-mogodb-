import { useState,useEffect} from "react";
import axios from "../api";

const useFetch = (api,...res)=>{
    const [data,setData] = useState(null)
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState(null)
    useEffect(()=>{
        setLoading(true)
        axios
            .get(api)
            .then(res => setData(res.data))
            .catch(err => setError(err.response.data))
            .finally(() =>setLoading(false))
    }, [...res])
    return {data,loading,error}
}
export default useFetch