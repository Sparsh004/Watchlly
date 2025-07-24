
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';


const useMovieTrailer = (movie_id) => {
  
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    // fetch the trailer running in the background and update the store with the trailer video data

    const dispatch = useDispatch();

    const getMovieVideos = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",API_OPTION);

        const json = await data.json();
        console.log(json);

        const trailers = json.results.filter((video) => video.type === "Trailer")
        const mainTrailer = trailers.length ? trailers[0] : json.results[0];
        console.log(mainTrailer);
        dispatch(addTrailerVideo(mainTrailer));
        
        
    };

    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer
