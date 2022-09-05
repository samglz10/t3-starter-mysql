const handler = async (req,res) => {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/?api_key=${process.env.API_KEY}&query=[super]`)
    const movieData = await movieResponse.json()
    //running undefined status
    res.status(200).json(movieData)

}

 export default handler;
 