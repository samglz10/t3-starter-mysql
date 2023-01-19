import { useEffect, useState } from "react";
import Link from "next/link";


const SearchBar = () => {
   
    const [searchTerm, setSearchTerm ] = useState('');
    const [searchResults, setSearchResults ] = useState( );
    const clearState = () =>{
        
        () =>
        setSearchTerm('');
    }; 

    const handleChange = (e) => {
      
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        const debouncedSearch = setTimeout(() => {
           if ( searchTerm.length > 3 )   { 
                fetch(`/api/movies/search?searchTerm=${searchTerm}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) =>{
                    setSearchResults(data)
                })
            }
        },100)
        return () => {
            clearTimeout(debouncedSearch)
        }
    },[searchTerm])
     

   return (
        <div className='flex flex-row text-black text-center '>
            <form className="min-w-min">
                <input className="flex flex-grow text-center" type='text' placeholder='Search Movies Here' value={searchTerm} onChange={handleChange}  />
            </form>
            <ul  className ="absolute bg-white ">
                {
                    searchResults && searchResults.results.map((result) => {
                        return (
                            <div className="hover:bg-slate-100"  key={result.id} >
                                <Link 
                                href={`/movies/${result.id}`} 
                                passHref
                                >
                                    <a>
                                        <li onClick={clearState}  className="">
                                        <div className= "flex flex-col text-center "> 
                                                <div>
                                                    {result.title} 
                                                </div>
                                                <div>
                                                    {result.release_date}
                                                </div>
                                            </div>
                                        </li>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SearchBar;


