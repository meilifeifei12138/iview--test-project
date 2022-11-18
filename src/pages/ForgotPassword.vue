<template>
  <Layout>
    <div class="forgotPassword-bg">
      <Card
        style="
          width: 30%;
          min-height: 60vh;
          margin: 20vh auto 30vh;
          text-align: center;
        "
      >
        <div class="logo">
          <img src="../assets/logo.gif" style="width: 100%" alt="我是logo" />
        </div>
        <h2 style="margin-bottom: 5vh">Lost password?</h2>
        <Form
          :model="formValidate"
          :rules="ruleValidate"
          style="padding: 0 20%"
        >
          <FormItem prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail">
              <template #prepend>
                <Icon type="ios-mail" />
              </template>
            </Input>
          </FormItem>
        </Form>
        <div>
          <Button type="primary" style="margin: 5vh">Reset Password</Button>
        </div>
        <div>
          <router-link :to="RoutesInf.loginPage.path">Login in </router-link>
          <span>|</span>
          <router-link :to="RoutesInf.signUpPage.path"> Sign up </router-link>
        </div>
      </Card>
    </div>
  </Layout>
</template>

<script>
import RoutesInf from "@/utils/RoutesInf";
export default {
  name: "ForgotPassword",
  data() {
    return {
      RoutesInf,
      formValidate: {
        mail: "",
      },
      ruleValidate: {
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur",
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style scoped>
html,
body,
.forgotPassword-bg {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-image: url("../assets/background.jpeg");
}
.logo {
  text-align: center;
  margin: 5vh auto;
  width: 12vw;
}
</style>
