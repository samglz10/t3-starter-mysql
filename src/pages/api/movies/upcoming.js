const handler = async (req,res) => {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`)
    const movieData = await movieResponse.json()
    console.log(movieData)
    res.status(200).json(movieData)
    
     
 }
 
 export default handler;