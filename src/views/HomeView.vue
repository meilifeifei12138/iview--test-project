<template>
  <Table border :columns="tableColumns" :data="tableDate">
    <template #action="{ row, index }">
      <Row>
        <Col span="12">
          <font-awesome-icon
            icon="fa-solid fa-heart"
            @click="favorites(row)"
            :style="{ color: row.is_saved ? 'pink' : defaultContentColor }"
          />
        </Col>
        <Col span="12">
          <font-awesome-icon icon="fa-solid fa-trash" @click="remove(index)" />
        </Col>
      </Row>
    </template>
  </Table>
</template>

<script>
const defaultContentColor = "#515a6e";

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
    };
  },
  methods: {
    favorites(row) {
      // this.row.id;
      // request
      console.log(row.is_saved);
    },
    remove(index) {
      this.tableDate.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
