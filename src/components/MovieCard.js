import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard(props) {
    return(
            <div className="card flex align-center w-[75vw] max-w-[650px] px-[50px] py-[30px] bg-slate-50 my-2 rounded-[24px] shadow-md hover:shadow-lg hover:duration-300">
                <img 
                    src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path}
                    alt={ props.movie.title }
                    className="max-w-[280px] w-[28vw] h-[300px] object-cover ml-[-60px] mr-[30px] rounded-lg shadow-md"
                />
                <div>
                    <h2 className="text-2xl text-alerange font-bold mb-3">
                        { props.movie.title }
                    </h2>
                    <h3 className="text-dark font-medium">
                        Overview
                    </h3>
                    <p className="mb-2">
                        { props.movie.overview }
                    </p>
                        <Link 
                            to={`/movie/${props.movie.id}`}
                        >
                        <button className="w-full bg-alerange text-dark font-semibold font-size-[16px] py-[16px] px-[26px] mt-2 rounded-[40px]">
                            View
                        </button>
                        </Link>
                </div>
            </div>
    );
}