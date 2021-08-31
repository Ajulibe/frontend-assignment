import axios from "axios";
import config from "config";

//--> Fetch Movies from api
export const getMovies = async (searchTerm) => {
  let response;
  try {
    response = await axios.get(
      `${config.API_BASE_URL}/search/movie?api_key=${config.API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );
  } catch (error) {
    response = error;
  }
  return response;
};

//--> Fetch Recent Movies from api
export const getRecentMovies = async () => {
  let response;
  try {
    response = await axios.get(
      `${config.API_BASE_URL}/trending/movie/week?api_key=${config.API_KEY}`
    );
  } catch (error) {
    response = error;
  }
  return response;
};
