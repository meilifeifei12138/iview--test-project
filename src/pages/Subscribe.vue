<template>
  <div>
    <LayoutHeader />
    <Card class="topCard">
      <h1>Subscribe</h1>
    </Card>
    <Card>
      <Row :gutter="16">
        <Col
          span="6"
          v-for="subscribeItem in SubscribeInfo"
          :key="subscribeItem.level"
        >
          <Card>
            <h1>{{ subscribeItem.level }}</h1>
            <p>{{ subscribeItem.price }}</p>
          </Card>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import SubscribeInfo from "@/utils/SubscribeInfo";
export default {
  name: "SubscribePage",
  components: {
    LayoutHeader,
  },
  data() {
    return {
      SubscribeInfo,
    };
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
