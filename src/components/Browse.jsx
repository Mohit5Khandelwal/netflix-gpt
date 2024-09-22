import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

  // Calling the custom hooks to fetch movies data and stores in the redux store 
  useNowPlayingMovies();

  // Always plan the UI before building this 
  /**
   * Main Container (Video background/Video Title)
   * Secondary Container 
   *  -> Movie List * n 
   *  -> cards * n 
   */
  return (
    <>
    <MainContainer />
    <SecondaryContainer />
    </>

  )
}

export default Browse