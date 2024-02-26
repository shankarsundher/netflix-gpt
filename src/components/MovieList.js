import React from 'react'
import MoviesCard from './MoviesCard';

const MovieList = ({ title, moviesList }) => {
    console.log(moviesList);
    return (
        <div className='px-6'>
           <h1 className='font-bold text-xl py-3 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll mt-2'>
                <div className='flex'>
                    {moviesList?.map(movie => <MoviesCard key={movie.id} posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>

    )
}

export default MovieList