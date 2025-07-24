import React, { } from 'react'
import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movie_id}) => {

    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    useMovieTrailer(movie_id);
  return (
    <div className = "">
      <iframe
      className = "w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1"+{allow:'autoplay'}}
      title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground


