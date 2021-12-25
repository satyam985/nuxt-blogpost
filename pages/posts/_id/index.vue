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
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: {
          id: "1",
          title: `First Post (ID: ${context.route.params.id})`,
          previewText: "This is First Post",
          author: "Satyam",
          updatedDate: new Date(),
          content: "Lorem Ipsum",
          thumbnail: "https://wallpapercave.com/wp/wp7134895.png",
        },
      });
    }, 1000);
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
