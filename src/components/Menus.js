import React from 'react';
import { Link } from "react-router-dom";

export default function Menus(props) {
    return(
        <>
            <h1 className="mb-3 font-bold text-alerange">
                Menus
            </h1>
            <ul>
                <li className="py-2 border-t border-slate-200 w-full">
                    <Link
                        to="/"
                        className="font-medium hover:text-alerange"
                        onClick={props.closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li className="py-2 border-y border-slate-200 w-full">
                    <Link 
                        to="/about" 
                        className="font-medium hover:text-alerange"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li className="py-2 border-y border-slate-200 w-full">
                    <Link 
                        to="/contact" 
                        className="font-medium hover:text-alerange"
                        onClick={props.closeMenu}
                    >
                        Contact
                    </Link>
                </li>
                <li className="py-2 border-y border-slate-200 w-full">
                    <Link 
                        to="/movie/2" 
                        className="font-medium hover:text-alerange"
                        onClick={props.closeMenu}
                    >
                        Movie
                    </Link>
                </li>
            </ul>
        </>
    );
}