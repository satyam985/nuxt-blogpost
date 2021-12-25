<template>
  <div class="container">
    <div class="_postId">
      <AdminPostForm :post="loadedPost" />
    </div>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        name: "Satyam",
        title: "React",
        thumbnailLink: "https://wallpapercave.com/wp/wp7134895.png",
        content: "React.js",
      },
    };
  },
};
</script>

<style scoped>
._postId {
  margin: 1rem 0 0 2rem;
  box-shadow: -7px 6px 13px 0px #8383834a;
  border-radius: 5px;
  width: 30rem;
  margin: auto;
  margin-top: 3rem;
}
@media screen and (max-width: 770px) {
  ._postId {
    width: 60%;
  }
}
</style>
