import { API_OPTION } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';


const useNowPlayingMovies = () =>{
  const dispatch = useDispatch();

  const playingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTION
    );
    
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  };

  useEffect(()=>{
    playingMovies();
  },[])
};

export default useNowPlayingMovies;
