<template>
  <Layout>
    <Content class="content">
      <Row>
        <Col span="12">
          <div>
            <Carousel autoplay v-model="carousel" loop class="carousel">
              <CarouselItem>
                <img src="../assets/background.jpeg" alt="背景图" />
              </CarouselItem>
              <CarouselItem>
                <img src="../assets/background.jpeg" alt="背景图" />
              </CarouselItem>
            </Carousel>
          </div>
        </Col>
        <Col span="12">
          <div>
            <div class="signup-logo-farther-box">
              <img src="../assets/logo.gif" alt="logo" class="signup-logo" />
            </div>
            <Form
              ref="signUpForm"
              :model="SignUpFormValidate"
              :rules="SignUpRuleValidate"
              :label-width="90"
              class="form"
            >
              <FormItem label="Company" prop="companyName">
                <Input
                  v-model="SignUpFormValidate.companyName"
                  placeholder="Enter your Company name"
                />
              </FormItem>
              <Row>
                <Col span-8>
                  <FormItem prop="firstName" label="Name">
                    <Input
                      v-model="SignUpFormValidate.firstName"
                      placeholder="Enter your firstName"
                    />
                  </FormItem>
                </Col>
                <Col span-8>
                  <FormItem prop="lastName">
                    <Input
                      v-model="SignUpFormValidate.lastName"
                      placeholder="Enter your lastName"
                    />
                  </FormItem>
                </Col>
              </Row>
              <FormItem label="Password" prop="password">
                <Input
                  v-model="SignUpFormValidate.password"
                  placeholder="Enter your password"
                />
              </FormItem>
              <FormItem label="Confirm Password" prop="confirmPassword">
                <Input
                  v-model="SignUpFormValidate.confirmPassword"
                  placeholder=" Confirming password "
                />
              </FormItem>
              <FormItem label="E-mail" prop="mail">
                <Input
                  v-model="SignUpFormValidate.mail"
                  placeholder="Enter your e-mail"
                />
              </FormItem>
              <FormItem label="Phone" prop="phone">
                <Input
                  v-model="SignUpFormValidate.phone"
                  placeholder="Enter your phone number"
                />
              </FormItem>
              <FormItem label="City" prop="city">
                <Select
                  v-model="SignUpFormValidate.city"
                  placeholder="Select your city"
                >
                  <Option value="beijing">New York</Option>
                  <Option value="shanghai">London</Option>
                  <Option value="shenzhen">Sydney</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Checkbox
                  >I accept the
                  <router-link to="">terms</router-link>
                </Checkbox>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="createAccountBtn">
                  Create Account
                </Button>
              </FormItem>
            </Form>
            <div class="login-text">
              <router-link :to="RoutesInf.loginPage.path">
                Login in
                <Icon type="md-arrow-forward" />
              </router-link>
            </div>
          </div>
        </Col>
      </Row>
    </Content>
  </Layout>
</template>

<script>
import RoutesInf from "@/utils/RoutesInf";
import SignUpFormValidate from "@/utils/SignUp/SignUpFormValidate";
import SignUpRuleValidate from "@/utils/SignUp/SignUpRuleValidate";

export default {
  name: "SignUpPage",
  data() {
    return {
      carousel: 0,
      RoutesInf,
      SignUpFormValidate,
      SignUpRuleValidate,
    };
  },
  methods: {
    createAccountBtn() {
      this.$refs.signUpForm.validate((valid) => {
        if (!valid) {
          this.$Message.error("validate fail!");
          return;
        }
        const that = this;
        setTimeout(function () {
          that.$Message.success("sign up success");
        }, 1000);
        this.$router.push({ name: RoutesInf.loginPage.name });
      });
    },
  },
};
</script>

<style scoped>
.content {
  min-height: 500px;
  background: #fff;
}
.carousel {
  height: 100vh;
}
.signup-logo-farther-box {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
.signup-logo {
  width: 30%;
}
.form {
  padding-top: 20px;
  width: 400px;
  margin: auto;
}
.login-text {
  float: right;
}
</style>
