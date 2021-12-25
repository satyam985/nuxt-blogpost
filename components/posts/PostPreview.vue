<template>
  <nuxt-link :to="postLink">
    <article>
      <div>
        <img class="image-section" :src="`${thumbnail}`" alt="image" />
      </div>
      <div>
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.id : "/posts/" + this.id;
    },
  },
};
</script>

<style scoped>
.image-section {
  width: auto;
  height: 10rem;
  margin-left: 2rem;
}
article {
  padding: 2rem;
}
</style>
