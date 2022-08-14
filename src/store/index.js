let cart = window.localStorage.getItem("cart");
import { createStore } from "vuex";

export default createStore({
  state: {
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    addToCart(state, item) {
      let found = state.cart.find(
        (product) => product.productId == item.productId
      );
      if (found) {
        found.productQuantity++;
      } else {
        state.cart.push(item);
      }
      this.commit("saveData");
    },
    saveData(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1);
      this.commit("saveData");
    },
    emptyCart(state) {
      state.cart = [];
      this.commit("saveData");
    },
  },
  actions: {},
  modules: {},
  getters: {
    cartCount: (state) => state.cart.length,
  },
});
