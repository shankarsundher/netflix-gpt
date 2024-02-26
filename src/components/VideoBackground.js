import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
    
    useMovieTrailer(movieId);

    return (
       <div className='overflow-x-hidden'>
         <div className="w-screen overflow-x-hidden">
            <iframe
            className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             ></iframe>
        </div>
       </div>
    )
}

export default VideoBackground;