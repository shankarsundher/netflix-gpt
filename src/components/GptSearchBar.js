import React, { useRef } from 'react';
import language from '../utils/langConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.config.language)
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";


    const searchGptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    }); 
    
    if (!searchGptResults.choices) {
  return "oops there is no movie list...!"
    }
    console.log(searchGptResults.choices?.[0]?.message?.content);

    //to convert the result of movies into array use split method.
    const gptMovieResults = searchGptResults.choices?.[0]?.message?.content.split(",")  
  
    // For each movie I will search TMDB API

    const promiseMovieArray = searchGptResults.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseMovieArray);

    console.log(tmdbResults);
  
  }



  return (
    <div className='pt-[12%] flex justify-center'>
      <form className='bg-slate-400 w-1/2 rounded-xl' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='px-2 py-2 ml-4 rounded-md outline-none w-3/4' placeholder={language[langSelector]?.gptSearchPlaceholder} />
        <button className='py-2 px-6 font-bold my-2 ml-4 bg-teal-400 rounded-md text-lg' onClick={handleGptSearch}>
          {language[langSelector]?.search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;