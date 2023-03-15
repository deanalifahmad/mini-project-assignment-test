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
        <div className="flex flex-col items-center justify-center mb-[20px]">
            <h1 className="popular-title my-4 text-dark text-center text-xl font-bold">
                What are the most popular movies?
            </h1>
            {content}
        </div>
    );
}