<template>
  <Poptip trigger="hover" title="Title" content="content">
    <router-link
      :to="RoutesInf.checkinPage.path"
      style="display: block; color: #535b6c"
    >
      <div class="layoutHeaderFront">
        <font-awesome-icon icon=" fa-solid fa-calendar" />
        签到
      </div>
    </router-link>
    <template #title>
      <div>签到</div>
    </template>
    <template #content>
      <div style="width: 19.5rem; text-align: center">
        <p>已连续签到{{ consecutiveDay }}天</p>
        <Row :gutter="5">
          <Col span-3 v-for="item in CheckedinDate" :key="item.value">
            <div
              style="width: 2.5rem; height: 3rem; background-color: skyblue"
              @click="signedIn(item)"
            >
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
    </template>
  </Poptip>
</template>

<script>
import RoutesInf from "@/utils/RoutesInf";
import CheckedinDate from "@/utils/CheckedinDate";
export default {
  name: "CheckinPoptip",
  data() {
    return {
      RoutesInf,
      CheckedinDate,
      consecutiveDay: 0,
    };
  },
  methods: {
    signedIn(clickedItem) {
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

<style scoped></style>
