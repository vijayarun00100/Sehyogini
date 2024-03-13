import React from "react"; 
import Logo from '../images/navbar.png';
import User from '../images/user.png';
import { FiSearch } from "react-icons/fi";

const Navigation = () => {
    return (
        <div className="flex h-20 w-full bg-white fixed z-50">
            <img src={Logo} alt='' className=" h-16 ml-1 p-3" />
            <div className="absolute top-[32%] left-[29%] flex flex-row justify-center items-center font-medium text-lg">
                <a href="" className="flex ml-5 hover:text-theme mr-32">community</a>
                <a href="" className="flex ml-5 hover:text-theme mr-32">voices</a>
                <a href="" className="flex ml-5 hover:text-theme mr-32">opportunities</a>
                
                <div className=" text-sm bg-search max-w-md relative">
                    < FiSearch className="absolute mt-2 ml-1"/>
                    <input type="text" placeholder="search for something" className="rounded-3xl p-1 pr-2 text-center bg-search border-none max-w-md ring-2 ring-grey-300 focus:ring-gray-500 focus:ring-2 outline-none"/>
                </div>
                <img src={User} alt='user' className="flex rounded-full ml-10"/>
            </div>
        </div>

    );
}

export default Navigation;
