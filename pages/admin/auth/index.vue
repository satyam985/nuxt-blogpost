<template>
  <div class="container">
    <div class="loginForm">
      <form @submit.prevent="onSubmit">
        <div class="form-control">
          <label for="email">Email Adddress</label>
          <input
            type="email"
            required
            v-model="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            required
            v-model="password"
            placeholder="minimum 6 characters"
          />
        </div>
        <div class="btn-control">
          <button type="submit" class="submit">
            {{ isLogin ? "Login" : "Sign Up" }}
          </button>
          <button type="button" class="switch" @click="isLogin = !isLogin">
            Switch to {{ isLogin ? "Sign Up" : "Login" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/admin");
        });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
}
.loginForm {
  width: 20rem;
  height: auto;
  margin: auto;
  box-shadow: 2px 4px 5px 2px #aba3a3;
  border-radius: 10px;
  border: 1px solid #aba3a3;
  margin-top: 8rem;
  padding: 2rem;
}
.form-control {
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
}
.form-control label {
  padding-bottom: 5px;
  font-weight: 500;
}
.form-control input {
  border: 1px solid #9e9e9e;
  border-radius: 4px;
  box-shadow: 3px 2px 3px 0px #c1c1c1;
  outline: 0;
  height: 1.1rem;
}
.btn-control {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
}
.submit {
  background-color: black;
  color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #aba3a3;
  height: 25px;
}
.switch {
  border: white;
  height: 22px;
  box-shadow: 2px 2px 2px #aba3a3;
  border-radius: 5px;
}
@media screen and (max-width: 425px) {
  .loginForm {
    width: 60%;
  }
}
</style>
