<template>
  <div class="container">
    <div class="header">
      <h2>{{ loadedPosts.title }}</h2>
      <p>Last updated on {{ loadedPosts.updatedDate }}</p>
      <p>Written by {{ loadedPosts.author }}</p>
    </div>
    <p>{{ loadedPosts.content }}</p>
    <p>
      Let me know what you think about the post,send a mail to <br />
      <a href="#">satyam985@gmail.com</a>
    </p>
    <nuxt-link to="/">Go Back</nuxt-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData(context) {
    return axios
      .get(process.env.baseUrl + "/posts/" + context.params.id + ".json")
      .then((res) => {
        return { loadedPosts: res.data };
      })
      .catch((e) => context.error(e));
  },
  head: {
    title: " A Blog Post",
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}
.header {
  border-bottom: 2px solid rgb(206, 206, 206);
}
</style>
