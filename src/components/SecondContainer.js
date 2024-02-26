import React from 'react'

import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondContainer = () => {

  const movies = useSelector((store) => store.movies);
  return (
   <div className='bg-gray-800 pl-12'>
     <div className='-mt-44 relative z-20'>
      <MovieList title={"Now Playing"} moviesList={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} moviesList={movies.popularMovies} />
      <MovieList title={"Top-Rated"} moviesList={movies.topRatedMovies} />
      <MovieList title = {"Recently-Added"} moviesList={movies.recentlyAddedMovies} />
      <MovieList title={"Upcoming"} moviesList={movies.upcomingMovies} />

    </div>
   </div>
  )
}

export default SecondContainer