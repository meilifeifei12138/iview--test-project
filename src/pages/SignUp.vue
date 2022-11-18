<template>
  <Layout>
    <Content :style="{ height: 'calc(100vh)', background: '#fff' }">
      <Row>
        <Col span="12">
          <div>
            <Carousel autoplay v-model="carousel" loop style="height: 100vh">
              <CarouselItem>
                <img src="../assets/background.jpeg" alt="banner1" />
              </CarouselItem>
              <CarouselItem>
                <img src="../assets/background.jpeg" alt="banner2" />
              </CarouselItem>
            </Carousel>
          </div>
        </Col>
        <Col span="12">
          <div>
            <div
              style="
                text-align: center;
                padding-top: 30px;
                padding-bottom: 30px;
              "
            >
              <img
                src="../assets/logo.gif"
                style="width: 30%"
                alt="我是logo图"
              />
            </div>
            <Form
              ref="formValidate"
              :model="SignUpFormValidate"
              :rules="SignUpRuleValidate"
              :label-width="90"
              style="padding-top: 20px; width: 400px; margin: auto"
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
                <Button type="primary" @click="handleSubmit('formValidate')"
                  >Create Account</Button
                >
              </FormItem>
            </Form>
            <div style="float: right">
              <router-link :to="RoutesInf.loginPage.path"
                >Login in
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
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
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

<style scoped></style>
