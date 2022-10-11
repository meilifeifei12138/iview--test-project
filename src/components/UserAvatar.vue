<template>
  <div class="user-avatar-dropdown">
    <Dropdown>
      <Badge>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
      </Badge>
      <Icon :size="18" type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心
          <Badge :count="messageUnreadCount" />
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
  props: {
    messageUnreadCount: {
      type: Number,
      default: 8,
    },
  },
};
</script>

<style scoped></style>
