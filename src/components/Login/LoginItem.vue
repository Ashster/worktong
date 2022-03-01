<!-- 登录界面账号密码组件 -->
<template>
  <div class="login-container">
    <div class="login-cont-header">
      <p>WORKTONG</p>
    </div>
    <div class="login-cont-body">
      <el-form :model="form" label-position="top">
        <el-form-item label="邮箱/E-mail">
          <el-input
            v-model="form.email"
            size="large"
            placeholder="Please input email"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码/Password">
          <el-input
            v-model="form.password"
            size="large"
            type="password"
            placeholder="Please input password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            size="large"
            class="login-button"
            >登录</el-button
          >
        </el-form-item>
        <div class="login-register">
          <span class="login-regi-text">还没开通账号？ </span>
          <el-link type="primary" :underline="false" @click="onRegister"
            >点击注册</el-link
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import router from "../../router/index.js";
export default {
  name: "LoginItem",
  setup() {
    let form = reactive({
      email: "",
      password: "",
    });
    function onSubmit() {
      console.log("用户提交的邮箱密码为：");
      console.log(form);
      router.push("/home");
    }
    return {
      form,
      onSubmit,
    };
  },
  methods: {
    onRegister() {
      router.push("/register");
    },
  },
};
</script>
<style scoped>
.login-container {
  /* background: rgba(6, 93, 175, 1); */
  /* border:1px solid black; */
  margin-left: 20%;
  width: 100%;
  height: 600px;
  font-weight: bold;
}
.login-cont-header {
  font-size: 50px;
}
.login-button {
  width: 100%;
  margin-top: 20px;
  font-weight: bold;
}
.login-regi-text {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 100%;
  text-align: center;
}
</style>