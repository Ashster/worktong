<!-- 加入群聊 -->
<template>
  <div class="add-group">
    <el-form ref="from" :inline="true" size="large" hide-required-asterisk>
      <el-form-item label="群号" style="width: 70%" required>
        <el-input
          v-model="form.groupId"
          placeholder="输入搜索群号"
          style="width: calc(100%-40px)"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button color="#1C45FF" style="color: white" @click="onSearch"
          >搜索</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const form = reactive({
  groupId: "",
});
const onSearch = () => {
  if (!form || !form.groupId || !form.groupId.length) return;
  console.log("搜索群号", form.groupId);
};
</script>
<style scoped>
.add-group {
  width: calc(100%-40px);
  height: calc(100%-40px);
  padding: 20px;
}
</style>