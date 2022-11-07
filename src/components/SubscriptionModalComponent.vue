<template>
  <Modal
    v-model="showModal"
    title="订阅"
    @on-ok="confirmBtn"
    ok-text="去订阅"
    @on-cancel="cancelBtn"
    cancel-text="再考虑考虑"
  >
    <slot name="content" />
  </Modal>
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
      this.$router.push({ path: RoutesInf.subscriptionPage.path });
    },
  },
};
</script>

<style scoped></style>
