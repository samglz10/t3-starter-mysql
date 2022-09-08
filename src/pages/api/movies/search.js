const handler = async (req,res) => {

    const { searchTerm } =req.query

    const movieResponse = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${process.env.API_KEY}&query=${searchTerm}&page=1&include_adult=false`)
    const movieData = await movieResponse.json()
    //running undefined status
    res.status(200).json(movieData)
    console.log(movieResponse)

}

export default handler;
 