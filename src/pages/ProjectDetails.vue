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
          <a :href="projectDate.website">{{ projectDate.website }}</a>
        </span>
      </Card>

      <Card>
        <div class="splitFatherBox">
          <Split v-model="splitProportion">
            <template #left>
              <div class="splitPane">左边内容</div>
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
              <div class="splitPane">右边内容</div>
            </template>
          </Split>
        </div>
      </Card>
    </Layout>
  </div>
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import NewTableDate from "@/utils/ProjectTable/NewTableDate";
export default {
  name: "ProjectDetails",
  data() {
    return {
      projectDate: {},
      splitProportion: 0.5,
    };
  },
  components: {
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
