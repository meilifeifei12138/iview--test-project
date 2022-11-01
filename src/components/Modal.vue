<template>
  <Modal v-model="showModal" @on-ok="confirmBtn" @on-cancel="cancelBtn">
    <slot name="header">
      <p>订阅</p>
    </slot>
    <slot name="content" />
  </Modal>
</template>

<script>
export default {
  name: "ModalComponents",
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    confirmBtn() {
      this.$Message.info("Clicked ok");
    },
    cancelBtn() {
      this.$Message.info("Clicked cancel");
    },
  },
};
</script>

<style scoped></style>
