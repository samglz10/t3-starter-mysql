const handler = async (req,res) => {
    //trying to fetch movie by the title but first with an id
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`)
    const movieData = await movieResponse.json()
    console.log(movieData)
    res.status(200).json(movieData)

}

 
 export default handler;