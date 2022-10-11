<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <img class="layout-logo" src="../assets/logo.gif" />
          <div class="layout-btn">
            <Button
              type="text"
              ghost
              icon="md-reorder"
              @click="showSider = !showSider"
            />
          </div>
          <div class="layout-nav">
            <MenuItem
              v-for="menuItem in LayoutMenuItem"
              :key="menuItem.name"
              :name="menuItem.name"
            >
              {{ menuItem.name }}
            </MenuItem>
            <menu-item name="userAvatar">
              <user-avatar />
            </menu-item>
          </div>
        </Menu>
      </Header>
      <layout>
        <Sider hide-trigger :style="{ background: '#fff' }" v-show="showSider">
          <LeftNavigate />
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
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
  name: "HelloWorld",
  components: { UserAvatar, LeftNavigate },
  data() {
    return {
      LayoutMenuItem,
      showSider: false,
      isFullscreen: false,
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-btn {
  width: 50px;
  height: 30px;
  float: left;
  padding-left: 50px;
}
.layout-nav {
  width: 450px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
