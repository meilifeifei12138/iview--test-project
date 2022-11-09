<template>
  <Header class="header">
    <Menu mode="horizontal" active-name="1">
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span-1>
          <div @click="toFrontPage">
            <img class="layout-logo" src="../assets/logo.gif" />
          </div>
        </Col>
        <Col>
          <div class="layout-nav">
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
  data() {
    return {
      isShowPunchCard: false,
    };
  },
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
.layout-logo {
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.header {
  background: #fff;
  boxshadow: "0 2px 3px 2px rgba(0,0,0,.1)";
  height: 100%;
}
</style>
