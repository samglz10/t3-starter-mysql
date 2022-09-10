import { useEffect, useState } from "react";
import Link from "next/link";



const SearchBar = () => {
   
    const [searchTerm, setSearchTerm ] = useState('');
    const [searchResults, setSearchResults ] = useState( );

    const handleChange = (e) =>{
      
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
     

   return (
        <div className='text-black text-center'>
            <form>
                <input type='text' placeholder='Search Movies Here' value={searchTerm} onChange={handleChange} />
                <button  type='Submit'/>
            </form>
            <ul className ="absolute bg-white">
                {
                    searchResults && searchResults.results.map((result) => {
                        return (
                            <Link href={`/movies/${result.id}`} key={result.id} passHref >
                                <a>
                                    <li>
                                        {result.title} {result.release_date}
                                    </li>
                                </a>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchBar;


