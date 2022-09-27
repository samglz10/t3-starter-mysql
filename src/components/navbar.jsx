import Link from "next/link";
import { React } from "react";
import SearchBar from "./searchbar";


function NavBar () {

    return (

    <nav className=" flex flex-row items-center w-screen bg-gradient-to-r text-white from-purple-500 to-pink-500 p-4 sticky top-0 m-0 z-50 flex-nowrap">
        <div className=" flex flex-nowrap flew-row justify-around grow text-center ">
            <div className="  text-white mr-6">
                <Link href="/" className="font-semibold ">Home</Link>
            </div>
            <div className="text-sm text-white  flex flex-row justify-around ">
                <div className=" basis-10 text-white mx-20">
                    <Link href="/movies/upcoming">
                        Upcoming
                    </Link>
                </div>
                <div className=" basis 1/4 text-white mx-20">
                    <Link href="/movies/popular" className=" text-white mx-20">
                        Popular
                    </Link>
                 </div>
                    <SearchBar />
                <div className=" basis 3/4 text-white mx-20">
                    <Link href="/movies/watchlist" className="  text-white">
                        My Movie List
                    </Link>
                </div>
            </div>
            <div>
                <Link href="/auth" className=" text-sm px-4 py-2 ">Login</Link>
            </div>
        </div>
    </nav>
    )
}
export default NavBar;