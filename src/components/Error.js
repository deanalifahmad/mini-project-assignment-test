import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return(
            <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div class="text-center">
                    <h2 class="mb-8 font-extrabold text-9xl text-alerange">
                        404
                    </h2>
                    <p class="text-xl font-semibold">
                        Sorry, there was an error.
                    </p>
                    <p class="mt-4 mb-8">
                        Please refresh or try again later...
                    </p>
                    <Link
                        to="/"
                        className="font-medium hover:text-alerange"
                    >
                        Home
                    </Link>
                </div>
            </div>
    );
}