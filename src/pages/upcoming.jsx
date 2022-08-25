import { useQuery } from '@tanstack/react-query'


const UpcomingMovies = () => {
    const { isLoading, error, data } =useQuery(['upcoming'], () => (
        fetch('api/movies/upcoming')
        .then ((res) => res.json())
    ))
    if (isLoading) {
        return (
            <h1> Upcoming Movies Loading...</h1>
        )
    } 
    if (error)
    return;



    
    return (
        <main>
           {
             data.results.map((MovieInfo => (
                <div className= "text-center drop-shadow-xl border "key={MovieInfo.id}>
                    <h1 className=" font-extrabold  text-xl"> Fetch Upcoming: {MovieInfo.title}</h1>
                    <h2 className="">Overview: {MovieInfo.overview}</h2>
                </div>
            )))
           }
        </main>
    )
}

export default UpcomingMovies;