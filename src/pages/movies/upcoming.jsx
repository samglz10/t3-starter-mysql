import { useQuery } from '@tanstack/react-query'
import Image from "next/future/image"



const UpcomingMovies = () => {
    const { isLoading, error, data } =useQuery(['upcoming'], () => (
        fetch('/api/movies/upcoming')
        .then((res) => res.json())
    ))
    if (isLoading) {
        return (
            <h1> Upcoming Movies Loading...</h1>
        )
    } 
    if (error) {
    
    }

    return (             
        //usequery to make onclick button to add to moviewatchlist. useQuery-tanstack doing a fetch to do a Patch request using body.{title or id}
        // add this to z-50 div for text visibility text-white opacity-0 hover:opacity-100 ease-in-out delay-100 hover:-translate-y-1
        <main className='text-center flex-center sm:mb-10 sm:mx-2 '>
        <h1 className='font-bold text-3xl my-2 sticky top-0 '> Upcoming Movies 🍿 </h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 rounded-3xl mx-2.5 drop-shadow-xl'>
                {data.results.map((MovieInfo => (
                    <div className= " font-sans flex flex-col text-center drop-shadow-xl flex-wrap content-around aspect-2/3 relative rounded-lg overflow-hidden transition ease-in-out delay-100 hover:-translate-y-1 md:hover:scale-110 hover:z-10 " key={MovieInfo.id}>
                        <div className=" flex flex-col justify-around w-fit relative text-white z-40 hover:backdrop-blur-sm hover:grayscale h-full opacity-0 hover:opacity-100 ease-in-out delay-100 hover:-translate-y-1 "> 
                            <h2 className=" font-extrabold text-base absolute inset-x-0 top-0 my-5 bg "> {MovieInfo.title}</h2>
                            <p className=" text-white text-sm h-fit overflow-y-auto overflow-hidden text-center mx-5 mt-32 drop-shadow-2xl bg-stone-900/80 rounded-lg px-2 py-2 "> {MovieInfo.overview}</p>
                            <p className="my-12 font-bold bg-stone-900/80"> Release Date: {MovieInfo.release_date}</p>
                        </div>
                            <div className="flex items-end place-content-around text-sm mx-px z-50 inset-x-0 bottom-0 absolute my-2  ">
                                <button  className=" rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 max-w-xs px-2.5 py-1 z-50 md:filter-none cursor-pointer" type="button" onClick=''> Watch Providers  </button>
                                <button  className=" rounded-full bg-gradient-to-r text-white from-purple-500 to-pink-500 max-w-xs px-2.5 py-1 z-50 md:filter-none cursor-pointer" type="button" onClick=''> Add to Watchlist  </button>
                            </div>
                        <Image src={`https://image.tmdb.org/t/p/w500/${MovieInfo.poster_path}`} sizes="25vw" fill alt={`poster for: ${MovieInfo.title}`} className="rounded-2xl object-center hover:z-0 hover:grayscale "/>
                    </div>
                )))
            }
            </div>
    </main>
    )
    }

export default UpcomingMovies;