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
          <el-menu-item index="1-1"><nuxt-link to="/profile">Profile</nuxt-link></el-menu-item>
        <el-submenu index="1-2">
          <template slot="title">Products</template>
          <div v-for="(p, key, index) in product" :key="index">
            <el-menu-item :index="1-2-index"><nuxt-link :to="p.link">{{p.name}}</nuxt-link></el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">SNS</template>
          <div v-for="(s, key, index) in sns" :key="index">
            <el-menu-item :index="1-3-index"><a :href="s.link">{{s.name}}</a></el-menu-item>
          </div>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title">Work</template>
          <div v-for="(w, key, index) in work" :key="index">
            <el-menu-item :index="1-4-index"><a :href="w.link">{{w.name}}</a></el-menu-item>
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
            product: [
                {link: "/game", name: "Game" },
                {link: "", name: "Other" },
            ],
            sns: [
                {link: "https://gamelinks007.net/@S_H_", name: "Mastodon"},
                {link: "https://github.com/S-H-GAMELINKS", name: "GitHub"},
                {link: "https://twitter.com/GAME_LINKS_", name: "Twitter"},
                {link: "https://qiita.com/S_H_", name: "Qiita"},
                {link: "https://speakerdeck.com/gamelinks007", name: "SpeckerDeck"},
            ],
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