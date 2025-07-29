import { useDispatch } from "react-redux"
import { API_OPTION } from "../utils/constant";
import { addUpcomingMoives } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {
  
    const dispatch = useDispatch();

    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
            API_OPTION
        );

        const json =await data.json();
   
        dispatch(addUpcomingMoives(json.results));

    };

    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;
