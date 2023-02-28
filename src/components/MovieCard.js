import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
    return(
            <div className="container p-4 bg-slate-50 my-2 rounded-lg shadow-md hover:shadow-lg hover:duration-300">
                    <h2 className="text-lg text-center text-alerange font-bold mb-3">
                        { props.movie.title }
                    </h2>
                <div className="flex flex-col items-center">
                    <Link to={`/movie/${props.movie.id}`}>
                        <div>
                            <img 
                                src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
                                alt={ props.movie.title }
                                className="h-[300px] w-[300px]"
                            />
                        </div>
                    </Link>
                    <div className="my-3 mx-2">
                        <h2 className="font-semibold text-alerange text-justify">Overview</h2>
                        <p className="mb-2">
                            { props.movie.overview }
                        </p>
                        <Link 
                            to={`/movie/${props.movie.id}`}
                            className="bg-alerange text-dark font-semibold p-2 flex justify-center w-full rounded-md"
                        >
                            View
                        </Link>
                    </div>
                </div>
            </div>
    );
}