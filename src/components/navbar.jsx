import Link from "next/link";
import { useState, React } from "react";
import SearchBar from "./searchbar";
import 'tailwindcss/tailwind.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {SiThemoviedatabase} from 'react-icons/si'


function NavBar () {
  
    const[nav, setNav] = useState(false)
    //setNav will set nav to it's opposite value
    const handleClick = () => setNav(!nav)

    return (
    <nav className="absolute md:items-center md:justify-between min-w-screen shadow bg-gradient-to-r text-white from-purple-500 to-pink-500 lg:p-5 sm:p-1 sticky top-0 m-0 z-10">     
                <ul className="  grid grid-cols-3 sm:flex-col text-white md:flex md:flex-row md:items-center md:justify-around max-w-full left-0 md:py-0 py-2 md:pl-0 md:pl-7 "> 
                        <li className="md:mx-5 flex justify-center ">    
                            <SiThemoviedatabase className="h-12 w-12 "  />  
                        </li>
                        <li className=" flex justify-center text-center items-center">
                            <Link href="/movies/homepage"  className=" ">
                                    Home
                            </Link>  {/* hidden md:block -targets mobile devices*/}
                        </li>
                    <li className=" hidden md:block mx-4 my-6 md:my-0">
                        <Link href="/movies/upcoming">
                            Upcoming
                        </Link>
                    </li>

                    <li className=" hidden md:block mx-4 my-6 md:my-0">
                        <SearchBar />
                    </li>
                    <li className=" hidden md:block mx-4 my-6 md:my-0">
                        <Link href="/movies/popular" className="">
                            Popular
                        </Link>
                    </li>
                    <li className=" hidden md:block  mx-4 my-6 md:my-0">
                        <Link href="/movies/watchlist" className="">
                            My Movie List
                        </Link>
                    </li>
                    <button className=" hidden md:block bg-purple-500 duratin-500 px-6 py-3 mx-4 hover:bg-pink-900 rounded">
                        <Link href="/auth" className="">
                            Login
                        </Link>
                    </button> 
                    <> 
                     {/* mobile menu*/}
                     <div onClick={handleClick} className=" md:hidden z-10 mx-0 flex justify-center items-center ">
                            {!nav ? <FaBars className="z-50 m-0 h-5 w-5 flex  items-center  "/> : <FaTimes className="z-50 m-0 h-5 w-5"/>}
                       
                        <div className={!nav ? "hidden":"absolute text-center top-0 left-0 w-full h-screen text-white bg-gradient-to-r  from-purple-500 to-pink-500 flex flex-col justify-center items-center z-20"}>
                            <ul>
                                <li className="py-6 text-4xl flex flex-col" >
                                    <Link onClick={handleClick} href="/movies/homepage" className=" hidden  md:flex md:items-center md:justify-between">
                                        Home
                                    </Link>
                                </li>
                                <li className="py-6 text-4xl" >
                                    <Link onClick={handleClick} href="/movies/upcoming">
                                        Upcoming
                                    </Link>
                                </li>

                                <li className="py-6 text-2xl" >
                                    <SearchBar />
                                </li>
                                <li className="py-6 text-4xl" >
                                    <Link onClick={handleClick} href="/movies/popular" className="">
                                        Popular
                                    </Link>
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