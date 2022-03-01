<!-- 登录界面 -->
<template>
  <div id="login">
    <div class="login-main">
      <!-- <LoginItem /> -->
      <router-view></router-view>
    </div>
    <div class="login-aside">
      <img
        src="../../assets/pictures/联合工作.svg"
        alt=""
        style="width: 100%; height: 100%"
      />
    </div>
  </div>
</template>

<script>
// import { reactive } from "vue";
// import LoginItem from "../../components/Login/LoginItem.vue";
// export default {
//   name: "Login",
//   components: {
//     LoginItem,
//   },
// };
</script>
<style scoped>
#login {
  height: 100%;
}
.login-main {
  /* border:1px solid black; */
  width: 40%;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-aside {
  margin-left: 40%;
  height: 100%;
  overflow: hidden;
}
</style>