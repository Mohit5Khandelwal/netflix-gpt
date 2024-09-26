import React from 'react'
import { IMAGE_URL } from '../utils/constants'
const MovieCard = ({ poster_path }) => {
    return (
    <div className='pr-4 rounded-lg shadow-lg'>
        <img src={ IMAGE_URL + poster_path }  />
    </div>
)
}

export default MovieCard
