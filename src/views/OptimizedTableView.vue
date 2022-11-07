<template>
  <div>
    <Card
      style="
        height: auto;
        margin-bottom: 15px;
        padding-left: 10px;
        border-radius: 8px;
      "
    >
      <Row :gutter="16" style="padding-bottom: 15px">
        <Col span="8">
          <div style="margin-bottom: 10px">
            <Input
              search
              autocomplete="off"
              placeholder="关键词"
              style="line-height: 80px"
              enter-button="search"
            />
            <span>热门搜索：xxx ,xxx ,xxx</span>
          </div>
        </Col>
        <Col span="8">
          <Input
            search
            autocomplete="off"
            placeholder="公司"
            style="line-height: 80px"
            enter-button="search"
          />
        </Col>
        <Col span="8">
          <Input
            search
            autocomplete="off"
            placeholder="编号"
            style="line-height: 80px"
            enter-button="search"
          />
        </Col>
      </Row>
      <div style="margin: 10px 0">
        <router-link :to="RoutesInf.subscriptionPage.path">
          订阅使用更多功能
        </router-link>
      </div>
      <Row>
        <Col span="6">
          <div>
            <span>国家：</span>
            <span @mousedown="showSubscriptionModal">
              <Select
                v-model="countrySelectModel"
                :model-value="checkAll"
                :disabled="isDisabledSelected"
                style="width: 200px"
              >
                <Option
                  v-for="item in CountryList"
                  :value="item.value"
                  :key="item.key"
                  >{{ item.value }}</Option
                >
              </Select>
            </span>
          </div>
        </Col>
        <Col span="6">
          <div>
            <span>状态 ：</span>
            <span @mousedown="showSubscriptionModal">
              <Select
                v-model="countrySelectModel"
                :disabled="isDisabledSelected"
                style="width: 200px"
              >
                <Option
                  v-for="item in TenderStatus"
                  :value="item.status"
                  :key="item.status"
                  >{{ item.status }}</Option
                >
              </Select>
            </span>
          </div>
        </Col>
      </Row>
    </Card>
    <Card>
      <Card style="margin: 10px 0">
        <Row type="flex" justify="end" class="code-row-bg">
          <div style="line-height: 32px; margin-right: 10px">
            批量操作 ：已选中{{ selectedDate.length }}项
          </div>
          <Button
            type="primary"
            @click="collectedSelectedDate"
            style="margin-right: 10px"
            :loading="isCollectedAllProjectBtnLoading"
            >收藏
          </Button>
          <Button type="primary" style="margin-right: 10px">xxxx</Button>
          <Button type="primary" style="margin-right: 10px">xxxx</Button>
          <Button type="primary" style="margin-right: 10px">xxxx</Button>
        </Row>
      </Card>
      <Table
        border
        :columns="NewTableColumns"
        :data="NewTableDate"
        :loading="isLoading"
        style="margin-bottom: 25px"
        @on-selection-change="selectionChanged"
      >
        <template #isCollected="{ row }">
          <Icon
            :type="row.isCollected ? 'md-star' : 'md-star-outline'"
            :color="row.isCollected ? '#ff9900' : ''"
            size="25"
            @click="collectedProject(row)"
          />
        </template>
      </Table>
      <hr />
      <Row type="flex" justify="end" class="code-row-bg">
        <Page
          :total="pageOption.totalNum"
          :page-size-opts="pageOption.pageSize"
          style="margin-top: 10px"
          show-total
          show-elevator
          show-sizer
        />
      </Row>
    </Card>
    <Modal ref="subscriptionModal">
      <template #content>
        <h1>打钱</h1>
        <h1>打钱</h1>
        <h1>打钱</h1>
        <h1>打钱</h1>
      </template>
    </Modal>
  </div>
</template>

<script>
import NewTableDate from "@/utils/ProjectTable/NewTableDate";
import NewTableColumns from "@/utils/ProjectTable/NewTableColumns";
import RoutesInf from "@/utils/RoutesInf";
import CountryList from "@/utils/CountryList";
import TenderStatus from "@/utils/TenderStatus";
import ModalComponent from "@/components/SubscriptionModalComponent";
export default {
  name: "OptimizedTableView",
  components: {
    Modal: ModalComponent,
  },
  data() {
    return {
      NewTableColumns,
      RoutesInf,
      NewTableDate,
      CountryList,
      TenderStatus,
      isLoading: false,
      checkAll: false,
      countrySelectModel: "",
      isDisabledSelected: true,
      isCollectedAllProjectBtnLoading: false,
      selectedDate: [],
      pageOption: {
        totalNum: 1000,
        pageSize: [15, 25, 35, 45, 50],
      },
    };
  },
  watch: {
    countrySelectModel(newVal) {
      console.log(newVal);
    },
  },
  methods: {
    showSubscriptionModal() {
      if (this.isDisabledSelected) {
        this.$refs.subscriptionModal.showModal = true;
      }
    },
    collectedProject(row) {
      this.isLoading = true;
      const that = this;
      setTimeout(function () {
        row.isCollected = !row.isCollected;
        that.isLoading = false;
      }, 1000);
    },
    collectedSelectedDate() {
      this.isLoading = true;
      this.isCollectedAllProjectBtnLoading = true;
      this.selectedDate.forEach((value) => {
        value.isCollected = true;
      });
      const that = this;
      setTimeout(function () {
        that.isCollectedAllProjectBtnLoading = false;
        that.isLoading = false;
      }, 1000);
    },
    selectionChanged(selected) {
      this.selectedDate = selected;
    },
  },
};
</script>

<style scoped></style>
