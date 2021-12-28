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
      .get(process.env.baseUrl + "/posts/" + context.params.postId + ".json")
      .then((res) => {
        return { editedPost: { ...res.data, id: context.params.postId } };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
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
