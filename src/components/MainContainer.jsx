import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    /**
     * Here we have two more components
     * Video Background
     * Video Title and description container 
     */

    // Fetching the data of movie from redux store 
    const movie = useSelector( (store) => store.movies?.nowPlayingMovies);

    // movies was not presnt then return early 
    if(!movie){
        // movie is empty 
        // This is knows as !!! early return !!!
        return null;
    }

  

    const mainMovie = movie?.results[2];
    // extract details 
    const { original_title, overview, id } = mainMovie;
    

    return (
        <div>
            <VideoTitle title={original_title} description={overview} />
            <VideoBackground id={id} />
        </div>
    )
};

export default MainContainer;
