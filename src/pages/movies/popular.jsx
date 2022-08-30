import { useQuery } from '@tanstack/react-query'
import Image from "next/future/image"


const FetchMovies = () => {
    
   const { isLoading, error, data } = useQuery(['popular'], ()=> (
        fetch('/api/movies/popular')
        .then(res => res.json())
    )) 
    if (isLoading) {
        return (
            <h1> Popular Movies Loading...</h1>
        )
    } 
    if (error) {
        return ;
    }

    return (             
        //usequery to make onclick button to add to moviewatchlist. useQuery-tanstack doing a fetch to do a Patch request using body.{title or id}
        <main className='text-center flex-center '>
        <h1 className='font-bold text-3xl my-2.5 sticky top-0 '> Popular Movies 🍿 </h1>
            <div className='grid grid-cols-5 gap-4 rounded-3xl mx-2.5  '>
                {
                data.results.map((MovieInfo => (
                    <div className= "text-center drop-shadow-xl  flex-wrap content-around aspect-2/3 relative rounded-lg" key={MovieInfo.id}>
                        <div className="w-fit relative z-10 ">
                            <h2 className=" font-extrabold text-xl "> {MovieInfo.title}</h2>
                            <p className=" flex items-center content-center "> {MovieInfo.overview}</p>
                            <p> {MovieInfo.release_date}</p>
                            <p>{MovieInfo.movieId}</p>
                            <button type="button" onClick=""> Add to Watchlist  </button>
                            {console.log(MovieInfo.movieId)}
                        </div>
                        <Image src={`https://image.tmdb.org/t/p/w500/${MovieInfo.poster_path}`} sizes="25vw" fill alt={`poster for: ${MovieInfo.title}`} className="rounded-2xl"/>
                    </div>
                )))
            }
            </div>
    </main>
)
}


export default FetchMovies;

