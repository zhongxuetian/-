<template>
  <el-dialog title="上传图片" :visible.sync="showUploadImg" @open='onOpen' :before-close="onCannel">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="uploadData.imageUrl" :src="uploadData.imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-select v-model="uploadData.uploadImgTypeValue" placeholder="请选择">
      <el-option
        v-for="item in $store.state.aside"
        :key="item.value"
        :label="item.label"
        :value="item.name"
      ></el-option>
    </el-select>
    <div slot="footer" class="dialog-footer">
      <el-button @click="onCannel">取 消</el-button>
      <el-button type="primary" @click="onSubmitUpload">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      uploadData: {
        imageUrl: null,
        uploadImgTypeValue: "",
        filename: ""
      }
    };
  },
  props: {
    showUploadImg: Boolean,
    // uploadData:Object
  },
  
  methods: {
    //打开dialog回调
    onOpen(){
      this.uploadData = {
        imageUrl: null,
        uploadImgTypeValue: "",
        filename: ""
      }
    },
    //取消
    onCannel(){
      this.$emit('hideUploadImg')
    },
    //提交
    onSubmitUpload(){
      console.log(this.uploadData)
      this.$emit('hideUploadImg');
      this.$emit('submitUpload',this.uploadData)
    },
    //上传图片成功回调
    handleAvatarSuccess(res, file) {
      console.log(res);
      this.uploadData.imageUrl = URL.createObjectURL(file.raw);
      this.uploadData.filename = res.filename;
    },
    //上传图片前触发

    beforeAvatarUpload(file) {
      console.log(file.type);
      const isJPG =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/gif";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style lang="less" scoped>
//上传图片dialog
.avatar-uploader {
	margin-bottom: 10px;
}
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
  border: 1px dashed #ccc;
  border-radius: 8px;

}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>