<!-- 聊天会话列表 -->
<template>
  <div id="chat-list">
    <ul class="chat-list">
      <li v-for="i in count" :key="i" class="chat-list-item">
        <!-- 头像 -->
        <div class="item-avatar">
          <!-- 未读消息的数量 -->
          <el-badge :value="12" :max="99" class="item-info-count">
            <el-avatar
              shape="square"
              size="large"
              style="
                background-color: #1c45ff;
                color: #ffffff;
                font-weight: bold;
                font-size: large;
              "
            >
              圣雅
            </el-avatar>
          </el-badge>
        </div>
        <div class="item-cont">
          <div class="cont-info">
            <!-- 对话用户名 -->
            <div class="info-name">zhangjingihasihwishiwhzhaoshaisxsxs</div>
            <!-- 时间 -->
            <div class="info-time">19:22</div>
          </div>
          <!-- 对话内容 -->
          <div class="cont-message">
            你好，请问今天过得怎么样？你好，请问今天过得怎么样？你好，请问今天过得怎么样？
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
let count = 10;
</script>
<style scoped>
#chat-list {
  width: 100%;
}
/* 修饰ul聊天列表样式 */
.chat-list {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}
.chat-list-item {
  display: flex;
  width: 400px;
  padding: 16px 0;
  height: 60px;
  border-bottom: 1px solid #e8ecef;
}
/deep/ .el-badge__content--danger {
  background-color: rgba(86, 215, 106, 1);
}
.item-avatar {
  width: 100px;
  height: 100%;
}
.item-cont {
  width: 270px;
  margin-right: 10px;
  height: 100%;
}
.cont-info {
  display: flex;
  width: 100%;
  height: 36px;
}
.info-name {
  text-align: start;
  font-size: 18px;
  height: 36px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.info-time {
  font-size: 10px;
  height: 30px;
  padding-top: 6px;
  padding-left: 5px;
  color: #767a7e;
}
.cont-message {
  text-align: start;
  font-size: 14px;
  color: #767a7e;
  height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>