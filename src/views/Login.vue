<template>
  <div class="login">
    <h2 class="title">Login</h2>
    <input type="email" id="email" placeholder="email" v-model="email" />
    <input
      class="my-2"
      type="password"
      id="password"
      placeholder="password"
      v-model="password"
    />
    <button class="login-btn" type="button" @click="login">Login</button>
    <router-link class="link text-center" to="/register"
      >don't have account?</router-link
    >
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "loginVue",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log("user", user);
            this.$router.push("home");
          },
          (err) => {
            console.log("err", err);
            alert("please enter correct data!");
          }
        );
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
.login {
  width: 400px;
  height: auto;
  padding: 20px;
  margin: 100px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
}
@media only screen and (max-width: 500px) {
  .login {
    width: 350px;
  }
}
.title {
  text-align: center;
}
input,
.login-btn {
  width: 100%;
  padding: 10px 15px;
  font-size: 18px;
  color: #222;
  border: none;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #eee;
}
input:focus {
  outline: none;
  border: 1px solid dodgerblue;
  background-color: white;
}
.login-btn {
  background-color: dodgerblue;
  cursor: pointer;
  color: #fff;
}
.login-btn:hover {
  opacity: 0.8;
}
.link {
  color: dodgerblue;
  text-align: right;
}
</style>
