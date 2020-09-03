import axios from "axios";

// for fetching api based on search input

export const getSearch = (searchQuery) => {
  return axios.get(`http://api.tvmaze.com/search/shows?q=${searchQuery}`);
};
