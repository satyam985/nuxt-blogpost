<template>
  <nuxt-link :to="postLink">
    <article>
      <div>
        <img class="image-section" :src="`${thumbnail}`" alt="image" />
      </div>
      <div class="content">
        <h2>{{ title }}</h2>
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
  height: 10rem;
}
.image-section {
  box-shadow: 0px 3px 3px 1px #bdbabad1;
  border-radius: 4px;
}
.content {
  color: black;
  text-decoration: none !important;
}
h2 {
  margin: 0.3rem;
  font-size: 1.3rem;
}
p {
  margin-top: 0;
  font-size: 1rem;
  font-weight: 500;
}
</style>
