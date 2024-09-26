import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { get_data } from "../utils/gemini";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";



const Browse = () => {

  // Calling the custom hooks to fetch movies data and stores in the redux store 
  useNowPlayingMovies();
  // Calling the custom hooks to fetch the popular movies data and stores in the redux store
  usePopularMovies();
  useTopRatedMovies();

  // Always plan the UI before building this 
  /**
   * Main Container (Video background/Video Title)
   * Secondary Container 
   *  -> Movie List * n 
   *  -> cards * n 
   * 
   */

    const { isGptClick } = useSelector( store => store.gpt);

    const generate_data = async(prompt) => {
      const data = await get_data(prompt);
      console.log(data);
    }

    useEffect( () => {
      generate_data("Suggest some Indian movies name ")
    })

  return (
    <>
    {
      isGptClick && <GPTSearch />
    }

    {
      !isGptClick && ( 
        <> 
        <MainContainer />
        <SecondaryContainer />
        </>
      )
    }
    
    {/* <MainContainer />
    <SecondaryContainer /> */}
    </>

  )
}

export default Browse