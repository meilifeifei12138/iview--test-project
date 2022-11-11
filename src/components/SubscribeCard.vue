<template>
  <Row :gutter="16">
    <Col
      span="6"
      v-for="subscribeItem in SubscribeInfo"
      :key="subscribeItem.level"
    >
      <Card style="padding-left: 3rem; padding-right: 3rem">
        <div class="subscribeCard">
          <h1>{{ subscribeItem.level }}</h1>
          <p>{{ subscribeItem.price }}</p>
        </div>
        <ul>
          <li v-for="item in subscribeItem.details" :key="item">
            {{ item }}
          </li>
        </ul>
        <div style="text-align: center; margin-top: 5rem">
          <Button type="primary" @click="toPayPage(subscribeItem.price)">
            {{ subscribeItem.subscribeBtnMessage }}
          </Button>
        </div>
      </Card>
    </Col>
  </Row>
</template>

<script>
import SubscribeInfo from "@/utils/SubscribeInfo";
import RoutesInf from "@/utils/RoutesInf";
export default {
  name: "SubscribeCard",
  data() {
    return {
      SubscribeInfo,
    };
  },
  methods: {
    toPayPage(price) {
      this.$router.push({
        name: RoutesInf.payPage.name,
        params: { priceDetails: price },
      });
    },
  },
};
</script>

<style scoped></style>
