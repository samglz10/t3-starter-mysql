import Link from "next/link";
import Image from "next/future/image"
import { useState, React } from "react";
import SearchBar from "./searchbar";
import 'tailwindcss/tailwind.css'
import Hamburger from "../assets/hamburger.svg"



function NavBar () {

    return (
    <nav className=" md:flex md:items-center md:justify-between min-w-screen shadow bg-gradient-to-r text-white from-purple-500 to-pink-500 p-5 sticky top-0 m-0 z-50 ">
                         
                <ul className=" flex justify-between md:flex md:items-center md:justify-beetwen absolute z-[-1] md:z-auto md:static w-full left-0 md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transtition-all ease-in duration-500">        
                <Link href="/" className="md:flex md:items-center md:justify-between">
                                Home
                    </Link>   
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="/movies/upcoming">
                            Upcoming
                        </Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="/movies/popular" className="">
                            Popular
                        </Link>
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <SearchBar />
                    </li>
                    <li className="mx-4 my-6 md:my-0">
                        <Link href="/movies/watchlist" className="">
                            My Movie List
                        </Link>
                    </li>
                    <button className=" bg-purple-500 duratin-500 px-6 py-3 mx-4 hover:bg-pink-900 rounded">
                        <Link href="/auth" className="">
                            Login
                        </Link>
                    </button>
                    {/*<>
                    <Image className="grayscale invert  mx-2 inline z-50 sm:hidden"
                    src={Hamburger}
                    alt="menu"
                    width={50} 
                    height={50} 
                    />
                 </>
                */}
        </ul>
    </nav>

    )
}
export default NavBar;