<template>
  <section class="postList">
    <PostPreview
      class="postPreview"
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
  grid-row-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 2rem 0;
  text-align: center;
}
.postPreview {
  text-decoration: none;
  transition: transform 0.6s;
}
.postPreview:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}
@media screen and (max-width: 900px) {
  .postList {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
