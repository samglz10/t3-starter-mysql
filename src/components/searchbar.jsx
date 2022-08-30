import React from "react";
import { useQuery } from '@tanstack/react-query'

function SearchBar () {

  /*  const { isLoading, error, data } = useQuery(['movie_id'], ()=> (
        fetch('/api/movies/search')
        .then(res => res.json())
    )) 
    if (isLoading) {
        return (
            <h1> Loading...</h1>
        )
    } 
    if (error) {
        return (
            <h1> Search..</h1>
        );
    }
*/
    return (

        <div>
            <input type="search" /*</div>onChange ={e => data(e.target.value)}*/ placeholder="Search movies here..."/> 
        </div>
    )
 }


export default SearchBar;
