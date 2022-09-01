import React from "react";
import { useQuery } from '@tanstack/react-query'

function SearchBar () {

    const { isLoading, error, data } = useQuery(['search'], ()=> (
        fetch('/api/movies/search')
        .then(res => res.json())
    )) 
    if (isLoading) {
        return (
            <input className=" max-w-lg text-center text-black " type="search"  placeholder="Search movies here..."/>
        )
    } 
    if (error) {
        return (
            <input className=" max-w-lg text-center text-black " type="search"  placeholder="Search movies here..."/>
        );
    } 

    return (
// https://api.themoviedb.org/3/search/movie?api_key={//this query works when searched}&query=super&include_adult=false
        <div>
             <input className=" max-w-lg text-center text-black " value={data} type="search"  placeholder="Search movies here..."/>
             <button onClick={
                data.results.map((((MovieInfo => (
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
                ))))) }>
                
            </button>
        </div>
    )
    console.log(data)
 }


export default SearchBar;
