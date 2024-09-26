import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useEffect, useRef } from "react";



const VideoBackground = ({ id }) => {
  /**
   * From video API Fetch Trailer here
   */
    // Calling the Hook movie Trailer 
    useMovieTrailer(id);
    // Fetching the trailer_id from redux store 
    const trailer_id = useSelector( (store) => store?.movies?.trailer?.key);

    // useEffect(() => {
    //   iframe.webkitRequestFullscreen();
    // }, [])
    

  return (
    <div className="w-screen">
    <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${trailer_id}?autoplay=1&mute=1&loop=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>



    </div>
  );
};

export default VideoBackground;
