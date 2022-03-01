<!-- 群聊列表 -->
<template>
  <div id="group-chat-list">
    <div class="group-create" @click="GDialogVisible = true">
      <el-icon class="create-icon" title="创建/加入群聊">
        <circle-plus />
      </el-icon>
    </div>
    <el-dialog v-model="GDialogVisible">
      <div class="dialog-menu">
        <el-menu
          :default-active="dialogMenu.index"
          mode="horizontal"
          @select="handleSelect"
          style="text-align: center"
        >
          <el-menu-item index="1">加入群聊</el-menu-item>
          <el-menu-item index="2">创建群聊</el-menu-item>
        </el-menu>
      </div>
      <div class="dialog-cont">
        <add-group v-show="dialogMenu.index === '1'"></add-group>
        <create-group v-show="dialogMenu.index === '2'"></create-group>
      </div>
    </el-dialog>
    <user-list :listdata="gList"></user-list>
  </div>
</template>

<script setup>
import { getGChatList } from "../../api/groupChatApi";
import { CirclePlus } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import UserList from "../common/UserList.vue";
import addGroup from "../Group/addGroup.vue";
import createGroup from "../Group/createGroup.vue";
const gList = getGChatList();
const GDialogVisible = ref(false);
const dialogMenu = reactive({ index: "1" });
console.log("gList");
console.log(gList);
const handleSelect = (index) => {
  dialogMenu.index = index;
};
</script>
<style scoped>
#group-chat-list {
  width: 100%;
  height: 100%;
}
.group-create {
  width: 100%;
  height: 48px;
  background-color: white;
  text-align: end;
}
.create-icon {
  padding: 10px;
  width: 28px;
  height: 28px;
}
.dialog-cont {
  height: 300px;
  width: 100%;
}
</style>