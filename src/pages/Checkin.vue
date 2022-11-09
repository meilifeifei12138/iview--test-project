<template>
  <div>
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
    <h1>日历打卡</h1>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import CheckinLayoutMenuItem from "@/utils/LayoutMenu/CheckinLayoutMenuItem";
export default {
  name: "CheckinPage",
  data() {
    return {
      CheckinLayoutMenuItem,
    };
  },
  components: {
    LayoutHeader,
  },
};
</script>

<style scoped>
@import "@/css/layoutheader.css";
</style>
