<template>
  <div>
    <div v-for="genre in genres" :key="genre.name">
      <h2>{{ genre.name }}</h2>
      <div class="wrapper">
        <div class="item" v-for="show in genre.shows" :key="show.id">
          <router-link :to="{ name: 'info', params: { show: show } }">
            <img :src="show.image.medium" />
            <h6>{{ show.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Tvshows",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchAllTvShows"]),
  },
  computed: {
    allTvShows() {
      return this.$store.getters.allTvShows;
    },
    genreTitles() {
      return Array.from(
        new Set(this.allTvShows.flatMap((shows) => shows.genres))
      );
    },
    genres() {
      return this.genreTitles.map((genre) => {
        return {
          name: genre,
          shows: this.allTvShows
            .filter((show) => show.genres.includes(genre))
            .sort((a, b) => (a.rating.average < b.rating.average ? 1 : -1))
            .slice(-10),
        };
      });
    },
  },

  created() {
    this.fetchAllTvShows();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
a:hover {
  color: white;
}
h6 {
  color: white;
  text-decoration: none;
  font-size: 12.5px;
}
h2 {
  color: white;
  padding: 10px 0px 0px 18px;
}
.wrapper {
  max-height: max-content;
  width: 100%;
  display: flex;
  overflow-x: auto;
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;
  -ms-overflow-style: none;
  background-color: black;
}
.wrapper::-webkit-scrollbar {
  display: none;
}

.wrapper .item {
  display: inline-block;
  margin-right: 10px;
}
.item img {
  border-radius: 9px;
  width: 185px;
  object-fit: cover;
}
</style>
