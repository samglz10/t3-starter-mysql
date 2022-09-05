
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
 import { searchTerm } from '../pages/movies/search'



const SearchBar = () => {
   

   return (
        <div className='text-black text-center '>
            <form onSubmit={console.log('submitted!')}>
                <input type='text' placeholder='Search Movies Here'  />
                <button  type='Submit'/>
            </form>
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


