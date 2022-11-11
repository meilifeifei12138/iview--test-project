<template>
  <div>
    <h1>我是支付详情页</h1>
    <h1>我是你点击的价格{{ clickedPrice }}</h1>
  </div>
</template>

<script>
export default {
  name: "PayPage",
  created() {
    this.clickedPrice = this.$route.params.priceDetails;
  },
  data() {
    return {
      clickedPrice: "",
    };
  },
};
</script>

<style scoped></style>
