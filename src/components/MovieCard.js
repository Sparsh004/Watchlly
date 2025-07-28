import { IMG_CDN_URL } from "../utils/constant"

const MovieCard = ({posterPath}) => {

    
  return (
    <div className="w-32 pr-4">
       <img alt="Movie Card"
        src={IMG_CDN_URL+ posterPath}      
       ></img>
    </div>
  )
}

export default MovieCard
