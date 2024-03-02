import { useDispatch, useSelector } from "react-redux";
import { addRecentlyAddedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const useRecentlyAddedMovies = () =>{
    const dispatch = useDispatch();
    const recentlyAddedMovies = useSelector((store) => store.movies.recentlyAddedMovies)

  const getRecentlyAddedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=3', API_OPTIONS);
    const json = await data.json();
    dispatch(addRecentlyAddedMovies(json.results));
  }

  useEffect(() =>{
   !recentlyAddedMovies && getRecentlyAddedMovies();
  }, []);
}

export default useRecentlyAddedMovies;



