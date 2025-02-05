import React, { useState } from 'react'
import logo from '../imgs/logo.png'
import { Link } from "react-router-dom";
import { FaSearch, FaPen } from "react-icons/fa"; // FontAwesome search icon



export const Navbar = () => {
    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
    return (
        <nav className='navbar'>
            <Link to="/" className='flex-none  w-10'>
                <img src={logo} className='w-full' />
            </Link>

            <div className={"absolute left-0 bg-white w-full top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + ( searchBoxVisibility ? "show" : "hide")}>
                <input type="text" placeholder='Search' className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12' />
                <FaSearch className='absolute right-[10%] top-9 md:pointer-events-none text-dark-grey md:left-5 md:top-5' />
            </div>

            <div className='flex items-center gap-3 md:gap-6 ml-auto'
                onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}
            >
                <button className='md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center'>
                    <FaSearch className='text-xl text-dark-grey'/>
                </button>

                <Link to="/editor" className=' hidden md:flex gap-2 link'>
                <FaPen className='text-black mt-1'/>
                    <p>Write</p>
                </Link>

                <Link className='btn-dark py-2' to="/signin">
                Sign In
                </Link>
                <Link className='btn-light py-2 hidden md:block' to="/signup">
                Sign Up
                </Link>

            </div>
        </nav>
    )
}
