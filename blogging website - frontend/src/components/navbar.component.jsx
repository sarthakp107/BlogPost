import React from 'react'
import logo from '../imgs/logo.png'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // FontAwesome search icon


export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/" className='flex-none w-10'>
                <img src={logo} className='w-full' />
            </Link>

            <div className='absolute left-0 bg-white w-full top-full mt-0.5 border-b border-grey py-4 px-[5vw]'>
                <input type="text" placeholder='Search' className='w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey' />
                <FaSearch className='absolute right-[10%] top-9 md:pointer-events-none text-dark-grey md:left-5'/>
            </div>

        </nav>
    )
}
