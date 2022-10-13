<template>
  <div>
    <Table
      border
      :columns="tableColumns"
      :data="tableDate"
      :loading="tableLoading"
    >
      <template #action="{ row, index }">
        <Row>
          <Col span="12">
            <Button @click="favorites(row)">
              <font-awesome-icon
                icon="fa-solid fa-heart"
                :style="{ color: row.is_saved ? 'pink' : defaultContentColor }"
              />
            </Button>
          </Col>
          <Col span="12">
            <Button @click="remove(index)">
              <font-awesome-icon icon="fa-solid fa-trash" />
            </Button>
          </Col>
        </Row>
      </template>
      <template #unLocked="{ row }">
        <Tooltip content="Locked" placement="top-start">
          <Button v-if="row.is_unlocked" @click="showSubscriptionModal">
            <font-awesome-icon icon="fa-solid fa-lock" />
          </Button>
        </Tooltip>
      </template>
    </Table>
    <ModalComponent ref="subscriptionModal">
      <template #header>
        <!--        not finished-->
        <h1>subscription</h1>
      </template>
      <template #content>
        <!--      not finished-->
        <h1>订阅</h1>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
const defaultContentColor = "#515a6e";

import ModalComponent from "@/components/Modal";

import tableColumns from "@/utils/ProjectTable/TableColumns";
import tableDate from "@/utils/ProjectTable/TableDate";

export default {
  name: "HomeView",
  data() {
    return {
      tableColumns,
      tableDate,
      defaultContentColor,
      likeProjectIconColor: defaultContentColor,
      tableLoading: false,
    };
  },
  components: {
    ModalComponent,
  },
  methods: {
    favorites(row) {
      // row.id;
      // request
      const that = this;
      this.tableLoading = true;
      setTimeout(function () {
        that.tableLoading = false;
        row.is_saved = !row.is_saved;
      }, 1000);
    },
    remove(index) {
      this.tableDate.splice(index, 1);
    },
    showSubscriptionModal() {
      this.$refs.subscriptionModal.showModal = true;
    },
  },
};
</script>

<style scoped></style>
