import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-80 px-16  absolute text-white bg-gradient-to-r from-black">
      <h1 className ="py-5 text-4xl font-bold">{title}</h1>
      <p className = "py-3 text-xl font-serif w-1/2">{overview}</p>
      <div className ="">
        <button className = "bg-white border-white border-2 text-black text-xl px-10 py-2 mr-4 rounded-sm hover:bg-opacity-80">▶️ Play</button>
        <button className = "bg-black border-white border-2 text-white text-lg  px-10 py-2 mr-4 bg-opacity-60  hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
