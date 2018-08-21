<template>
<div>
  <div class="side-menu">
    <nav-menu/>
  </div>
    <div>
      <div class="display-1" id="title">名前</div>
      <div class="display-1" id="content">{{name}}</div>
      <div class="display-1" id="title">スキル</div>
      <div class="display-1" id="content" v-for="(main, key, index) in mainskill" :key="index">{{main}}</div>
      <div class="display-1" id="title">サブスキル</div>
      <div class="display-1" id="content" v-for="(sub, key, index) in subskill" :key="index">{{sub}}</div>
      <div class="display-1" id="title">現在興味のあること</div>
      <div class="display-1" id="content" v-for="(int, key, index) in interest" :key="index">{{int}}</div>
    </div>
</div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'

export default {
  data: function() {
    return {
      name: "S.H.",
      mainskill: ["C", "C++", "DxLib", "Ruby", "Ruby on Rails", "DXRuby", "Vue.js", "Nuxt.js"],
      subskill: ["Heroku", "Google Cloud Platform"],
      interest: ["C++", "Ruby", "Vue.js", "Mastodon"],
    }
  },
  components: {
    NavMenu,
  }
}
</script>

<style>
  #title{
    text-align: center;
    margin-top: 30px;
  }

  #content{
    text-align: center;
    margin-top: 10px;
  }
</style>
