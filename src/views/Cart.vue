<template>
  <navbar></navbar>
  <div class="cart">
    <div class="container" v-if="this.$store.state.cart == 0">
      <div>
        <h1 class="text-danger lead my-4 mx-4">
          {{ $t("Your cart is empty!") }} <br />
          <span>{{ $t("add more products Now") }}</span>
        </h1>
        <router-link to="/home" class="btn btn-outline-secondary mx-4">{{
          $t("add product")
        }}</router-link>
      </div>
    </div>
    <div class="container" v-else>
      <h2 class="text-center text-primary mt-3">{{ $t("Shopping Cart") }}</h2>
      <div class="res">
        <table class="table table-striped text-center my-4">
          <thead>
            <tr class="text-center">
              <th class="lead">{{ $t("ID") }}</th>
              <th class="lead">{{ $t("Name") }}</th>
              <th class="lead">{{ $t("Price") }}</th>
              <th class="lead">{{ $t("Quantity") }}</th>
              <th class="lead">{{ $t("Add") }} | {{ $t("Remove") }}</th>
              <th class="lead">{{ $t("Remove") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="(item, index) in cart" :key="index">
              <td>{{ item.productId }}</td>
              <td>
                <span class="product-title">{{ $t(item.productTitle) }}</span>
              </td>
              <td>
                <span class="price">{{ item.productprice }}</span>
                <span class="dolar">$</span>
              </td>
              <td>
                <span>{{ item.productQuantity }}</span>
              </td>
              <td class="d-flex justify-content-between">
                <button
                  @click.prevent="increaseCounter(item)"
                  class="btn btn-success text-center"
                >
                  +
                </button>
                |
                <button
                  @click.prevent="decreaseCounter(item)"
                  class="btn btn-danger text-center"
                >
                  -
                </button>
              </td>

              <td>
                <button
                  class="btn"
                  @click="$store.commit('removeFromCart', item)"
                >
                  <svg
                    height="15pt"
                    viewBox="0 0 329.26933 329"
                    width="15pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="footer d-flex justify-content-between align-items-center">
        <button class="btn btn-outline-secondary" @click.prevent="goBack">
          {{ $t("Continue Shpping") }}
        </button>
        <div class="lead">
          <span class="h5"
            >{{ $t("Subtotal: ")
            }}<span class="number">${{ Subtotaltotal }}</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapState } from "vuex";
export default {
  components: {
    Navbar,
  },
  name: "CartView",
  computed: {
    ...mapState(["cart"]),
    Subtotaltotal() {
      return this.cart.reduce((total, p) => {
        return total + p.productprice * p.productQuantity;
      }, 0);
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    increaseCounter(item) {
      let found = this.cart.find(
        (product) => product.productId == item.productId
      );
      found.productQuantity++;
      this.$store.commit("saveData");
    },
    decreaseCounter(item) {
      let found = this.cart.find(
        (product) => product.productId == item.productId
      );
      if (found.productQuantity === 1) {
        this.$store.commit("removeFromCart", found.productQuantityId);
      } else {
        found.productQuantity--;
      }
      this.$store.commit("saveData");
    },
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 500px) {
  .res {
    overflow-x: scroll;
  }
}
</style>
