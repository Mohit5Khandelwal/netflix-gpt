import { useDispatch } from 'react-redux';
import { addMovie } from '../utils/movieSlice';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';

// Hook is nothing but a function in react js 
const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    // getting the data from the api and updating the store 
    const getNowPlayingMovies = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        // It will return a promise 
        const json = await data.json();
        // storing the data in redux  store 
        dispatch( addMovie( json ));
    }


    useEffect(() => {
        getNowPlayingMovies()
    }, [])

}

export default useNowPlayingMovies;
