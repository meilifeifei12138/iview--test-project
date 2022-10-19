<template>
  <Layout>
    <Content :style="{ minHeight: '500px', background: '#fff' }">
      <Row>
        <Col span="12">
          <div class="loginCard">
            <Carousel autoplay v-model="carousel" loop style="height: 100vh">
              <CarouselItem>
                <img src="../assets/background.jpeg" />
              </CarouselItem>
              <CarouselItem>
                <img src="../assets/background.jpeg" />
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
              <img src="../assets/logo.gif" style="width: 30%" />
            </div>
            <Form
              ref="formValidate"
              :model="formValidate"
              :rules="ruleValidate"
              :label-width="90"
              style="padding-top: 20px; width: 400px; margin: auto"
            >
              <FormItem label="Company" prop="companyName">
                <Input
                  v-model="formValidate.companyName"
                  placeholder="Enter your Company name"
                />
              </FormItem>
              <Row>
                <Col span-8>
                  <FormItem prop="firstName" label="Name">
                    <Input
                      v-model="formValidate.firstName"
                      placeholder="Enter your firstName"
                    />
                  </FormItem>
                </Col>
                <Col span-8>
                  <FormItem prop="lastName">
                    <Input
                      v-model="formValidate.lastName"
                      placeholder="Enter your lastName"
                    />
                  </FormItem>
                </Col>
              </Row>
              <FormItem label="Password" prop="password">
                <Input
                  v-model="formValidate.password"
                  placeholder="Enter your password"
                />
              </FormItem>
              <FormItem label="Confirm Password" prop="confirmPassword">
                <Input
                  v-model="formValidate.confirmPassword"
                  placeholder=" Confirming password "
                />
              </FormItem>
              <FormItem label="E-mail" prop="mail">
                <Input
                  v-model="formValidate.mail"
                  placeholder="Enter your e-mail"
                />
              </FormItem>
              <FormItem label="Phone" prop="phone">
                <Input
                  v-model="formValidate.phone"
                  placeholder="Enter your phone number"
                />
              </FormItem>
              <FormItem label="City" prop="city">
                <Select
                  v-model="formValidate.city"
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
          </div>
        </Col>
      </Row>
    </Content>
  </Layout>
</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {
      carousel: 0,
      formValidate: {
        companyName: "",
        mail: "",
        city: "",
        phone: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
      },
      ruleValidate: {
        companyName: [
          {
            required: true,
            message: "The company name cannot be empty",
            trigger: "blur",
          },
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur",
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
        ],
        phone: [
          {
            required: true,
            message: "The phone number cannot be empty",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          {
            required: true,
            message: "Confirming password is required",
            trigger: "blur",
          },
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change",
          },
        ],
        firstName: [
          {
            required: true,
            message: "Required field",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Required field",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>

<style scoped></style>
