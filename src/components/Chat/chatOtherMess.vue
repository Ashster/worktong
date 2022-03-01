<!-- 对方消息 -->
<template>
  <div class="message-other">
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
    <div class="main">
      <div class="header">
        <!-- 用户名 -->
        <div class="message-name">{{ props.name }}</div>
        <!-- 时间 -->
        <div class="message-time">
          {{ moment(props.time).format("YYYY年M月D日 HH:mm:ss") }}
        </div>
      </div>
      <div class="body">
        <!-- 消息气泡 -->
        <div class="message-bubble">
          <bubble-other
            :content="props.content"
            :type="props.type"
          ></bubble-other>
          <!-- 是否已读 -->
          <div class="message-read">
            {{ props.isRead ? "已读" : "未读" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import bubbleOther from "../common/bubbleOther.vue";
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
.message-other {
  width: auto;
  height: auto;
  display: flex;
  /* flex-flow:[flex-direction]||[flex-wrap] */
  flex-flow: row nowrap;
  /* align-items定义在交叉轴上如何堆砌 */
  align-items: flex-start;
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
  float: left;
  margin: 1px 100px 0px 0px;
  padding-left: 20px;
}
.message-read {
  font-size: 12px;
  text-align: end;
}
</style>