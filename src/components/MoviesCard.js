import React from 'react'
import { POSTER_CDN_URL } from '../utils/constants'

const MoviesCard = ({posterPath}) => {
  return (
    <div className='w-32 pr-5 cursor-pointer'>
        <img alt='Movie Poster'
        src={POSTER_CDN_URL + posterPath} />
    </div>
  )
}

export default MoviesCard