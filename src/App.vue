<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
html:lang(ar) * {
  direction: rtl;
  text-align: right;
}
@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  color: #333;
  nav {
    i {
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
  .card {
    border: 1px solid #dddddd;
    -webkit-box-shadow: 3px 10px 5px -2px rgba(143, 132, 143, 0.74);
    -moz-box-shadow: 3px 10px 5px -2px rgba(143, 132, 143, 0.74);
    box-shadow: 3px 10px 5px -2px rgba(143, 132, 143, 0.74);
  }
}
</style>
