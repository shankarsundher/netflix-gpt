import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useRecentlyAddedMovies from '../hooks/useRecentlyAddedMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearchView = useSelector(slice => slice.gpt.gptSearchView)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useRecentlyAddedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearchView ? <GptSearchPage /> :
          <>
            <MainContainer />
            <SecondContainer />
          </>
      }


    </div>
  )
}

export default Browse