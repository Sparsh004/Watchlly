
import MovieCard from './MovieCard';


const MovieList = ({title,movies}) => {
    console.log(movies)

    if(movies ==null) return;    

  return (
    <div className=" hideBar p-4 overflow-x-auto scroll-mx-0">
        <h1 className="font-bold text-2xl py-2 text-white">{title}</h1>
        <div className="flex">
            <div className="flex">
                {/* always do movies?. because if the movies is null it will not render and say movies.map is reading null  */}
                 { movies?.map((movies) => <MovieCard key={movies.id} posterPath={movies.poster_path}/> )}
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
