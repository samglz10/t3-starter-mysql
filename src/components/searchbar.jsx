
import React from "react";
import { useQuery } from '@tanstack/react-query'


const SearchBar = () => {

 /*   return (
        <div className='text-black text-center'>
                <input type='text' placeholder='Search Movies Here'  />
                <button  type='Submit' onSubmit={fetch('api/movies/search')}> </button>
        </div>
    )
 */
    const { isLoading, error, data } = useQuery(['search'],() => (
        fetch ('api/movies/search')
        .then(res => res.json())
    ))
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

    return (

        <div>
            <input type='text' placeholder='Ready to Search!!!' onSubmit= {console.log(data.JSON.stringy())} />
    
        </div>
    )
}

export default SearchBar;


