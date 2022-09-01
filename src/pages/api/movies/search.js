const handler = async (req,res) => {
    //trying to fetch movie by the title but first with an id
   // how to get theses movies https://developers.themoviedb.org/3/getting-started/append-to-response
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/?api_key=${process.env.API_KEY}&query=${title}`)
    const movieData = await movieResponse.json()
    console.log(movieData)
    res.status(200).json(movieData)

}
 
 export default handler;