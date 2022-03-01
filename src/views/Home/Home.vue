<!-- 主页界面 -->
<template>
  <div id="home">
    <!-- 侧边栏 -->
    <div class="home-aside">
      <!-- 导航栏 -->
      <Nav />
      <!-- 导航内容 -->
      <div class="home-aside-cont">
        <nav-chat-list v-show="store.state.navActive === '1'"></nav-chat-list>
        <nav-user-list v-show="store.state.navActive === '2'"></nav-user-list>
        <nav-g-chat-list
          v-show="store.state.navActive === '3'"
        ></nav-g-chat-list>
        <nav-meeting v-show="store.state.navActive === '4'"></nav-meeting>
      </div>
    </div>
    <div class="home-main">
      <Chat />
    </div>
  </div>
</template>

<script setup>
import store from "../../store/index.js";
import Nav from "../../components/Nav/nav.vue";
import NavChatList from "../../components/Nav/navChatList.vue";
import NavUserList from "../../components/Nav/navUserList.vue";
import NavGChatList from "../../components/Nav/navGChatList.vue";
import NavMeeting from "../../components/Nav/navMeeting.vue";
import Chat from "../../components/Chat/Chat.vue";
</script>
<style scoped>
#home {
  width: 100%;
  height: 100%;
  display: flex;
}
.home-aside {
  width: 470px;
  height: 100%;
  display: flex;
  border-right: 1px solid #f2f8f6;
}
.home-main {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.home-aside-cont {
  flex: 1;
  height: 100%;
  background-color: #f2f8f6;
  overflow-y: auto;
  overflow-x: hidden;
}
.home-aside-cont::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.home-aside-cont::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #f2f8f6;
}
.home-aside-cont::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(186, 190, 191, 0.5);
}
</style>