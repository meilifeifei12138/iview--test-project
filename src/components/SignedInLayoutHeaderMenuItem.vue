<template>
  <div>
    <Menu-item
      v-for="menuItem in LoggedInLayoutMenuItem"
      :key="menuItem.value"
      :name="menuItem.value"
    >
      <router-link :to="menuItem.path" style="display: block; color: #535b6c">
        <div class="layoutHeaderFront">
          <font-awesome-icon :icon="menuItem.icon" />
          {{ menuItem.name }}
        </div>
      </router-link>
    </Menu-item>
    <Menu-item name="checkin">
      <CheckinPoptip />
    </Menu-item>
    <Menu-item name="userAvatar">
      <UserAvatar />
    </Menu-item>
  </div>
</template>

<script>
import LoggedInLayoutMenuItem from "@/utils/LayoutMenu/LoggedInLayoutMenuItem";
import UserAvatar from "@/components/UserAvatar";
import CheckinPoptip from "@/components/CheckinPoptip";

export default {
  name: "SignedInLayoutHeaderMenuItem",
  data() {
    return {
      LoggedInLayoutMenuItem,
    };
  },
  components: {
    UserAvatar,
    CheckinPoptip,
  },
};
</script>

<style scoped>
@import "@/css/layoutHeader.css";
</style>
