import GptBackground from "../utils/images/GptBackground.png";

const GptSearchBar = () => {
  return (
    <div>
        <div className="absolute">
        
        </div>
        <div className =" pt-[10%] relative flex justify-center">
            <form className="p-6 w-1/2 bg-black grid grid-cols-12">
                <input type="text" placeholder="Search your movie"
                className=" col-span-8 py-2  mx-4  "></input>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 m-4 rounded-full 
                       hover:from-blue-500 hover:to-purple-500 transition-all duration-500 ease-in-out col-span-4">Search</button>
            </form>
        </div>
    </div>


  )
}

export default GptSearchBar
