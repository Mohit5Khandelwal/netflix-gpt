
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies, addTopRatedMovies } from '../utils/movieSlice';

// Hook is nothing but a function in react js 
const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    // getting the data from the api and updating the store 
    const getNowPlayingMovies = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        // It will return a promise 
        const json = await data.json();
        // storing the data in redux  store 
        dispatch( addTopRatedMovies( json.results ) );
    }


    useEffect(() => {
        getNowPlayingMovies()
    }, [])

}

export default useTopRatedMovies;
