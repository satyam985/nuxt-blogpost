<template>
  <div class="container">
    <div class="new-post">
      <AdminPostForm @submit="onSubmitted" />
    </div>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>

<style scoped>
.new-post {
  margin: 1rem 0 0 2rem;
  box-shadow: -7px 6px 13px 0px #8383834a;
  border-radius: 5px;
  width: 30rem;
  margin: auto;
  margin-top: 3rem;
}
@media screen and (max-width: 770px) {
  .new-post {
    width: 60%;
  }
}
</style>
