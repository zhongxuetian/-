<template>
  <div class="login">
    <el-alert title="用户名:admin,密码:123456" type="success" :closable="false"></el-alert>
    <p>
      <el-input v-model="username" placeholder="用户名"></el-input>
    </p>
    <p>
      <el-input v-model="password" placeholder="密码" type="password"></el-input>
    </p>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
  },
  methods: {
    login() {
      let username = this.username;
      let password = this.password;
      if (username == "admin" && password == "123456") {
        this.$store.commit('setCookie',username)
        this.$router.push({ path: "/" });
        console.log("登录成功");
      } else {
        console.log("登录失败");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 20px;
  p {
    margin-top: 10px;
  }
  button {
    margin-top: 10px;
  }
}
</style>