<template>
  <Layout>
    <Content class="content">
      <Row>
        <Col span="12">
          <div class="leftCard">
            <h1>订购摘要</h1>
            <h1>{{ clickedPrice }}</h1>
          </div>
        </Col>
        <Col span="12">
          <div class="rightCard">
            <h2>使用银行卡</h2>
            <Input
              prefix="md-mail"
              size="large"
              disabled
              v-model.trim="userEmail"
            />
            <h3>银行卡信息</h3>
            <Form
              :model="BankCardForm"
              :rules="BankCardRuleValidate"
              ref="bankCardForm"
            >
              <FormItem prop="bankCardNum">
                <Input
                  suffix="ios-card"
                  placeholder="1234 1234 1234 1234 1234"
                  v-model.trim="BankCardForm.bankCardNum"
                  @on-keypress="keypress()"
                />
              </FormItem>
              <Row>
                <Col span="12">
                  <FormItem prop="monthList" label="银行卡到期月份">
                    <Select v-model="BankCardForm.monthList">
                      <Option
                        v-for="item in MonthList"
                        :value="item.value"
                        :key="item.value"
                        >{{ item.value }}</Option
                      >
                    </Select>
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem
                    prop="bankCardExpirationYear"
                    label="银行卡到期年份"
                  >
                    <Input
                      v-model.number="BankCardForm.bankCardExpirationYear"
                      @on-keypress="keypress()"
                    />
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span="16">
                  <FormItem prop="bankCardHolder" label="持卡人">
                    <Input v-model="BankCardForm.bankCardHolder" />
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem prop="cvc" label="CVC">
                    <Input
                      v-model.number="BankCardForm.cvc"
                      maxlength="4"
                      @on-keypress="keypress()"
                    />
                  </FormItem>
                </Col>
              </Row>
              <FormItem label="国家/地区" prop="city">
                <Select v-model="BankCardRuleValidate.city">
                  <Option
                    v-for="item in CountryList"
                    :key="item.key"
                    :value="item.key"
                    >{{ item.value }}
                  </Option>
                </Select>
              </FormItem>
              <FormItem>
                <Button
                  long
                  type="primary"
                  :loading="isSubmitButtonLoading"
                  @click="subscription(BankCardRuleValidate)"
                >
                  订阅
                </Button>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    </Content>
  </Layout>
</template>

<script>
import CountryList from "@/utils/CountryList";
import MonthList from "@/utils/Payment/MonthList";
import BankCardForm from "@/utils/Payment/BankCardForm";
import BankCardRuleValidate from "@/utils/Payment/BankCardRuleValidate";

export default {
  name: "PayPage",
  data() {
    return {
      clickedPrice: "",
      isSubmitButtonLoading: false,
      userEmail: "admin@163.com",
      CountryList,
      MonthList,
      BankCardForm,
      BankCardRuleValidate,
    };
  },
  created() {
    this.clickedPrice = this.$route.params.priceDetails;
  },
  methods: {
    keypress() {
      const keyCode = event.keyCode;
      event.returnValue = keyCode >= 48 && keyCode <= 57;
    },
    subscription() {
      this.$refs.bankCardForm.validate((valid) => {
        if (valid) {
          //send request
          this.isSubmitButtonLoading = true;
          //判断请求是否成功
          setTimeout(function () {
            alert("支付成功！恭喜你成为尊贵的vip儿");
          }, 4000);
          this.isSubmitButtonLoading = false;
        } else {
          this.$Message.error("表单验证失败");
        }
      });
    },
  },
};
</script>

<style scoped>
.leftCard {
  height: 100vh;
  padding: 10% 5% 0 5%;
  background-color: lightcoral;
}
.rightCard {
  height: 100vh;
  padding: 10% 5% 0 5%;
  background-color: thistle;
}
/deep/.ivu-card-body {
  padding: 0;
}
</style>
