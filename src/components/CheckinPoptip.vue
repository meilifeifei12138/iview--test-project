<template>
  <Poptip trigger="hover" title="Title" content="content">
    <div class="layout-header-front">
      <font-awesome-icon icon=" fa-solid fa-calendar" />
      签到
    </div>
    <template #title>
      <div>签到</div>
    </template>
    <template #content>
      <div class="checked-box">
        <div>
          <p>已连续签到{{ consecutiveDay }}天</p>
          <Row :gutter="16">
            <Col span="3" v-for="item in CheckedInDate" :key="item.value">
              <div class="checked-date-box" @click="checkedIn(item)">
                <span>{{ item.value }} </span>
                <div>
                  <font-awesome-icon
                    :icon="
                      item.isChecked ? 'fa-solid fa-check' : 'fa-soled fa-lock'
                    "
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <p>
          <router-link :to="RoutesInf.checkinPage.path">
            更多功能请前往
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </router-link>
        </p>
      </div>
    </template>
  </Poptip>
</template>

<script>
import RoutesInf from "@/utils/RoutesInf";
import CheckedInDate from "@/utils/CheckedinDate";
export default {
  name: "CheckinPopTip",
  data() {
    return {
      RoutesInf,
      CheckedInDate,
      consecutiveDay: 0,
    };
  },
  methods: {
    checkedIn(clickedItem) {
      if (clickedItem.isChecked) {
        this.$Notice.success({
          title: "已签到",
        });
      } else {
        clickedItem.isChecked = true;
        this.$Notice.success({
          title: "签到成功",
        });
      }
    },
  },
};
</script>

<style scoped>
.checked-box {
  width: 20rem;
  text-align: center;
}
.checked-date-box {
  width: 2.4rem;
  height: 3rem;
  background-color: skyblue;
}
</style>
