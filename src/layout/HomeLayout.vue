<template>
  <div>
    <LayoutHeader />
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
  </div>
</template>

<script>
import InitialTableView from "@/views/InitialTbaleView";
import OptimizedTableView from "@/views/OptimizedTableView";
import RoutesInf from "@/utils/RoutesInf";
import LayoutHeader from "@/components/LayoutHeader";
export default {
  name: "HomeLayout",
  components: {
    OptimizedTableView,
    InitialTableView,
    LayoutHeader,
  },
  data() {
    return {
      RoutesInf,
    };
  },
};
</script>

<style scoped></style>
