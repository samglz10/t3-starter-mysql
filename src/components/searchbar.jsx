
import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Link from "next/link";



const SearchBar = () => {
   
    const [searchTerm, setSearchTerm ] = useState('');
    const [searchResults, setSearchResults ] =useState( );

    const handleChange = (e) =>{
        console.log(e)
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const debouncedSearch = setTimeout(() => {
           if ( searchTerm.length > 4 )   { 
                fetch(`/api/movies/search?searchTerm=${searchTerm}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) =>{
                    setSearchResults(data)
                })
            }
        },150)
        return () => {
            clearTimeout(debouncedSearch)
        }
    },[searchTerm])
     console.log(searchResults)

   return (
        <div className='text-black text-center'>
            <form onSubmit={console.log('submitted!')}>
                <input type='text' placeholder='Search Movies Here' value={searchTerm} onChange={handleChange} />
                <button  type='Submit'/>
            </form>
            <ul className ="absolute bg-white">
                {
                    searchResults && searchResults.results.map((result) => {
                        return (
                            <Link href="/movies/search" key={result.id}>
                                <li >
                                    {result.title} {result.release_date}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
  /*
    const { isLoading, error, data } = useQuery(['search'],() => (
        fetch ('api/movies/search')
        .then(res => res.json())
    )

    )
    if (isLoading) {
        return (
            <div>
                <input type='text' placeholder='Search Loading...'/> 
            </div>
        )
    }
    if (error) {
        <div>
            <input type='text' placeholder='Search Loading Error 🙈'/> 
        </div>
    }

   // const seachTerm = () => {
  //      querySelector("search").value
   // }

    return (

        <div>
            <input className="text-black"type='text' value={searchTerm()} placeholder='Ready to Search!!!' onSubmit= {console.log(data.JSON.stringy())} />

        </div>
    ) */
}

export default SearchBar;


