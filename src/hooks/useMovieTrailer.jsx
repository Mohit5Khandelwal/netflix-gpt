import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";




const useMovieTrailer = (id) => {

    const dispatch = useDispatch();

    const getMovieVidoes = async () => {
        const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        API_OPTIONS
        );

        const videos = await data.json();
        // Filter the results to get the trailer
        const filterData = videos?.results?.filter(
            (video) => video.type === "Trailer"
        );

        // Handling the case when no videos is present in trailer case
        const trailer = filterData ? filterData[0] : videos?.results[1]; //filterData[0];


        // Storing the tailer in redux store
        dispatch(addTrailer(trailer));
    };

    useEffect(() => {
        getMovieVidoes();
    }, []);

};

export default useMovieTrailer;
