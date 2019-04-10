<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <hr>
    <div v-for="post in posts">
      <img v-bind:src="post.image">
      <p>{{ post.title}}<p>
      <router-link v-bind:to="'/posts/' + post.id">Read More</router-link>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios'

export default {
  data: function() {
    return {
      message: "Posts",
      posts: {}
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
      this.posts = response.data;
    });
  },
  methods: {}
};
</script>