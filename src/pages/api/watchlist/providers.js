const handler = async (req,res) => {

    const{ movieId } = req.query

    //according to API database
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${process.env.API_KEY}`)
    const movieProviders = await movieResponse.json()
    res.status(200).json(movieProviders)

    
 }
 
 export default handler;