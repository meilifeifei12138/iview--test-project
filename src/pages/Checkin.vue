<template>
  <div>
    <!--    头部导航栏的菜单-->
    <LayoutHeader>
      <template #menuItem>
        <Menu-item
          v-for="menuItem in CheckinLayoutMenuItem"
          :key="menuItem.value"
          :name="menuItem.value"
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
      </template>
    </LayoutHeader>
    <!--  头部导航栏的菜单  -->

    <h1>补签 等功能 推荐用户订阅</h1>
    <SubscribeCard />
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import CheckinLayoutMenuItem from "@/utils/LayoutMenu/CheckinLayoutMenuItem";
import SubscribeCard from "@/components/SubscribeCard";
export default {
  name: "CheckinPage",
  data() {
    return {
      CheckinLayoutMenuItem,
    };
  },
  components: {
    LayoutHeader,
    SubscribeCard,
  },
};
</script>

<style scoped>
@import "@/css/layoutHeader.css";
</style>
