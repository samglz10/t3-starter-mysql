const handler = async (req,res) => {

//according to API database
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${process.env.API_KEY}`)
    const movieProviders = await movieResponse.json()
    console.log(movieProviders)
    res.status(200).json(movieProviders)
    
     
 }
 
 export default handler;