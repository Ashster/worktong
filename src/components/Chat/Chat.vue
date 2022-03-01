<!-- 聊天界面 总 -->
<template>
  <div class="chat">
    <div class="chat-message">
      <!-- 聊天界面 头部 -->
      <chat-header></chat-header>
      <!-- 聊天消息 -->
      <chat-message ref="messageRef"></chat-message>
    </div>
    <div class="chat-area">
      <div class="chat-area-menu">
        <chat-area-menu
          @add-emoji="addEmoji"
          @send-picture="sendPicture"
          @send-screen-shot="sendScreenShot"
        ></chat-area-menu>
      </div>
      <div class="chat-area-edit">
        <div class="edit-input">
          <textarea
            class="edit-input-textarea"
            v-model="editContent"
            @keyup.enter="sendMessage"
          >
          </textarea>
        </div>

        <div class="edit-button">
          <el-button
            style="background: rgba(28, 69, 255, 1); color: white"
            size="large"
            @click="sendMessage"
          >
            发送
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import chatHeader from "./chatHeader.vue";
import chatMessage from "./chatMessage.vue";
import chatAreaMenu from "./chatAreaMenu.vue";
const editContent = ref("");
const messageRef = ref(null);
const addEmoji = (item) => {
  editContent.value += item;
};
const sendPicture = (list) => {
  console.log("okkkk", list);
  list.forEach((item) => {
    messageRef.value.sendMess(item, 2); //2标识发送内容的类型为图片
  });
};
const sendScreenShot = (base64) => {
  messageRef.value.sendMess(base64, 2);
};
const sendMessage = () => {
  console.log(editContent.value);
  let test = editContent.value;
  //首先过滤掉空白消息情况
  test = test.replace(/ /gi, "");
  //trim()方法用于删除字符串头尾空白符，包括空格、tab、换行符和其他空白符等
  if (test.trim() == null || test.trim() == "" || test.trim() == undefined) {
    ElMessage({
      message: "不能发送空白消息",
      type: "warning",
      offset: 10,
    });
    return;
  }
  messageRef.value.sendMess(editContent.value, 1); //1表示发送内容的类型为文字
  editContent.value = ""; //发送后自动清空
};
</script>
<style scoped>
.chat {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.chat-message {
  width: 100%;
  height: 66%;
  display: flex;
  flex-direction: column;
}
.chat-area {
  flex: 1;
  border-top: 1px solid rgb(232, 236, 239);
  display: flex;
  flex-flow: column nowrap;
}
.chat-area-menu {
  width: 100%;
}
.chat-area-edit {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}
.edit-input {
  flex: 1;
  width: 100%;
}
.edit-input-textarea {
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 10px;
  font-size: 16px;
  color: rgb(44, 62, 80);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: none;
  resize: none;
  overflow: auto;
}
.edit-input-textarea:focus {
  outline: none;
}
.edit-button {
  padding: 10px 20px;
  text-align: end;
}
</style>