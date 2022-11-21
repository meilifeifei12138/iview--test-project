<template>
  <Header class="header">
    <Menu mode="horizontal" active-name="1">
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span="1">
          <div @click="toFrontPage">
            <img class="layout-logo" src="../assets/logo.gif" alt="我是logo" />
          </div>
        </Col>
        <Col>
          <div>
            <slot name="menuItem">
              <SignedInLayoutHeaderMenuItem />
            </slot>
          </div>
        </Col>
      </Row>
    </Menu>
  </Header>
</template>

<script>
import SignedInLayoutHeaderMenuItem from "@/components/SignedInLayoutHeaderMenuItem";
import RoutesInf from "@/utils/RoutesInf";
export default {
  name: "LayoutHeaderPage",
  components: {
    SignedInLayoutHeaderMenuItem,
  },
  methods: {
    toFrontPage() {
      this.$router.push({ name: RoutesInf.frontPage.name });
    },
  },
};
</script>

<style scoped>
@import "@/css/layout-logo.css";
.header {
  background: #fff;
  height: 100%;
}
</style>
