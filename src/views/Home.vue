<template>
  <div class="home">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="90"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="200"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="beijing"
    >
    </vue-particles>

    <div class="login-box">
      <el-form
        :model="ruleForm2"
        status-icon
        :rules="rules2"
        ref="ruleForm2"
        label-width="100px"
        class="demo-ruleForm"
      >
        <h2 class="title-name">图示管理系统</h2>
        <el-form-item label="用户名" prop="userName">
          <el-input
            style="width:380px"
            v-model="ruleForm2.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input
            style="width:380px"
            type="password"
            v-model="ruleForm2.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <!---->
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var userNameCheack = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        userName: "",
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userName: [{ validator: userNameCheack, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scope>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    width: 600px;
    height: 400px;
    background: #3697db;
    margin: auto;
    z-index: 100;
  }

  .title-name {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
  }
}

.beijing {
  width: 100%;
  height: 100%;
  background: #169fe6;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
