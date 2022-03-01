<!-- 用户树型列表组件 -->
<template>
  <div>
    <el-collapse>
      <el-collapse-item
        v-for="(item, index) in listdata"
        :key="index"
        :value="item.value"
        :title="item.label"
        :name="item.value"
      >
        <template #title>
          <div class="item-title">
            {{ item.label }}
          </div>
        </template>
        <user-list
          v-if="!item.isLeaf"
          :listdata="item.children"
          class="list-item"
        ></user-list>
        <div
          v-else
          v-for="item in item.children"
          :key="item.id"
          :value="item.name"
          class="item-user"
          @click="onUserClick(item)"
        >
          <div class="item-user-avatar">
            <el-avatar
              shape="square"
              style="
                background-color: #1c45ff;
                color: #ffffff;
                overflow: hidden;
              "
            >
              <!-- 只保留前两个字，后续考虑修改 -->
              {{ item.name.slice(0, 2) }}
            </el-avatar>
          </div>
          <div class="item-user-name">
            <span>{{ item.name }}</span>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "userList",
  props: {
    listdata: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    onUserClick: function (item) {
      console.log(item);
    },
  },
};
</script>
<style scoped>
/* .item-title {
  padding-left: 10px;
} */
.item-user {
  text-align: start;
  display: flex;
  padding: 10px;
}
.item-user-avatar {
  padding-right: 20px;
}
.item-user-name {
  flex: 1;
  height: 100%;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}
/deep/ .el-collapse-item__content {
  padding-bottom: 0px !important;
}
/deep/ .el-collapse-item__header {
  padding-left: 10px;
}
/deep/ .el-collapse-item__wrap {
  border-bottom: 0;
}
.list-item {
  padding-left: 10px;
}
</style>