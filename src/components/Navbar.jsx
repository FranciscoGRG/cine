import { NavLink, Link, useNavigate   } from "react-router-dom";

import webLogo from "../assets/react.svg";
import { useState } from "react";
import Logo from "../assets/bomba.jpg"

const links = [
    { name: "Home", path: "/" },
    { name: "Films", path: "/films" },
    { name: "Favorites", path: "/favorites" },
    { name: "Tickets", path: "/tickets" },
];

const activeLinkClass = 'block py-2 px-3 text-primary-500 rounded md:p-0'
const linkClass = 'block py-2 px-3 text-white rounded hover:text-primary-600 md:p-0'


function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Buscar película:', searchQuery);
        navigate(`/movieSearch/${searchQuery}`);
    };




    return (
        <nav className="bg-darksurf-200 rounded-md mb-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} className="h-14 rounded-full" alt="Web Logo" />
                    <span className="self-center text-2xl font-semibold text-gray-200 whitespace-nowrap">Cine Bomba</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {
                            links.map((link, index) => (
                                <li key={index}>
                                    <NavLink key={index} to={link.path} className={({ isActive }) =>
                                        isActive ? activeLinkClass : linkClass
                                    }>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))
                        }

                        <li>
                            <form onSubmit={handleSearchSubmit} className="flex items-center">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Buscar película"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        className="py-2 px-3 ml-2 pl-7 text-black rounded focus:outline-none focus:ring-2 focus:ring-primary-500 bg-darksurf-300"
                                    />
                                    <svg
                                        className="absolute left-3 top-3 w-5 h-5 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                    <button type="submit" className="py-2 px-3 ml-2 text-white rounded hover:text-primary-600">
                                        Buscar
                                    </button>

                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar