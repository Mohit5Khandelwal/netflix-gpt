import React from 'react'
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ title, data }) => {

    return (
    <div className='px-4 py-2'>
        <h1 className='text-4xl font-bold py-4 text-white'> {title} </h1>
        <div className='overflow-x-scroll scrollbar-hide'>
            {/* <h1> {title} </h1> */}
            <div className='flex w-max'>
                <div className='flex'>
                    {
                        data?.map( (item) => <MovieCard key={item.id} poster_path={ item?.poster_path} />)
                    }
                </div>
            </div>
        </div>
    </div>
)
}

export default MovieList