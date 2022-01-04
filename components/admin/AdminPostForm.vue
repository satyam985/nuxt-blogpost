<template>
  <div>
    <form @submit.prevent="onSave" id="blog">
      <div class="inputFields">
        <label for="name">Author Name</label>
        <input required v-model="editedPost.name" type="text" id="name" />
      </div>
      <div class="inputFields">
        <label for="title">Title</label>
        <input required v-model="editedPost.title" type="text" id="title" />
      </div>
      <div class="inputFields">
        <label for="thumbnailLink">Thumbnail Link</label>
        <input
          required
          v-model="editedPost.thumbnail"
          type="text"
          id="thumbnailLink"
        />
      </div>
      <div class="inputFields">
        <label for="previewText">Preview Text</label>
        <textarea
          v-model="editedPost.previewText"
          rows="4"
          cols="50"
          id="content"
          required
        ></textarea>
      </div>
      <div class="inputFields">
        <label for="content">Content</label>
        <textarea
          v-model="editedPost.content"
          rows="4"
          cols="50"
          id="content"
          required
        ></textarea>
      </div>
      <div class="btn">
        <button class="submit" type="submit">Save</button>
        <button
          class="cancel"
          type="button"
          @click="
            {
              $router.push('/admin');
            }
          "
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            name: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: "",
          },
    };
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
    },
  },
};
</script>

<style scoped>
.inputFields {
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
}
.inputFields label {
  padding-bottom: 0.4rem;
  font-weight: 500;
}
.inputFields input,
#content {
  border: 2px solid #a7a7a7b0;
  border-radius: 4px;
}
.btn {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}
.btn button {
  margin: 0 1rem 0 1rem;
  border: none;
  width: 4rem;
  height: 1.3rem;
  border-radius: 3px;
}
.submit {
  background-color: #00dcff;
  color: white;
}
.cancel {
  background-color: rgb(255, 80, 67);
  color: white;
}
.submit:hover {
  background-color: white;
  color: black;
  border: 2px solid #00dcff;
}
.cancel:hover {
  background-color: white;
  color: black;
  border: 2px solid #ff5043;
}
</style>
