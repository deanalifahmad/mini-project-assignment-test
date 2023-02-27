import React from "react";
import Navigation from "./Navigation";

export default function Header() {
    return(
        <header className="app-header border-b border-gray-1 p-3 flex justify-between items-center">
            <h1 className="font-bold text-alerange">
                My React App
            </h1>

            <Navigation />
        </header>
    );
}