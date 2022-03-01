<!-- 聊天气泡 其他人 -->
<template>
  <div class="bubble-other">
    <div v-if="props.type === 1">{{ props.content }}</div>
    <div v-if="props.type === 2">
      <img
        :src="props.content.url ? props.content.url : props.content"
        :name="props.content.name ? props.content.name : ''"
        class="bubble-img"
        @click="preView"
      />
      <el-dialog v-model="preViewVisible">
        <img
          class="bubble-img-preView"
          :src="props.content.url ? props.content.url : props.content"
          alt=""
        />
      </el-dialog>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
  content: {},
  type: {
    type: Number,
  },
});
const preViewVisible = ref(false);
const preView = () => {
  preViewVisible.value = true;
};
</script>
<style scoped>
.bubble-other {
  width: auto;
  height: auto;
  display: inline-block;
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
  border-radius: 0 10px 10px 10px;
  background-color: rgb(232, 236, 239);
  position: relative;
  /* margin: 1px 100px 0px 0px; */
  text-align: start;
  line-height: 22px;
}
/* 以下是尖角气泡样式，暂时废弃 */
/* .bubble-other::before {
  position: absolute;
  top: calc(50% - 8px);
  left: -16px;
  content: "";
  width: 0;
  height: 0;
  border-right: 8px solid rgb(232, 236, 239);
  border-bottom: 8px solid transparent;
  border-left: 8px solid transparent;
  border-top: 8px solid transparent;
} */
.bubble-img {
  max-height: 800px;
  max-width: 800px;
  width: 100%;
  height: 100%;
}

.bubble-img-preView {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 800px;
}
/deep/ .el-dialog__body,
/deep/ .el-dialog__header,
/deep/ .el-dialog__footer {
  padding: 0;
}
/deep/ .el-dialog__close .icon {
  color: black;
}
</style>