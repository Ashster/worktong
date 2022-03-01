<!-- 聊天会话窗口 头部 -->
<template>
  <div class="message-header">
    <div class="message-header-title">赵圣雅</div>
    <div class="message-header-more">more</div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.message-header {
  height: 48px;
  width: auto;
  border-bottom: 1px solid rgb(232, 236, 239);
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}
.message-header-title {
  font-size: 20px;
  height: 100%;
  line-height: 48px;
}
.message-header-more {
  height: 100%;
  line-height: 48px;
}
</style>