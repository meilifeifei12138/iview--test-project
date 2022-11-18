<template>
  <div>
    <LayoutHeader />
    <Card class="topCard">
      <h1>Subscribe</h1>
    </Card>
    <Card>
      <p style="height: 5rem; line-height: 5rem; text-align: center">
        按年订阅更优惠
      </p>
      <SubscribeCard />
    </Card>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import SubscribeCard from "@/components/SubscribeCard";
export default {
  name: "SubscribePage",
  components: {
    LayoutHeader,
    SubscribeCard,
  },
};
</script>

<style scoped>
.topCard {
  height: 25vh;
  width: 100%;
  background-color: #2db7f5;
}
</style>
