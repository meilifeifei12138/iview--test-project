<template>
  <div class="user-avatar-dropdown">
    <Dropdown>
      <Badge>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown" />
      <template #list>
        <DropdownMenu>
          <DropdownItem name="message">
            <Button type="text" @click="toMessageCenter">
              消息中心
              <Badge :count="messageUnreadCount" />
            </Button>
          </DropdownItem>
          <DropdownItem name="logout">
            <Button type="text" @click="loginOut">退出登录</Button>
          </DropdownItem>
        </DropdownMenu>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import RoutesInf from "@/utils/RoutesInf";
export default {
  name: "UserAvatar",
  props: {
    messageUnreadCount: {
      type: Number,
      default: 8,
    },
  },
  methods: {
    loginOut() {
      //退出登陆 成功
      localStorage.removeItem("UserInfo");
      this.$Notice.success({
        title: "Success",
        desc: "Logged Out Successful!",
      });
      this.$router.push({ name: RoutesInf.loginPage.name });
    },
    toMessageCenter() {
      this.$router.push(RoutesInf.messageCenter.path);
    },
  },
};
</script>

<style scoped></style>
