 
 export async function  getServerSideProps({params}){
    
    const {id} = params
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
    const data = await response.json()
    return {
        props: {
            data
        }
    }
 }
 
 function MovieInfo({data}) {

    return (
       <div>
            <h1> Hello World </h1>
            <pre> {data && JSON.stringify(data, undefined, 2)} </pre>
       </div>
    )
 }

 export default MovieInfo;