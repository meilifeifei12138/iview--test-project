<template>
  <div>
    <Modal
      v-model="showModal"
      title="订阅"
      @on-ok="confirmBtn"
      ok-text="去订阅"
      cancel-text="再考虑考虑"
    >
      <slot name="content">
        <h1>打钱打钱</h1>
      </slot>
    </Modal>
  </div>
</template>

<script>
import RoutesInf from "@/utils/RoutesInf";
export default {
  name: "SubscriptionModalComponents",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    confirmBtn() {
      this.$router.push({ path: RoutesInf.subscribePage.path });
    },
  },
};
</script>

<style scoped></style>
