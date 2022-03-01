<!-- 联系人列表 -->
<template>
  <div id="user-list">
    <user-list :listdata="depList"></user-list>
  </div>
</template>

<script setup>
import store from "../../store/index";
import { getDepData } from "../../api/loginApi";
import userList from "../common/UserList.vue";
let depList = [];

const getDepList = () => {
  if (store.state.depListData.length) {
    depList = store.state.depListData;
    console.log("yes");
  } else {
    depList = getDepData();
    console.log("no");
  }
};
getDepList();
console.log("dep", depList);
//处理depList部门数据，并且为各个部门添加用户，mock部分
const addDepUser = (depList, depth) => {
  for (let i = 0; i < depList.length; i++) {
    if (
      depList[i].children &&
      depList[i].children.length &&
      !depList[i].isLeaf
    ) {
      depList[i].isLeaf = false;
      depList[i].isUser = false;
      depList[i].depth = depth;
      addDepUser(depList[i].children, depth + 1);
    } else {
      depList[i].isLeaf = true;
      depList[i].isUser = false;
      depList[i].depth = depth;
      depList[i].children = [
        {
          name: "wwwwww",
          id: "myid",
        },
        {
          name: "www",
          id: "myid",
        },
      ];
    }
  }
};
addDepUser(depList, 1);
console.log("depNow", depList);
</script>
<style scoped>
#user-list {
  width: 100%;
  height: 100%;
}
</style>