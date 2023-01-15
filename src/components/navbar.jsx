import Link from "next/link";
import { React } from "react";
import SearchBar from "./searchbar";
import 'tailwindcss/tailwind.css'


function NavBar () {

    return (
<>
    <nav className="grid-cols-6 items-center min-w-screen bg-gradient-to-r text-white from-purple-500 to-pink-500 p-4 sticky top-0 m-0 z-50 ">
                <div className=" flex flex-row justify-around">
                    <Link href="/" className="mx 2.5	">
                        Home
                    </Link>
                    <Link href="/movies/upcoming">
                        Upcoming
                    </Link>
                    <Link href="/movies/popular" className=" text-white mx-20">
                        Popular
                    </Link>
                        <SearchBar />
                    <Link href="/movies/watchlist" className="  text-white">
                        My Movie List
                    </Link>
                    <Link href="/auth" className="mx-2.5">
                        Login
                    </Link>
        </div>
    </nav>
{/*Hamburger Menu*/}
    <div className="sm:hidden" id="hamburger-icon">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
        <ul>
            <Link href="/">
                Home
            </Link>
            <Link href="/movies/upcoming">
                Upcoming
            </Link>
            <Link href="/movies/popular">
                Popular
            </Link>
                <SearchBar/>
            <Link href="/movies/watchlist">
                My Movie List
            </Link>
            <Link href="/auth">
                Login
            </Link>
        </ul>
    </div>
</>
    )
}
export default NavBar;