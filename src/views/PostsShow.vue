<template>
  <div class="home">
    <h1>{{ post.title }}</h1>
    <hr>
    <img v-bind:src="post.image">
    <p>{{ post.body}}<p>
    <hr>
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios'

export default {
  data: function() {
    return {
      message: "Post",
      post: {}
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.post = response.data;
    });
  },
  methods: {}
};
</script>
