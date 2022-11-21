<template>
  <div>
    <Card class="card">
      <Row :gutter="16" class="top-row">
        <Col span="8">
          <div>
            <Input
              search
              autocomplete="off"
              placeholder="关键词"
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
            enter-button="search"
          />
        </Col>
        <Col span="8">
          <Input
            search
            autocomplete="off"
            placeholder="编号"
            enter-button="search"
          />
        </Col>
      </Row>
      <div class="subscribe-text">
        <router-link :to="RoutesInf.subscribePage.path">
          去订阅使用更多功能
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
                :disabled="subscribeState"
                class="select-input"
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
                :disabled="subscribeState"
                class="select-input"
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
      <Card class="bottom-card">
        <Row type="flex" justify="end" class="code-row-bg">
          <Col>
            <div class="select-tip-text">
              批量操作 ：已选中{{ selectedDate.length }}项
            </div>
          </Col>
          <Col>
            <Button
              type="primary"
              @click="collectedSelectedDate"
              :loading="isCollectedAllProjectBtnLoading"
              class="collected-button"
              >收藏
            </Button>
          </Col>
        </Row>
      </Card>
      <Table
        border
        class="table"
        :columns="NewTableColumns"
        :data="NewTableDate"
        :loading="isLoading"
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
    <SubscriptionModalComponent ref="subscriptionModal" />
  </div>
</template>

<script>
import NewTableDate from "@/utils/ProjectTable/NewTableDate";
import NewTableColumns from "@/utils/ProjectTable/NewTableColumns";
import RoutesInf from "@/utils/RoutesInf";
import CountryList from "@/utils/CountryList";
import TenderStatus from "@/utils/TenderStatus";
import SubscriptionModalComponent from "@/components/SubscriptionModalComponent";
export default {
  name: "OptimizedTableView",
  components: {
    SubscriptionModalComponent,
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
      isCollectedAllProjectBtnLoading: false,
      selectedDate: [],
      pageOption: {
        totalNum: 1000,
        pageSize: [15, 25, 35, 45, 50],
      },
    };
  },
  computed: {
    subscribeState() {
      return this.$store.state.notSubscribe;
    },
  },
  watch: {
    countrySelectModel(newVal) {
      console.log(newVal);
    },
  },
  methods: {
    showSubscriptionModal() {
      if (this.subscribeState) {
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

<style scoped>
.card {
  height: auto;
  margin-bottom: 15px;
  padding-left: 10px;
  border-radius: 8px;
}
.top-row {
  padding-bottom: 15px;
}
.select-input {
  width: 200px;
}
.bottom-card {
  margin: 10px 0;
}
.select-tip-text {
  line-height: 32px;
  margin-right: 10px;
}
.select-tip-text {
  line-height: 32px;
  margin-right: 10px;
}
.collected-button {
  margin-right: 10px;
}
.table {
  margin-bottom: 25px;
}
</style>
