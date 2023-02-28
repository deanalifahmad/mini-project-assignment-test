import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=199990f1b48c24344250a53361249e57`;
    const [movie, setMovie] = useState(null);

    let content = null;

    useEffect(() => {
        axios.get(url).then(response => {
            setMovie(response.data);
        })
    }, [url]);

    if (movie) {
        content = 
            <div className="container mx-auto p-4">
                    <h1 className="text-2xl text-center text-dark font-bold mb-3">
                        {movie.title}
                    </h1>
                <div className="flex flex-col items-center">
                    <div>
                        <img 
                            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                            alt={movie.title}
                            className="h-[300px] w-[300px]"
                        />
                    </div>
                    <div className="my-3 mx-2">
                        <h2 className="font-semibold text-alerange text-justify">Release Date</h2>
                        <p className="mb-2">
                            {movie.release_date}
                        </p>
                        <h2 className="font-semibold text-alerange text-justify">Overview</h2>
                        <p className="mb-2">
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </div>
    }

    return(
        <div className="container mx-auto px-4">
            {content}
        </div>
    );
}