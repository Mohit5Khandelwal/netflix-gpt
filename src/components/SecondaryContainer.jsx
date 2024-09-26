
import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";


/**
 *  -> MovieList - Popular 
 *        -> Movie Card 
 * -> MovieList - Now Playing 
 * -> MovieList - Trending 
 * -> MovieList - Hrror  
 */

const SecondaryContainer = () => {

    // Getting the data from store 
    const data = useSelector( (store) => store.movies.nowPlayingMovies );
    // Getting the data from store for trending movies 
    const trend_movie = useSelector( (store) => store.movies.popularMovies);
    const top_rated   = useSelector( (store) => store.movies.topRatedMovies );
    

    return (
        <div className=" bg-black">
            <div className="-mt-80 z-20 relative" >
                <MovieList title={"Now Playing"} data={ data?.results} />
            </div>
            <MovieList title={"Trending"} data={ trend_movie} />
            <MovieList title={"Top Rated"} data={ top_rated} />
        </div>
    );
};

export default SecondaryContainer;
