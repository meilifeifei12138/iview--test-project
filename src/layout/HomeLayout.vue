<template>
  <div>
    <LayoutHeader />
    <layout>
      <Sider
        :style="{ background: '#fff' }"
        ref="homeLayoutSider"
        hide-trigger
        v-show="isCollapsed"
      >
        <LeftNavigate />
      </Sider>
      <Layout :style="{ padding: ' 24px 24px' }">
        <Tabs value="optimizedVersion">
          <TabPane label="第一版" name="initialVersion">
            <InitialTableView />
          </TabPane>
          <TabPane label="第二版" name="optimizedVersion">
            <OptimizedTableView />
          </TabPane>
        </Tabs>
      </Layout>
    </layout>
  </div>
</template>

<script>
import InitialTableView from "@/views/InitialTbaleView";
import OptimizedTableView from "@/views/OptimizedTableView";
import RoutesInf from "@/utils/RoutesInf";
import LeftNavigate from "@/components/LeftNavigate";
import LayoutHeader from "@/components/LayoutHeader";
export default {
  name: "HomeLayout",
  components: {
    OptimizedTableView,
    InitialTableView,
    LeftNavigate,
    LayoutHeader,
  },
  data() {
    return {
      RoutesInf,
      isCollapsed: false,
    };
  },
  methods: {
    toHomePage() {
      this.$router.push({ name: RoutesInf.frontPage.name });
    },
  },
};
</script>

<style scoped></style>
