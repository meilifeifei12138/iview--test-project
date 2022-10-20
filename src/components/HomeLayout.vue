<template>
  <div class="layout">
    <Layout>
      <Header
        :style="{
          background: '#fff',
          boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)',
        }"
      >
        <Menu mode="horizontal" theme="light" active-name="1">
          <Row>
            <Col span-1>
              <img class="layout-logo" src="../assets/logo.gif" />
            </Col>
            <Col span-1>
              <div class="layout-btn">
                <Icon
                  @click="isCollapsed = !isCollapsed"
                  :style="{ margin: '0 20px' }"
                  type="md-menu"
                  size="24"
                />
              </div>
            </Col>
            <Col span-6 offset="7">
              <div class="layout-nav">
                <MenuItem
                  v-for="menuItem in LayoutMenuItem"
                  :key="menuItem.name"
                  :name="menuItem.name"
                >
                  <font-awesome-icon :icon="menuItem.icon" />
                  {{ menuItem.name }}
                </MenuItem>
                <menu-item name="userAvatar">
                  <user-avatar />
                </menu-item>
              </div>
            </Col>
          </Row>
        </Menu>
      </Header>
      <layout>
        <Sider
          :style="{ background: '#fff' }"
          ref="homeLayoutSider"
          hide-trigger
          v-show="isCollapsed"
        >
          <LeftNavigate />
        </Sider>
        <Layout :style="{ padding: ' 24px 24px' }">
          <Content
            :style="{ padding: '24px', minHeight: '500px', background: '#fff' }"
          >
            <router-view />
          </Content>
        </Layout>
      </layout>
    </Layout>
  </div>
</template>

<script>
import UserAvatar from "@/components/UserAvatar";
import LeftNavigate from "@/components/LeftNavigate";
import LayoutMenuItem from "@/utils/LayoutMenuItem";
export default {
  name: "HomeLayout",
  components: { UserAvatar, LeftNavigate },
  data() {
    return {
      LayoutMenuItem,
      isCollapsed: false,
    };
  },
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-btn {
  height: 30px;
  float: left;
  padding-left: 50px;
}
.layout-nav {
  margin: 0 auto;
  margin-right: 20px;
}
</style>
