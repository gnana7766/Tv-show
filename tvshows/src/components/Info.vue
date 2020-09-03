<template>
  <div class="mt-5">
    <div class="container">
      <button id="btn" class="btn btn-info" @click="back()">back</button>
      <div class="img">
        <img :src="information.image.medium" />
      </div>
      <div class="summary" v-html="information.summary">
        {{ information.summary }}
      </div>
      <div class="avg">Average: {{ information.rating.average }}</div>
      <div class="channel">Network channel: {{ information.network.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      information: this.$route.params.show,
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#btn {
  float: right;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  border-radius: 9px;
}
.summary {
  color: white;
  margin: auto;
  margin-top: 25px;
  display: flex;
  align-items: center;
  text-align: justify;
}
.avg {
  color: white;
}
.channel {
  color: white;
}
</style>
