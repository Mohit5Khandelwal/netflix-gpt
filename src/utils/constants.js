export const LOGO_URL = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
const apiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + apiKey
    }
  };


export const IMAGE_URL = 'https://image.tmdb.org/t/p/w200/';

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hi', name: 'Hindi' }

]

/***
 * Whenever we use LOGO i use from this 
 * Always use constant it is a good practice 
 * 
 */