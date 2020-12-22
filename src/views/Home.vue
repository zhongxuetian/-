<template>
  <div class="home">
    <el-container>
      <!-- 左侧导航栏 -->
      <z-aside></z-aside>

      <!-- 右侧主内容 -->
      <z-main></z-main>
    </el-container>
  </div>
</template>

<script>
// 引入ajax请求
import ajaxType from "@/ajax/type.js";

// 引入组件
import zAside from "@/components/aside.vue";
import zMain from "@/components/main.vue";

export default {
  name: "Home",
  components: {
    zAside,
    zMain
  },
  data() {
    return {};
  },
  mounted() {
    this.getTypeList();
  },
  methods: {
    /**
     * @description: 获取分类列表
     */
    getTypeList() {
      ajaxType.showList().then(res => {
        // console.log(res)
        this.$store.commit("changeAside", res.data);
      });
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
      .up {
        margin: 0 10px;
      }
    }
  }
}
//上传图片dialog
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
