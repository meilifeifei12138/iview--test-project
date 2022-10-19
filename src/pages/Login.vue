<template>
  <Layout>
    <div class="login-bg">
      <Card
        style="
          width: 30%;
          min-height: 60vh;
          margin: 20vh auto 30vh;
          text-align: center;
        "
      >
        <div class="forgotPasswordCardLogo">
          <img src="../assets/logo.gif" style="width: 100%" />
        </div>
        <h2 style="margin-bottom: 5vh">Login in</h2>
        <Form
          ref="formInline"
          :model="formInline"
          :rules="ruleInline"
          style="padding: 0 20%"
        >
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
              <template #prepend>
                <Icon type="ios-person-outline" />
              </template>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input
              type="password"
              v-model="formInline.password"
              placeholder="Password"
            >
              <template #prepend>
                <Icon type="ios-lock-outline" />
              </template>
            </Input>
          </FormItem>
          <FormItem>
            <Checkbox v-model="rememberCheckbox">Remember me?</Checkbox>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              @click="handleSubmit('formInline')"
              :loading="signUpLoading"
              >Login in</Button
            >
          </FormItem>
        </Form>
        <router-link :to="RoutesInf.forgotPasswordPage.path"
          >Forgot your password?</router-link
        >
        <div>
          Not registered yet?
          <router-link :to="RoutesInf.signUpPage.path">Signup</router-link>
        </div>
      </Card>
    </div>
  </Layout>
</template>
<script>
import RoutesInf from "@/utils/RoutesInf";
export default {
  name: "LoginPage",
  data() {
    return {
      RoutesInf,
      signUpLoading: false,
      rememberCheckbox: true,
      formInline: {
        user: "",
        password: "",
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
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
          // 发请求
          this.signUpLoading = true;
          const that = this;
          setTimeout(function () {
            that.signUpLoading = false;
            that.$router.push({ name: RoutesInf.homeView.name });
          }, 1000);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
  },
};
</script>
<style scoped>
html,
body,
.login-bg {
  margin: 0;
  padding: 0;
  height: 100%;
  background-image: url("../assets/background.jpeg");
}
.forgotPasswordCardLogo {
  text-align: center;
  margin: 5vh auto;
  width: 12vw;
}
</style>
