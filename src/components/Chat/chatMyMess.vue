<!-- 我的消息 -->
<template>
  <div class="message-me">
    <div class="main">
      <div class="header">
        <!-- 时间 -->
        <div class="message-time">
          {{ moment(props.time).format("YYYY年M月D日 HH:mm:ss") }}
        </div>
        <!-- 用户名 -->
        <div class="message-name">{{ props.name }}</div>
      </div>
      <div class="body">
        <!-- 消息气泡 -->
        <div class="message-bubble">
          <bubble-me :content="props.content" :type="props.type"></bubble-me>
          <!-- 是否已读 -->
          <div class="message-read">
            {{ props.isRead ? "已读" : "未读" }}
          </div>
        </div>
      </div>
    </div>
    <div class="aside">
      <!-- 头像 -->
      <div class="message-avatar">
        <el-avatar
          shape="square"
          style="background-color: #1c45ff; color: #ffffff; font-weight: bold"
        >
          {{ props.name.slice(0, 2) }}
        </el-avatar>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import bubbleMe from "../common/bubbleMe.vue";
import moment from "moment";
const props = defineProps({
  type: {
    type: Number,
    default: 1,
  },
  name: {
    type: String,
    default: () => {},
  },
  time: {
    type: Date,
    default: () => {},
  },
  content: {},
  isRead: {
    type: Boolean,
    default: () => {},
  },
});
</script>
<style scoped>
.message-me {
  width: auto;
  height: auto;
  display: flex;
  /* flex-flow:[flex-direction]||[flex-wrap] */
  flex-flow: row nowrap;
  /* align-items定义在交叉轴上如何堆砌 */
  align-items: flex-start;
  /* justify-content 定义在主轴上如何堆砌 */
  justify-content: flex-end;
  margin: 20px;
}
.aside {
  align-items: center;
}
.main {
  width: auto;
  height: auto;
}
.header {
  display: flex;
  justify-content: end;
  font-size: 14px;
  width: auto;
  height: auto;
}
.body {
  width: auto;
  height: auto;
  /* overflow是为了清楚其子div中float浮动属性引发的高度塌陷问题，清除浮动 */
  overflow: hidden;
}
.message-name {
  padding-left: 20px;
  padding-right: 20px;
}
.message-bubble {
  float: right;
  margin: 1px 0px 0px 100px;
  padding-right: 20px;
}
.message-read {
  font-size: 12px;
  text-align: start;
}
</style>