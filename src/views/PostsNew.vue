<template>
  <div class="home">
    <h1>{{ message}}</h1>
    <hr>
    <p>Title: <input type="text" v-model="newPostTitle"></p>
    <p>Post:<input type="text" v-model="newPostBody"></p>
    <p>Image:<input type="text" v-model="newImage"></p>
    <button v-on:click="addNewPost()">Create</button>
  </div>
</template>

<style>
</style>

<script>

import axios from 'axios'

export default {
  data: function() {
    return {
      message: "New Post",
      newPostTitle: "",
      newPostBody: "",
      newImage: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    addNewPost: function() {
      console.log('adding post');

      var params = {
        title: this.newPostTitle,
        body: this.newPostBody,
        image: this.newPostImage
      };
      console.log(params);
      axios.post('api/posts', params).then(response => {
        console.log(response.data);
        this.$router.push('/posts');
      }).catch(error => {
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>
