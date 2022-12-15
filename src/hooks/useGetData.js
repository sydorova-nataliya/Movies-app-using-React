import { useEffect, useState } from "react";
import { setMovies } from "../store/movies/actions";

const useGetData=(url)=>{
    // const [loading, setLoading] = useState(false);
    useEffect(()=>{
        // setLoading(true);
    fetch(url)
        .then(res=>res.json())
        .then(data=>{setMovies(data)})

        // .finally(()=> setLoading(false))
    },[])

}
export default useGetData;