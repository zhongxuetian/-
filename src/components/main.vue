<template>
  <el-main>
    <div class="header">
      <div class="left">
        <el-link type="primary" @click="addType" class="add-type">添加分类</el-link>
        <el-link type="primary" class="upload" @click="onShowUploadDialog">上传图片</el-link>
      </div>
      <!-- <div class="right" v-if='$store.state.username'>
        <router-link to='/login'>
          <el-link type="primary" class="login">登录</el-link>
        </router-link>
      </div> -->
      <div class="right" >
          <el-link type="primary"> {{$store.state.username}}</el-link>
          <el-link type="danger" @click='onLogout' class="logout"> 退出</el-link>
      </div>
    </div>
    <div class="imgs">
      <el-card class="card" shadow="hover" v-for="(item,index) in imgs" :key="index">
        <el-image style="width: 150px; height: 150px" :src="item.imageUrl"></el-image>
        <div class="btns">
          <!-- <el-link type="primary">属性</el-link> -->
          <el-link type="primary" class="copyUrl">复制链接</el-link>
          <el-link type="info" class="del" @click="showDelFrame">删除</el-link>
        </div>
      </el-card>
    </div>
    <z-upload-img
      :showUploadImg="showUploadImg"
      v-on:submitUpload="onSubmitUpload"
      v-on:hideUploadImg="onHideUploadImg"
    ></z-upload-img>

  </el-main>
</template>
<script>
// 引入ajax请求
import ajaxType from "@/ajax/type.js";

import cookie from '../utils/cookie'

//引入组件
import zUploadImg from "@/components/upload_img.vue";

export default {
  data() {
    return {
      imgs: [],
      showUploadImg: false,
      
    };
  },
  components: {
    zUploadImg
  },
  methods: {
    //隐藏上传图片的输入框
    onHideUploadImg() {
      this.showUploadImg = false;
    },

    onSubmitUpload(event) {
      this.imgs.push(event);
      console.log(event);
    },
    //显示删除图片确认框
    showDelFrame() {
      this.$confirm("是否移除该图片?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /**
     * @description: 显示新增分类输入框
     */
    addType() {
      let _this = this;
      this.$prompt("限制长度10个字符的字母、数字或中文", "添加分类", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^(\w|[\u4E00-\u9FA5]){1,10}$/,
        inputErrorMessage: "格式不正确"
      })
        .then(({ value }) => {
          _this.addTypeSubmit(value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    //提交新增分类
    addTypeSubmit(value) {
      ajaxType.add(value).then(res => {
        let aside = this.$store.state.aside;
        aside.push({
          name: res
        });
        this.$store.commit("changeAside", aside);
      });
    },
    //显示上传图片的表单
    onShowUploadDialog() {
      this.showUploadImg = true;
    },
    //退出登录
    onLogout(){
      cookie.removeCookie("username");
      this.$router.push({path:'/login'})
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;

    .upload {
      margin-left: 20px;
    }
  }
  .right {
    .logout{
      margin-left: 10px;
    }
  }
}

.imgs {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  .card {
    margin: 5px;
    .btns {
      display: flex;
      justify-content: flex-end;
      .copyUrl {
        margin: 0 10px;
      }
    }
  }
}
</style>