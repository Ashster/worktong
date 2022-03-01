<!-- 消息 -->
<template>
  <div class="message-list">
    <div
      class="message-list-item"
      v-for="(item, index) in messageList"
      :key="index"
    >
      <chat-other-mess
        v-if="!item.isMe"
        :type="item.type"
        :name="item.senderName"
        :time="item.time"
        :content="item.content"
        :isRead="item.isRead"
      ></chat-other-mess>
      <chat-my-mess
        v-if="item.isMe"
        :type="item.type"
        :name="item.senderName"
        :time="item.time"
        :content="item.content"
        :isRead="item.isRead"
      ></chat-my-mess>
    </div>
  </div>
</template>

<script setup>
import { reactive, defineExpose, onMounted, onUpdated, nextTick } from "vue";
import chatOtherMess from "./chatOtherMess.vue";
import chatMyMess from "./chatMyMess.vue";
const messageList = reactive([
  {
    isMe: false,
    type: 1,
    senderId: "00000001",
    senderName: "张三",
    receiverId: "00000002",
    receiverName: "我",
    time: new Date(),
    content:
      "hello，我是研发部门的张三，你最近工作忙吗？我现在手头有一个紧急需求需要你对接一下，请问现在方便吗？方便的话我们沟通一下，电话是1111111111111111111111111111",
    isRead: false,
  },
  {
    isMe: true,
    type: 1,
    senderId: "00000002",
    senderName: "我",
    receiverId: "00000001",
    receiverName: "张三",
    time: new Date(),
    content:
      "hello，我是研发部门的张三，你最近工作忙吗？我现在手头有一个紧急需求需要你对接一下，请问现在方便吗？方便的话我们沟通一下，电话是1111111111111111111111111111",
    isRead: false,
  },
  {
    isMe: false,
    type: 1,
    senderId: "00000001",
    senderName: "张三",
    receiverId: "00000002",
    receiverName: "我",
    time: new Date(),
    content: "👿",
    isRead: false,
  },
]);
const sendMess = (item, type) => {
  messageList.push({
    isMe: true,
    type: type, //发送内容类型，1代表文字，2代表图片，3代表语音，4代表文件
    senderId: "00000002",
    senderName: "我",
    receiverId: "00000001",
    receiverName: "张三",
    time: new Date(),
    content: item,
    isRead: false,
  });
};
//消息列表每次都需要自动滚动到最底部
const scrollToBottom = () => {
  nextTick(() => {
    var container = document.querySelector(".message-list");
    container.scrollTop = container.scrollHeight;
  });
};
onMounted(() => {
  scrollToBottom();
});
onUpdated(() => {
  scrollToBottom();
});
defineExpose({ sendMess });
</script>
<style scoped>
.message-list {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}
.message-list::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.message-list::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f2f8f6;
}
.message-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(186, 190, 191, 0.5);
}
</style>