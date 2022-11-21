<template>
  <Layout>
    <div class="forgotPassword-bg">
      <Card class="card">
        <div class="logo">
          <img src="../assets/logo.gif" alt="我是logo" />
        </div>
        <h2>Lost password?</h2>
        <Form :model="formValidate" :rules="ruleValidate" class="form">
          <FormItem prop="mail">
            <Input v-model="formValidate.mail" placeholder="Enter your e-mail">
              <template #prepend>
                <Icon type="ios-mail" />
              </template>
            </Input>
          </FormItem>
        </Form>
        <div>
          <Button type="primary" class="reset-button">Reset Password</Button>
        </div>
        <div>
          <router-link :to="RoutesInf.loginPage.path">Login in</router-link>
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
@import "@/css/login-public.css";
.forgotPassword-bg {
  height: 100vh;
  background-image: url("../assets/background.jpeg");
}
.card {
  width: 30%;
  min-height: 60vh;
  margin: 20vh auto 30vh;
  text-align: center;
}
.logo {
  text-align: center;
  margin: 5vh auto;
  width: 12vw;
}
.form {
  padding: 0 20%;
}
.reset-button {
  margin: 5vh;
}
</style>
