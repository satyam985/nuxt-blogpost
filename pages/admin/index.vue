<template>
  <div>
    <section class="new-post">
      <nuxt-link to="/admin/new-post"><button>Create Post</button></nuxt-link>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
.new-post {
  border-bottom: 2px solid rgb(211, 210, 210);
  padding-block: 1rem;
}
button {
  height: 2rem;
  border-radius: 20px;
}
</style>
