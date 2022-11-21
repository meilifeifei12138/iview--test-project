<template>
  <div>
    <menu-item
      v-for="menuItem in LoggedInLayoutMenuItem"
      :key="menuItem.value"
      :name="menuItem.value"
    >
      <router-link :to="menuItem.path" class="router-link">
        <div class="layout-header-front">
          <font-awesome-icon :icon="menuItem.icon" />
          {{ menuItem.name }}
        </div>
      </router-link>
    </menu-item>
    <Menu-item name="checkin">
      <CheckinPopTip />
    </Menu-item>
    <Menu-item name="userAvatar">
      <UserAvatar />
    </Menu-item>
  </div>
</template>

<script>
import LoggedInLayoutMenuItem from "@/utils/LayoutMenu/LoggedInLayoutMenuItem";
import UserAvatar from "@/components/UserAvatar";
import CheckinPopTip from "@/components/CheckinPoptip";

export default {
  name: "SignedInLayoutHeaderMenuItem",
  data() {
    return {
      LoggedInLayoutMenuItem,
    };
  },
  components: {
    UserAvatar,
    CheckinPopTip,
  },
};
</script>

<style scoped>
@import "@/css/layout-header-front.css";
.router-link {
  display: block;
  color: #535b6c;
}
</style>
