import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import GptBackground from "../utils/images/GptBackground.png";

const GptSearch = () => {

    
  return (
    <div >
        <img src={GptBackground} alt="Gpt-Bg" className ="w-screen absolute -z-10"></img>
        <div className="relative " >
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    </div>

  )
}

export default GptSearch
