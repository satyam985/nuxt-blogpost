<template>
  <div class="container">
    <div class="header">
      <h2>{{ loadedPosts.title }}</h2>
      <p>Last updated on {{ loadedPosts.updatedDate | date }}</p>
      <p>Written by {{ loadedPosts.name }}</p>
    </div>
    <p>{{ loadedPosts.content }}</p>
    <p class="footer-content">
      Let me know what you think about the post,send a mail to <br />
      <a class="author-email" href="#">satyam985@gmail.com</a>
    </p>
    <nuxt-link to="/"><a class="go-back" href="#"> Go Back </a></nuxt-link>
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
* {
  text-decoration: none;
}
.container {
  text-align: center;
}
.header {
  border-bottom: 2px solid rgb(206, 206, 206);
}
.author-email {
  color: red;
  font-weight: 500;
}
.footer-content {
  color: grey;
  font-size: 0.8rem;
}
.go-back:hover {
  background-color: #00c3ffab;
  color: white;
  border-radius: 2px;
  padding: 2px 5px;
}
</style>
