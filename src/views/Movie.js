import React from "react";
import useFetch from "../hooks/HttpRequests";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=199990f1b48c24344250a53361249e57`;
    
    let movie = useFetch(url);

    let content = null;

    if (movie.loading) {
        content = <Loader></Loader>
    }

    if (movie.error) {
        content = <Error />
    }

    if (movie.data) {
        content = 
            <div className="container mx-auto p-4">
                    <h1 className="text-2xl text-center text-dark font-bold mb-3">
                        {movie.data.title}
                    </h1>
                <div className="flex flex-col items-center">
                    <div>
                        <img 
                            src={"https://image.tmdb.org/t/p/w500" + movie.data.poster_path}
                            alt={movie.data.title}
                            className="h-[300px] w-[300px]"
                        />
                    </div>
                    <div className="my-3 mx-2">
                        <h2 className="font-semibold text-alerange text-justify">Release Date</h2>
                        <p className="mb-2">
                            {movie.data.release_date}
                        </p>
                        <h2 className="font-semibold text-alerange text-justify">Popularity</h2>
                        <p className="mb-2">
                            {movie.data.popularity}
                        </p>
                        <h2 className="font-semibold text-alerange text-justify">Overview</h2>
                        <p className="mb-2">
                            {movie.data.overview}
                        </p>
                    </div>
                </div>
            </div>
    }

    return(
        <div className="container mx-auto px-4">
            <div className="p-2">
                <Link
                    to="/"
                    className="font-medium hover:text-alerange"
                >
                <FontAwesomeIcon 
                    icon={faArrowLeft}
                    className="text-dark"
                />
                </Link>
            </div>
            {content}
        </div>
    );
}