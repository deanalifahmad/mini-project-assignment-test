import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <h1 className="text-[24px] text-dark text-center font-bold mt-5">Contact</h1>

            <div className="bg-gray-100 hover:bg-gray-200 shadow-md flex m-5 p-5 items-center justify-between rounded-lg">
                <div className="flex flex-col items-center">
                    <span className="text-dark font-semibold">Dean Alif Ahmad</span>
                    <span className="text-dark font-light text-sm">+6282113932657</span>
                </div>
                <div>
                    <Link
                        to="/contact-details"
                        className="font-medium hover:text-alerange"
                    >
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                        className="text-dark"
                    />
                    </Link>
                </div>
            </div>
        </>
    );
}