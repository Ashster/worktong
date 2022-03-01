<!-- 聊天窗口 发送消息模块 Emoji -->
<template>
  <div class="chat-area-menu-emoji">
    <el-tabs type="card" class="wrapper">
      <el-tab-pane
        v-for="(value, key, index) in emojisList"
        :key="index"
        :label="key"
      >
        <template #label>
          <span :title="key">{{ value[0] }}</span>
        </template>
        <div class="content">
          <span
            class="emoji-item"
            v-for="(item, index) in value"
            :key="index"
            @click.stop="onClickEmoji(item)"
          >
            {{ item }}
          </span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
import emojis from "../../assets/emoji/emoji.json";
const emojisList = emojis.data;
const emits = defineEmits(["addEmoji"]);
const onClickEmoji = (item) => {
  emits("addEmoji", item);
};
</script>
<style scoped>
.wrapper {
  font-size: 20px;
  width: 100%;
  user-select: none;
}
.content {
  width: 100%;
  height: 260px;
  overflow: auto;
}
.emoji-item {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 10px;
}
.content::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.content::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f2f8f6;
}
.content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(186, 190, 191, 0.5);
}
</style>