import axios from "axios";

const state = {
  tvShows: [],

};

const getters = {
  allTvShows: (state) => state.tvShows,
};

const actions = {
  async fetchAllTvShows({ commit }) {
    const response = await axios.get("http://api.tvmaze.com/shows");

    commit("setTvShows", response.data);
  },
};

const mutations = {
  setTvShows: (state, tvShows) => (state.tvShows = tvShows)
};

export default {
  state,
  getters,
  actions,
  mutations,
};
