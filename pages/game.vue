<template>
<div>
  <div class="side-menu">
    <nav-menu/>
  </div>
  <section class="container">
    <div>
      <slider :slides="slides"></slider>
      <h1 class="title">
        Game
      </h1>
      <h2 class="subtitle">
        これまでに制作してきたゲーム
      </h2>
    </div>
  </section>
</div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'
import Slider from '~/components/Slider.vue'

export default {
  data: function() {
    return {
      slides: [
        {path: "/game/links1.png", content: "開発したノベルゲームエンジン"},
        {path: "/game/links2.png", content: "半角英数のタグを使用します"},
        {path: "/game/hanakotoba1.png", content: "花言葉を使った短編"},
        {path: "/game/hanakotoba2.png", content: "コーディングなどを担当しました"},
        {path: "/game/igv1.png", content: "異能コメディ"},
        {path: "/game/igv2.png", content: "コーディングや演出を担当"},
        {path: "/game/bml1.png", content: "クトゥルフ神話を使った短編"},
        {path: "/game/bml2.png", content: "コーディングなどほぼ全てを担当"},
        {path: "/game/ve1.png", content: "ダメ人間たちのオーケストラ"},
        {path: "/game/ve2.png", content: "原案などを担当しました"},
        {path: "/game/vendetta1.png", content: "出雲を舞台に青年と少女がふれあう"},
        {path: "/game/vendetta2.png", content: "シナリオなどを担当しました"},
        {path: "/game/vendetta1.png", content: "復讐に取りつかれた男の短編"},
        {path: "/game/vendetta2.png", content: "シナリオなどを全て担当"},
        {path: "/game/TOL1.png", content: "家族を失った男性と少女のふれあい"},
        {path: "/game/TOL2.png", content: "こちらもシナリオ他全てを担当"},
      ]
    }
  },
  components: {
    NavMenu,
    Slider
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

