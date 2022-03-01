<!-- 登录界面注册组件 -->
<template>
  <div class="login-container">
    <div class="login-cont-body">
      <el-form
        ref="formRef"
        :model="form"
        label-position="top"
        :rules="rules"
        hide-required-asterisk="false"
      >
        <el-form-item>
          <el-col :span="12">
            <el-form-item label="姓名/Name" prop="name">
              <el-input
                v-model="form.name"
                size="large"
                placeholder="Please input name"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2"> </el-col>
          <el-col :span="10">
            <el-form-item label="性别/Sex" prop="sex">
              <el-radio-group v-model="form.sex" size="large">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="职位/Position" prop="position">
          <el-cascader
            v-model="form.position"
            size="large"
            placeholder="Please select position"
            :options="posList"
            style="width: 100%"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="部门/Department" prop="department">
          <el-cascader
            v-model="form.department"
            size="large"
            placeholder="Please select department"
            :options="depList"
            style="width: 100%"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="邮箱/E-mail" prop="email">
          <el-input
            v-model="form.email"
            size="large"
            placeholder="Please input email"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话/Telephone" prop="tel">
          <el-input
            v-model="form.tel"
            size="large"
            placeholder="Please input telephone number"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码/Password" prop="password">
          <el-input
            v-model="form.password"
            size="large"
            type="password"
            placeholder="Please input password"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="确认密码/Repassword" prop="repassword">
              <el-input
                v-model="form.repassword"
                size="large"
                type="password"
                placeholder="Please input password again"
              ></el-input>
            </el-form-item> -->
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit(formRef)"
            size="large"
            class="login-button"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { getPosData, getDepData } from "../../api/loginApi";
import router from "../../router/index";
import store from "../../store/index.js";
let posList = [];
let depList = [];
let form = reactive({
  name: "", //姓名
  sex: "", //性别
  position: [], //职位
  department: [], //部门
  tel: "", //电话
  workId: "", //工号
  email: "", //邮箱
  password: "", //密码
  //   repassword: "", //二次密码
  picture: "", //照片（用作头像）
});
// onMounted(() => {
//二次密码确认校验
// const validatePass = (callback) => {
//   if (form.repassword === "") {
//     callback(new Error("Please input password again"));
//   } else if (form.repassword !== form.password) {
//     callback(new Error("Please input same password"));
//   } else {
//     callback();
//   }
// };
// rules.repassword.push({
//   required: true,
//   validateField: validatePass,
//   trigger: "blur",
// });
// });
//表单规则
const rules = reactive({
  name: [
    {
      required: true,
      message: "Please input name",
      trigger: "blur",
    },
  ],
  sex: [
    {
      required: true,
      message: "Please select sex",
      trigger: "blur",
    },
  ],
  position: [
    {
      required: true,
      message: "Please select position",
      trigger: "blur",
    },
  ],
  department: [
    {
      required: true,
      message: "Please select department",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      message: "Please input email",
      trigger: "blur",
    },
  ],
  tel: [
    {
      required: true,
      message: "Please input telephone number",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input password",
      trigger: "blur",
    },
  ],
  //   repassword: [
  //     {
  //       required: true,
  //       validator: validatePass,
  //       trigger: "blur",
  //     },
  //   ],
});
const formRef = ref();

// 提交注册信息
const onSubmit = (formEl) => {
  formEl.validate((valid) => {
    if (valid) {
      //   this.$router.push("/login");
      console.log("用户提交的邮箱密码为：");
      console.log(form);
      ElMessage({
        message: "注册成功",
        type: "success",
      });
      router.push("./login");
    }
  });
};
// 获取职位列表
const getPositionList = () => {
  posList = getPosData();
  store.commit("setPropName", {
    name: "posListData",
    value: posList,
  });
  // console.log(posList);
};
// 获取部门列表
const getDepartmentList = () => {
  depList = getDepData();
  store.commit("setPropName", {
    name: "depListData",
    value: depList,
  });
  //   console.log(depList);
};
getPositionList();
getDepartmentList();
</script>
<style scoped>
.login-container {
  /* background: rgba(6, 93, 175, 1); */
  /* border:1px solid black; */
  margin-left: 20%;
  width: 100%;
  height: 600px;
  font-weight: bold;
}
.login-button {
  width: 100%;
  margin-top: 20px;
  font-weight: bold;
}
.login-regi-text {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  height: 100%;
  text-align: center;
}
</style>