<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><img src="" alt=""/></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              ><router-link to="/" id="brand">TV Shows</router-link></b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
                v-model="searchQuery"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                @click.prevent="addToSearch()"
                >Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    addToSearch() {
      this.$router.push({name:'search', params:{searchQuery: this.searchQuery}});
      this.searchQuery = "";
    },
  },
};
</script>

<style scoped>
#brand {
  color: #dddcdc;
  text-decoration: none;
}
#brand:hover {
  color: white;
}
</style>
