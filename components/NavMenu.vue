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
          <div v-for="(w, key, index) in work" :key="index">
          <el-menu-item :index="1-4-1"><a :href="w.link">{{w.name}}</a></el-menu-item>
          </div>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<style>
a{
  color: white;   
}
</style>


<script>
  export default {
    data: function() {
        return {
            work: [
                {link: "https://www.lancers.jp/profile/S_H_", name: "Lancers" },
                {link: "https://crowdworks.jp/public/employees/1497011", name: "CrowdWorks" },
                {link: "https://coconala.com/users/410038", name: "Coconala" },
                {link: "https://skima.jp/u/id33529/", name: "Skima" },
            ]
        }
    },
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