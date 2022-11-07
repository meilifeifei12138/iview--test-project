<template>
  <Header
    :style="{
      background: '#fff',
      boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
    }"
  >
    <Menu mode="horizontal" active-name="1">
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span-1>
          <div @click="toHomePage">
            <img class="layout-logo" src="../assets/logo.gif" />
          </div>
        </Col>
        <Col>
          <div class="layout-nav">
            <Menu-item
              v-for="menuItem in ProjectDetailsLayoutMenuItem"
              :key="menuItem.name"
              :name="menuItem.name"
            >
              <router-link
                :to="menuItem.path"
                style="display: block; color: #535b6c"
              >
                <div class="layoutHeaderFront">
                  <font-awesome-icon :icon="menuItem.icon" />
                  {{ menuItem.name }}
                </div>
              </router-link>
            </Menu-item>
            <menu-item name="userAvatar">
              <UserAvatar />
            </menu-item>
          </div>
        </Col>
      </Row>
    </Menu>
  </Header>
</template>

<script>
import RoutesInf from "@/utils/RoutesInf";
import ProjectDetailsLayoutMenuItem from "@/utils/ProjectDetailsLayoutMenuItem";
import UserAvatar from "@/components/UserAvatar";
export default {
  name: "LayoutHeaderPage",
  data() {
    return {
      ProjectDetailsLayoutMenuItem,
    };
  },
  components: {
    UserAvatar,
  },
  methods: {
    toHomePage() {
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
.layoutHeaderFront:hover {
  color: #3399ff;
}
</style>
