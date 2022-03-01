<!-- 发送类型 截图 -->
<template>
  <div class="chat-menu-screenshot">
    <!-- 发送类型菜单 截图 -->
    <div class="menu-item menu-screenshot" @click="onScreenShot">
      <i class="iconfont icon-worktong-a-jianqiejietu"></i>
    </div>
    <template>
      <!--截图组件-->
      <screen-short
        v-if="screenshotStatus"
        @destroy-component="destroyComponent"
        @get-image-data="getImg"
      ></screen-short>
    </template>
  </div>
</template>



<script setup>
import { ref, defineEmits } from "vue";
const emits = defineEmits(["sendScreenShot"]);
const screenshotStatus = ref(false);
const onScreenShot = () => {
  screenshotStatus.value = true;
};
// 销毁组件函数
const destroyComponent = function (status) {
  screenshotStatus.value = status;
};
// 获取裁剪区域图片信息
const getImg = function (base64) {
  // console.log("截图组件传递的图片信息", base64);
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
.menu-item {
  width: 33px;
  height: 33px;
  margin: 5px 10px;
}
</style>