import Link from "next/link";
import { React } from "react";
import SearchBar from "./searchbar";


function NavBar () {

    return (

    <nav className="flex items-center justify-between flex-nowrap bg-gradient-to-r from-purple-500 to-pink-500 p-4 sticky top-0 m-0 z-50">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/" className="font-semibold ">Home</Link>
        </div>
        <div id ="main wrapper" className=" flex flex-row items-center w-auto ">
            <div className="text-sm text-white lg:flex">
                <Link href="/movies/upcoming" className=" mt-4  lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Upcoming
                </Link>
                <Link href="/movies/popular" className=" mt-4  lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Popular
                </Link>
                <Link href="/movies/watchlist" className=" mt-4  lg:mt-0 text-teal-200 hover:text-white">
                    My Movie List
                </Link>
                <SearchBar/>
            </div>
            <div>
                <Link href="/auth" className=" text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:from-pink-500 hover:to-yellow-500 mt-4 lg:mt-0 text-white">Login</Link>
            </div>
        </div>
    </nav>
    )
}
export default NavBar;