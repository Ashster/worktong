<!-- 主页面左侧侧边栏导航 -->
<template>
  <!-- 导航栏 -->
  <div class="home-aside-nav">
    <!-- 导航栏上面 用户头像 -->
    <div class="nav-user">
      <div style="padding-top: 30px">
        <el-avatar
          shape="square"
          style="background-color: #ffffff; color: #1c45ff; font-weight: bold"
        >
          圣雅
        </el-avatar>
      </div>
    </div>
    <!-- 导航栏中间 选项 -->
    <div class="nav-bar">
      <el-menu
        class="nav-bar-list"
        :default-active="store.state.navActive"
        background-color="#1C45FF"
        text-color="#ffffff"
        active-text-color="#1C45FF"
        @select="handelSelect"
      >
        <el-menu-item index="1" title="聊天">
          <el-icon><chat-square /></el-icon>
        </el-menu-item>
        <el-menu-item index="2" title="通讯录">
          <el-icon><user /></el-icon>
        </el-menu-item>
        <el-menu-item index="3" title="群聊">
          <el-icon><connection /></el-icon>
        </el-menu-item>
        <el-menu-item index="4" title="会议">
          <el-icon><data-analysis /></el-icon>
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 导航栏下面 更多 -->
    <div class="nav-more" title="更多">
      <el-button
        type="text"
        style="font-weight: bold; color: white; letter-spacing: 3px"
        @click="onMoreClick"
        >...</el-button
      >
    </div>
  </div>
</template>

<script setup>
import store from "../../store/index.js";
import {
  ChatSquare,
  User,
  Connection,
  DataAnalysis,
} from "@element-plus/icons-vue";
const handelSelect = (index) => {
  console.log(index);
  store.commit("setPropName", {
    name: "navActive",
    value: index,
  });
};
const onMoreClick = () => {
  console.log("more");
};
</script>
<style scoped>
/* 侧边栏样式 s */
.home-aside-nav {
  width: 70px;
  height: 100%;
  background-color: rgba(28, 69, 255, 1);
  overflow: hidden;
}
.nav-user {
  width: 100%;
  height: 25%;
}
.nav-bar {
  height: 65%;
}
.nav-bar-list {
  border: 0;
}
.el-menu-item.is-active {
  background-color: #ffffff !important;
  /* border-radius: 20% 0 0 20%; */
  border-radius: 20%;
  /* margin-left: 10%; */
  margin: 10%;
  overflow: hidden;
}
.nav-more {
  width: 100%;
  height: 10%;
  overflow: hidden;
}
/* 侧边栏样式 e */
</style>