<template>
  <div class="container">
    <div class="_postId">
      <AdminPostForm :post="editedPost" @submit="onSubmitted" />
    </div>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
import axios from "axios";
export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blogpost-3b1e0-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return { editedPost: res.data };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      axios
        .put(
          "https://nuxt-blogpost-3b1e0-default-rtdb.firebaseio.com/posts/" +
            this.$route.params.postId +
            ".json",
          editedPost
        )
        .then((res) => this.$router.push("/admin"))
        .catch((e) => console.log(e));
    },
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
