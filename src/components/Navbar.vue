<template>
  <nav class="navbar navbar-expand-lg bg-light py-3">
    <div class="container d-flex justify-content-between align-items-center">
      <router-link class="navbar-brand lead" to="/home">{{
        $t("Shop")
      }}</router-link>
      <div class="d-flex gap-5 justify-content-between align-items-center">
        <div class="w-100">
          <router-link class="nav-link cart" to="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="badge bg-danger">{{ count }}</span>
          </router-link>
        </div>
        <select
          class="form-control"
          v-model="lang"
          @change="handlechange($event)"
        >
          <option value="en">english</option>
          <option value="ar">عربى</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
    };
  },
  methods: {
    handlechange(event) {
      localStorage.setItem("lang", event.target.value);
      console.log(event.target.value);
      window.location.reload();
    },
  },
  mounted() {
    this.lang = localStorage.getItem("lang");
  },
  computed: {
    ...mapGetters({
      count: "cartCount",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css");
.cart {
  position: relative;
}
.badge {
  position: absolute;
  top: -15px;
  right: -14px;
}
.form-control {
  width: auto;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}
.fa-cart-shopping {
  color: dodgerblue;
}
</style>
