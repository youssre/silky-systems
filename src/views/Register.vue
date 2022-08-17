<template>
  <div class="register">
    <h2 class="title">Sign Up</h2>
    <input type="text" placeholder="Name" v-model="name" id="name" />
    <input type="email" id="email" placeholder="email" v-model="email" />
    <input
      type="password"
      id="password"
      placeholder="password"
      v-model="password"
    />
    <button type="button" @click="register">register</button>
    <router-link class="link" to="/">you have account?</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "registerVue",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log("user", user);
            alert("added successfully");
            this.$router.push("/");
          },
          (err) => {
            console.log("err", err);
            alert("error!");
          }
        );
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.register {
  width: 400px;
  height: auto;
  padding: 20px;
  margin: 100px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
}
@media only screen and (max-width: 500px) {
  .register {
    width: 350px;
  }
}
title {
  text-align: center;
}
input,
button {
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
button {
  background-color: dodgerblue;
  cursor: pointer;
  color: #fff;
}
button:hover {
  opacity: 0.8;
}
.link {
  color: dodgerblue;
  text-align: right;
}
</style>
