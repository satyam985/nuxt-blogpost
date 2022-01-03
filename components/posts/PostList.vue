<template>
  <section class="postList">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.postList {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 2rem 0;
  text-align: center;
}
@media screen and (max-width: 900px) {
  .postList {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
