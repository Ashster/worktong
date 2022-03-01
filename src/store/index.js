import { createStore } from "vuex"
const store = createStore({
    state() {
        return {
            user: { //全局用户登录信息
                name: '', //姓名
                sex: '', //性别
                tel: '', //电话
                email: '', //邮箱
                pos: '', //职位
                dep: '', //部门
                avatar: '', //头像
                state: '', //状态
            },
            navActive: '1', //主页菜单当前选择项/激活项
            posListData: [], //职位信息列表
            depListData: [], //部门信息列表
        }
    },
    mutations: {
        //测试store，没用，记得删掉
        increment(state) {
            state.navActive++;
        },
        // 设置任意属性值
        setPropName(state, payload) {
            state[payload.name] = payload.value;
            console.log("状态更新成功", payload.name, ":", state[payload.name]);
        }
    }
});
export default store;