import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ContactDetails() {
    return(
        <>
            <div className="p-2">
                <Link
                    to="/contact"
                    className="font-medium hover:text-alerange"
                >
                <FontAwesomeIcon 
                    icon={faArrowLeft}
                    className="text-dark"
                />
                </Link>
            </div>

            <h1 className="text-[24px] text-dark text-center font-bold mt-5">Contact Details</h1>

            <div className="bg-gray-100 hover:bg-gray-200 shadow-md flex flex-col m-5 p-3 items-justify rounded-lg">
                <div>
                    <p className="text-dark">Name: <span className="text-alerange font-semibold">Dean Alif Ahmad</span></p>
                </div>
                <div>
                    <p className="text-dark">Phone: <span className="text-alerange font-semibold">+6282113932657</span></p>
                </div>
                <div>
                    <p className="text-dark">Gender: <span className="text-alerange font-semibold">Male</span></p>
                </div>
                <div>
                    <p className="text-dark">Email: <a href="mailto:deanalifahmad49@gmail.com"  className="text-alerange font-semibold">deanalifahmad49@gmail.com</a></p>
                </div>
                <div>
                    <p className="text-dark">LinkedIn: <a href="https://www.linkedin.com/in/dean-alif-ahmad-bb6a9a1aa/"  className="text-alerange font-semibold">Dean Alif Ahmad</a></p>
                </div>
            </div>
        </>
    );
}