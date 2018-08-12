<template>
<el-row class="tac">
  <el-col :span="4">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>Menu</span>
        </template>
          <el-menu-item index="1-1">Profile</el-menu-item>
        <el-submenu index="1-2">
          <template slot="title">Products</template>
          <el-menu-item index="1-2-1">Game</el-menu-item>
          <el-menu-item index="1-2-2">Other</el-menu-item>
        </el-submenu>
            <el-submenu index="1-3">
          <template slot="title">SNS</template>
          <el-menu-item index="1-3-1">Mastodon</el-menu-item>
          <el-menu-item index="1-3-2">GitHub</el-menu-item>
          <el-menu-item index="1-3-3">Twitter</el-menu-item>
          <el-menu-item index="1-3-4">Twitter</el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">Work</template>
          <el-menu-item index="1-3-1">Lancers</el-menu-item>
          <el-menu-item index="1-3-2">CrowdWorks</el-menu-item>
          <el-menu-item index="1-3-3">Coconala</el-menu-item>
          <el-menu-item index="1-3-4">Skima</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>