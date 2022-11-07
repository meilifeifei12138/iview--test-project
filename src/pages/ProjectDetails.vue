<template>
  <div>
    <LayoutHeader />
    <Layout :style="{ padding: '24px 24px' }">
      <Card style="margin-bottom: 24px">
        <h1 style="text-align: center">{{ projectDate.title }}</h1>
        <span>截止日期：{{ projectDate.announcementDate }}</span>
        <br />
        <span>项目简介：xxxxxxx</span>
        <br />
        <span
          >项目原地址:
          <a @click="jumpOriginAddress">{{
            projectDate.website | urlHidden
          }}</a>
        </span>
      </Card>

      <Card>
        <div class="splitFatherBox">
          <Split v-model="splitProportion">
            <template #left>
              <div class="splitPane"></div>
            </template>
            <template #trigger>
              <div class="trigger">
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right-arrow-left"
                  class="triggerIcon"
                />
              </div>
            </template>
            <template #right>
              <div class="splitPane"></div>
            </template>
          </Split>
        </div>
      </Card>
      <ModalComponent ref="subscriptionModal">
        <template #content>
          <p>打钱打钱</p>
        </template>
      </ModalComponent>
    </Layout>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import NewTableDate from "@/utils/ProjectTable/NewTableDate";
import ModalComponent from "@/components/SubscriptionModalComponent";
export default {
  name: "ProjectDetails",
  data() {
    return {
      isSubscribe: false,
      NewTableDate,
      projectDate: {},
      splitProportion: 0.5,
    };
  },
  components: {
    ModalComponent,
    LayoutHeader,
  },
  created() {
    this.getProjectDetails();
  },
  methods: {
    getProjectDetails() {
      //  request
      this.projectDate = NewTableDate[3];
    },
    jumpOriginAddress() {
      if (!this.isSubscribe) {
        this.$refs.subscriptionModal.showModal = true;
      }
    },
  },
  filters: {
    //没写完的；
    urlHidden: function (value) {
      return value.replace(/\.+/g, "******");
    },
  },
};
</script>

<style scoped>
.splitFatherBox {
  height: 40rem;
  border: 1px solid #dcdee2;
}
.splitPane {
  width: 100%;
  height: 40rem;
  background-color: #f5f7f9;
  padding: 1.5rem;
  overflow-y: scroll;
}
.trigger {
  width: 0.25rem;
  height: 100%;
  background: #d3d3d3;
  border-top: none;
  border-bottom: none;
  cursor: col-resize;
}
.triggerIcon {
  color: #2db7f5;
  position: absolute;
  left: 0.125rem;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
