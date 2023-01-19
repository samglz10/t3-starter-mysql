import { useQuery } from '@tanstack/react-query'
import Image from "next/future/image"


const UpcomingMovies = () => {
    const { isLoading, error, data } =useQuery(['search'], () => (
        fetch('/api/movies/search')
        .then((res) => res.json())
    ))
    if (isLoading) {
        return (
            <h1> Search Movies Loading...</h1>
        )
    } 
    if (error) {
    
    }

    return (             
        //usequery to make onclick button to add to moviewatchlist. useQuery-tanstack doing a fetch to do a Patch request using body.{title or id}
        <main className='text-center flex-center sm:mb-10 sm:mx-2'>
        <h1 className='font-bold text-3xl my-2.5 sticky top-0 z-20 '> Search Movies🍿 </h1>
            <div className='grid grid-cols-5 gap-4 rounded-3xl mx-2.5 drop-shadow-xl '>
            {
                data.results.map((MovieInfo => (
                    <div className= "flex flex-col text-center drop-shadow-xl flex-wrap content-around aspect-2/3 relative rounded-lg overflow-hidden transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125 hover:z-10 " key={MovieInfo.id}>
                        <div className=" flex flex-col justify-around w-fit relative text-white z-50 opacity-0 hover:opacity-100 ease-in-out delay-100 hover:-translate-y-1"> 
                            <h2 className=" font-extrabold text-xl absolute inset-x-0 top-0 my-5 "> {MovieInfo.title}</h2>
                            <p className="  "> {MovieInfo.overview}</p>
                            <p> {MovieInfo.release_date}</p>
                            <p>{MovieInfo.movieId}</p>
                        </div>
                            <div className="flex items-end place-content-around text-sm mx-px z-30 inset-x-0 bottom-0 absolute my-2 ">
                                <button  className=" rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 max-w-xs px-2.5 py-2" type="button" onClick=""> Watch Providers  </button>
                                <button  className=" rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 max-w-xs px-2.5 py-2" type="button" onClick=""> Add to Watchlist  </button>
                            </div>
                        <Image src={`https://image.tmdb.org/t/p/w500/${MovieInfo.poster_path}`} sizes="25vw" fill alt={`poster for: ${MovieInfo.title}`} className="rounded-2xl object-center  z-0  "/>
                    </div>
                )))
            }
            </div>
    </main>
    )
    }

export default UpcomingMovies;