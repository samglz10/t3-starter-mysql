import React from "react";
import { useQuery } from '@tanstack/react-query'

function SearchBar () {

    const { isLoading, error, data } = useQuery(['title'], ()=> (
        fetch('/api/movies/search')
        .then(res => res.json())
    )) 
    if (isLoading) {
        return (
            <input className=" max-w-lg text-center text-black " type="search" /*onChange ={())} */ placeholder="Search movies here..."/>
        )
    } 
    if (error) {
        return (
            <h1> No Results..</h1>
        );
    }
    

    return (

        <div>
             
        </div>
    )
 }


export default SearchBar;
