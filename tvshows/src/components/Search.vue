<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <div class="item" v-for="tvShows in search" :key="tvShows.id">
          <div class="col-lg">
            <router-link :to="{ name: 'info', params: { show: tvShows } }">
              <img :src="tvShows.image.medium" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearch } from "../categories.service.js";
export default {
  name: "Search",
  data() {
    return {
      search: [],
    };
  },
  props: ["searchQuery"],

  methods: {},
  mounted() {
    getSearch(this.searchQuery)
      .then(
        (response) => (this.search = response.data.map((show) => show.show))
      )
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.item img {
  border-radius: 9px;
  object-fit: cover;
}
.wrapper {
  width: 100%;
  display: block;
  overflow-x: auto;
  padding: 20px;
  box-sizing: border-box;
  -ms-overflow-style: none;
  background-color: black;
}
#btn {
  margin-top: 10px;
  float: right;
}
.wrapper::-webkit-scrollbar {
  display: none;
}

.wrapper .item {
  display: inline-block;
  margin-right: 10px;
}
.wrapper .item {
  min-width: 200px;
  height: max-content;
  line-height: 110px;
  text-align: center;
  margin-right: 2px;
  padding: 13px 0px 0px 0px;
}
</style>
