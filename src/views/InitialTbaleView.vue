<template>
  <div>
    <Table
      border
      :columns="TableColumns"
      :data="TableDate"
      :loading="tableLoading"
    >
      <template #action="{ row, index }">
        <Row>
          <Col span="12">
            <Button @click="favorites(row)">
              <font-awesome-icon
                icon="fa-solid fa-heart"
                :style="{
                  color: row.is_saved ? '#E63F00' : defaultContentColor,
                }"
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
    <ModalComponent ref="subscriptionModal" />
  </div>
</template>

<script>
const defaultContentColor = "#515a6e";

import SubscriptionModalComponent from "@/components/SubscriptionModalComponent";

import TableColumns from "@/utils/ProjectTable/TableColumns";
import TableDate from "@/utils/ProjectTable/TableDate";

export default {
  name: "HomeView",
  data() {
    return {
      TableColumns,
      TableDate,
      defaultContentColor,
      likeProjectIconColor: defaultContentColor,
      tableLoading: false,
    };
  },
  components: {
    ModalComponent: SubscriptionModalComponent,
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
      this.TableDate.splice(index, 1);
    },
    showSubscriptionModal() {
      this.$refs.subscriptionModal.showModal = true;
    },
  },
};
</script>

<style scoped></style>
