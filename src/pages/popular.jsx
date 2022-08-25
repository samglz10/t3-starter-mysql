import { useQuery } from '@tanstack/react-query'


const FetchMovies = () => {
    
   const { isLoading, error, data } = useQuery(['popular'], ()=> (
        fetch('/api/movies/popular')
        .then(res => res.json())
    )) 
    if (isLoading) {
        return (
            <h1> Loading...</h1>
        )
    } 
    if (error) {
        return ;
    }


    return (
        <main>
           {
             data.results.map((MovieInfo =>(
                <div className= "text-center drop-shadow-xl border "key={MovieInfo.id}>
                    <h1 className=" font-extrabold  text-xl"> Fetch Upcoming: {MovieInfo.title}</h1>
                    <h2 className="">Overview: {MovieInfo.overview}</h2>
                    <h3> {MovieInfo.release_date}</h3>
                    <h3>{MovieInfo.backdrop_path}</h3>
                </div>
            )))
           }
        </main>
    )
}


export default FetchMovies;

