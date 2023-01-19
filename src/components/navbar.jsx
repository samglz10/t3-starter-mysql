import Link from "next/link";
import Image from "next/future/image"
import { useState, React } from "react";
import SearchBar from "./searchbar";
import 'tailwindcss/tailwind.css'
import Hamburger from "../assets/hamburger.svg"
import Closed from "../assets/close.svg"
import {FaBars, FaTimes} from 'react-icons/fa'


function NavBar () {
  
    const[nav, setNav] = useState(false)
    //setNav will set nav to it's opposite value
    const handleClick = () => setNav(!nav)

    return (
    <nav className="sm:flex-col sm:flex-wrap sm:z-10 md:flex md:items-center md:justify-between min-w-screen shadow bg-gradient-to-r text-white from-purple-500 to-pink-500 p-5 sticky top-0 m-0 z-10">     
                <ul className=" text-white md:flex md:flex-row md:items-center md:justify-between  max-w-full left-0 md:py-0 py-4 md:pl-0 pl-7 ">        
                <Link href="/movies/homepage" className="md:flex md:items-center md:justify-between">
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
                    <button className="  bg-purple-500 duratin-500 px-6 py-3 mx-4 hover:bg-pink-900 rounded">
                        <Link href="/auth" className="">
                            Login
                        </Link>
                    </button>
                    <> 
                     {/* mobile menu*/}
                     <div onClick={handleClick} className="md:hidden z-10">
                            {!nav ? <FaBars className="z-50"/> : <FaTimes className="z-50"/>}
                       
                        <div className={!nav ? "hidden":"absolute text-center top-0 left-0 w-full h-screen text-white bg-gradient-to-r  from-purple-500 to-pink-500 flex flex-col justify-center items-center z-20"}>
                            <ul>
                                <li className="py-6 text-4xl flex flex-col" >
                                    <Link onClick={handleClick} href="/movies/homepage" className="md:flex md:items-center md:justify-between">
                                        Home
                                    </Link>
                                </li>
                                <li className="py-6 text-4xl" >
                                    <Link onClick={handleClick} href="/movies/upcoming">
                                        Upcoming
                                    </Link>
                                </li>
                                <li className="py-6 text-4xl" >
                                    <Link onClick={handleClick} href="/movies/popular" className="">
                                        Popular
                                    </Link>
                                </li>
                                <li className="py-6 text-2xl" >
                                    <SearchBar />
                                </li>
                                <li className="py-6 text-4xl" >
                                    <Link onClick={handleClick} href="/movies/watchlist" className="">
                                        My Movie List
                                    </Link>
                                </li>
                                <li className="py-6 text-4xl" >
                                    <button onClick={handleClick} className=" bg-purple-500 duratin-500 px-6 py-3 mx-4 hover:bg-pink-900 rounded">
                                    <Link href="/auth" className=" sm:hidden">
                                        Login
                                    </Link>
                                 </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </>  
        </ul>
    </nav>

    )
}
export default NavBar;