import { useQuery } from '@tanstack/react-query'
import Image from "next/future/image"

const MoviesWatchlist = () => {
    
   const { isLoading, error, data } = useQuery(['watchlist'], ()=> (
        fetch('/api/watchlist')
        .then(res => res.json())
    )) 
    if (isLoading) {
        return (
            <h1> My Movie List is Loading...</h1>
        )
    } 
    if (error || !data) {
        return (
            <h1> No movies here... 😢 </h1>
        );

    } 
// PATCH - DO LIKE ABOVE EXCEPT FETCH WILL BE TO - https://postsrc.com/code-snippets/how-to-make-patch-request-with-fetch-api
    return (

        <main className="grid grid-cols-4 gap-4">
           {
             data.map((MovieInfo => (
                <div className= "text-center drop-shadow-xl border aspect-2/3 border-black "key={MovieInfo.id}>
                    <h1 className=" font-extrabold  text-xl">  {MovieInfo.title}</h1>
                    <h2 className="min-w-50 min-h-20 flex items-center justify-center flex-wrap text-center scroll-smooth md:scroll-auto mx-5 my-5">{MovieInfo.overview}</h2>
                    <h3> {MovieInfo.release_date}</h3>
                    <h3>{MovieInfo.backdrop_path}</h3>
                    <button type="button"> Remove from  Watchlist </button>
                    <Image src={`https://image.tmdb.org/t/p/w500/${MovieInfo.poster_path}`} sizes="25vw" fill alt={`poster for: ${MovieInfo.title}`} className="rounded-2xl object-center  z-0 "/>
                </div>
                
            )))
           }
        </main>
    )
}


export default MoviesWatchlist;