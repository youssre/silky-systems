<template>
  <navbar></navbar>
  <div class="home">
    <div class="container">
      <notifications group="foo" position="middle left" />
      <div class="row">
        <input
          type="text"
          placeholder="Search for Products"
          v-model="search"
          class="form-control m-3 mt-1 w-50"
        />
      </div>
      <div class="row">
        <Card
          v-for="product in filteredProducts"
          :key="product.id"
          :title="product.title"
          :id="product.id"
          :image="product.image"
          :body="product.body"
          :price="product.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Navbar from "@/components/Navbar.vue";
import data from "../../db.json";
//import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      products: data,
      search: "",
    };
  },
  components: {
    Card,
    Navbar,
  },
  created() {
    console.log("test", this.products);
  },
  // mounted() {
  //   axios.get(" http://localhost:3000/data").then((res) => {
  //     this.products = Object.values(res.data);
  //     console.log(typeof this.products);
  //   });
  // },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        if (product.title.toLowerCase() === product.title) {
          return product.title.match(this.search);
        } else {
          return product.title.toLowerCase().match(this.search.toLowerCase());
        }
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  padding: 50px 0;
}
</style>
