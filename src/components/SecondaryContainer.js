import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard';
import {useSelector} from "react-redux";

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)
  return (
      
    <div >
      <div className=" Secondary -mt-36 relative z-20">
        <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies}/>
        <MovieList title = {"Popular"} movies = {movies.popularMovies}/>
        <MovieList title = {"Upcoming Movies"} movies = {movies.upcomingMovies}/>
        <MovieList title = {"Indie"} movies = {movies.nowPlayingMovies}/>
        <MovieList title = {"Editor's Choice"} movies = {movies.topRatedMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer
