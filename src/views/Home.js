import React from "react";
import useFetch from "../hooks/HttpRequests";
import Loader from "../components/Loader";
import Error from "../components/Error";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=199990f1b48c24344250a53361249e57';

    const movies = useFetch(url);

    let content = null

    if(movies.error){
        content = <Error />
    }

    if(movies.loading){
        content = <Loader></Loader>
    }

    if (movies.data) {
        content = movies.data.results.map((movie) =>
            <div>
                <MovieCard movie={movie} />
            </div>
        )
    }

    return (
        <div className="container flex flex-col items-center justify-center px-2 mx-auto my-4">
            <h1 className="my-3 text-dark text-center text-xl font-bold">
                What are the most popular movies?
            </h1>
            {content}
        </div>
    );
}