<template>
  <div class="col-md-4 mb-5">
    <div class="card">
      <img class="card-img-top" :src="image" :alt="title" height="250px" />
      <div class="card-body">
        <h5 class="card-title">{{ $t(title) }}</h5>
        <span class="badge badge-pill badge-light p-2">{{ price }} $</span>
        <p class="card-text small">
          {{ $t("para") }}
        </p>
        <button
          type="button"
          class="btn btn-outline-primary h4"
          @click="addToCart()"
        >
          {{ $t("add") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
  props: ["id", "title", "body", "image", "price"],
  data() {
    return {
      item: {
        productId: this.id,
        productTitle: this.title,
        productBody: this.body,
        productImage: this.image,
        productprice: this.price,
        productQuantity: 1,
      },
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
      this.$notify({
        group: "foo",
        duration: 2000,
        type: "success",
        text:
          localStorage.getItem("lang") == "en"
            ? "product added to cart successfully!"
            : "تمت إضافة المنتج إلى عربة التسوق بنجاح!",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 200px;
}
</style>
