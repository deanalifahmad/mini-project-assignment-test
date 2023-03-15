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
            <div className="flex flex-col items-center justify-center">
                <div className="card flex align-center w-[75vw] max-w-[650px] px-[50px] py-[30px] bg-slate-50 my-2 rounded-[24px] shadow-md hover:shadow-lg hover:duration-300">
                    <img 
                        src={"https://image.tmdb.org/t/p/w500" + movie.data.poster_path}
                        alt={movie.data.title}
                        className="max-w-[280px] w-[28vw] h-[300px] object-cover ml-[-60px] mr-[30px] rounded-lg shadow-md"
                    />
                <div>
                    <h2 className="text-2xl text-alerange font-bold">
                        {movie.data.title}
                    </h2>
                    <h3 className="text-dark font-medium">
                        Release Date
                    </h3>
                    <p className="mb-2">
                        {movie.data.release_date}
                    </p>
                    <h3 className="text-dark font-medium">
                        Popularity
                    </h3>
                    <p className="mb-2">
                        {movie.data.popularity}
                    </p>
                    <h3 className="text-dark font-medium">
                        Overview
                    </h3>
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