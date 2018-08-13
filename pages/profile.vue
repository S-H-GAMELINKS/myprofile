<template>
<div>
  <div class="side-menu">
    <nav-menu/>
  </div>
  <section class="container">
    <div>
      <h1 class="title">
        {{name}}<br><br>
      </h1>
      <h2 class="subtitle">スキル<br><br>{{mainskill}}<br><br></h2>
      <h2 class="subtitle">サブスキル<br><br>{{subskill}}<br><br></h2>
      <h2 class="subtitle">現在興味のあること<br><br>{{interest}}<br><br></h2>
    </div>
  </section>
</div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'

export default {
  data: function() {
    return {
      name: "S.H.",
      mainskill: "C/C++/DxLib/Ruby/Ruby on Rails/DXRuby/Vue.js/Nuxt.js",
      subskill: "Heroku/Google Cloud Platform",
      interest: "C++/Ruby/Mastodon/Vue.js",
    }
  },
  components: {
    NavMenu,
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

