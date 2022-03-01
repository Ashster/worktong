<!-- 聊天界面 输入栏 顶部输入信息选项  -->
<template>
  <div class="chat-menu">
    <!-- 表情 -->
    <chat-menu-emoji @add-emoji="addEmoji"></chat-menu-emoji>
    <!-- 图片 -->
    <chat-menu-picture @send-picture="sendPicture"></chat-menu-picture>
    <!-- 截图 -->
    <!-- <chat-menu-screenshot></chat-menu-screenshot> -->
    <chat-menu-screen-short
      @send-screen-shot="sendScreenShot"
    ></chat-menu-screen-short>
    <!-- 语音 -->
    <div class="menu-item menu-voice">
      <i class="iconfont icon-worktong-yuyin"></i>
    </div>
    <!-- 文件 -->
    <div class="menu-item menu-file">
      <i class="iconfont icon-worktong-wenjian"></i>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import chatMenuEmoji from "./chatMenuEmoji.vue";
import chatMenuPicture from "./chatMenuPicture.vue";
// import chatMenuScreenshot from "./chatMenuScreenshot.vue";
import chatMenuScreenShort from "./chatMenuScreenShort.vue";
const emits = defineEmits(["addEmoji", "sendPicture", "sendScreenShot"]);
const addEmoji = (item) => {
  // console.log(item);
  emits("addEmoji", item);
};
const sendPicture = (list) => {
  // console.log("menu111", list);
  emits("sendPicture", list);
};
const sendScreenShot = (base64) => {
  emits("sendScreenShot", base64);
};
</script>
<style scoped>
.icon {
  width: 33px;
  height: 33px;
  overflow: hidden;
  fill: #767a7e;
}
.chat-menu {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.menu-item {
  width: 33px;
  height: 33px;
  margin: 5px 10px;
}
</style>