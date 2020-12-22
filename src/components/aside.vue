<template>
  <el-aside width="150px">
    <el-menu>
      <p class="web-name">图片管理系统</p>

      <el-menu-item
        v-for="(item, index) in $store.state.aside"
        :index="index.toString()"
        :key="index"
      >
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onNav(index, pathIndex) {
      console.log(index,pathIndex);
    }
  }
  // props:{
  // 	aside:Object
  // }
};
</script>
<style lang="less" scoped>
.web-name {
  font-size: 17px;
  text-align: center;
  padding: 20px;
  font-weight: 600;
  color: #3868c1;
}
</style>