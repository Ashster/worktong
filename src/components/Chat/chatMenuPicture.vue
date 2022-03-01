<!-- 发送类型 图片 -->
<template>
  <div class="chat-menu-picture">
    <!-- 上传图片menu -->
    <div class="menu-item menu-pics" @click="onSelectPic">
      <i class="iconfont icon-worktong-tupian"></i>
    </div>
    <input
      id="fileButton"
      v-show="false"
      type="file"
      accept="image/jpg, image/jpeg, image/png"
      multiple
    />
    <el-dialog
      v-model="pListVisible"
      width="820px"
      title="确认图片"
      @close="onDialogClose"
    >
      <div class="pList-wrapper">
        <ul class="pList-list">
          <li
            class="pList-item"
            v-for="(item, index) in pictureList"
            :key="index"
          >
            <img :src="item.url" :name="item.name" class="pList-item-img" />
            <!-- 遮罩功能层 -->
            <div class="pList-item-mask">
              <el-icon @click="onPreView"><zoom-in /></el-icon>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <el-icon @click="onDelete(index)"><delete /></el-icon>
            </div>
            <!-- 图片列表中的图片预览功能 -->
            <el-dialog v-model="preViewVisible">
              <img style="width: 100%" :src="item.url" alt="" />
            </el-dialog>
          </li>
        </ul>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onDialogClose">取消</el-button>
          <el-button type="primary" @click="onDialogSubmit">发送</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, defineEmits } from "vue";
import { ZoomIn, Delete } from "@element-plus/icons-vue";
const pListVisible = ref(false);
const preViewVisible = ref(false);
const pictureList = reactive([]);
const emits = defineEmits(["sendPicture"]);
const onSelectPic = () => {
  document.getElementById("fileButton").click();
};
// 关闭图片列表预览对话框
const onDialogClose = () => {
  // 清空本次选择的图片
  pictureList.length = 0;
  // 关闭图片列表对话框
  pListVisible.value = false;
};
// 确认发送图片列表
const onDialogSubmit = () => {
  // 预留一个发送websocket请求，暂时没写
  // 单个照片逐一发送消息
  let list = [];
  for (let i = 0; i < pictureList.length; i++) {
    list.push({ name: pictureList[i].name, url: pictureList[i].url });
  }
  emits("sendPicture", list);
  // 关闭窗口清空本次信息
  onDialogClose();
};
//在图片列表中预览图片
const onPreView = () => {
  preViewVisible.value = true;
};
//在图片列表中删除图片
const onDelete = (index) => {
  pictureList.splice(index, 1);
};
onMounted(() => {
  const $ = document.getElementById.bind(document);
  const $inputFile = $("fileButton");
  $inputFile.addEventListener(
    "change",
    function () {
      pListVisible.value = true;
      console.log(this.files);
      console.log("before:", pictureList);
      for (let i = 0; i < this.files.length; i++) {
        pictureList.push({
          name: this.files[i].name,
          url: window.URL.createObjectURL(this.files[i]),
        });
      }
    },
    this
  );
});
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
.pList-wrapper {
  width: 100%;
  height: 350px;
  overflow: auto;
  text-align: start;
}
.pList-list {
  width: 100%;
  padding: 0;
}
.pList-item {
  position: relative;
  display: inline-block;
  width: 146px;
  height: 146px;
  margin: 3px;
  border: 1px solid #adafb1;
  border-radius: 10%;
  overflow: hidden;
}
.pList-item-img {
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  border-radius: 10%;
  object-fit: cover;
  overflow: hidden;
}
.pList-item-mask {
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  opacity: 0;
  line-height: 146px;
  font-size: 30px;
}
.pList-item:hover .pList-item-mask {
  opacity: 1;
}
</style>