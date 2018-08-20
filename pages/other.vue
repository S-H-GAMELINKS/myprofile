<template>
<div>
  <div class="side-menu">
    <nav-menu/>
  </div>
  <section class="container">
    <div>
      <h1 class="title">
        Other
      </h1>
      <h2 class="subtitle">
        これまでに制作してきたプロダクト
      </h2>
      <slider :slides="slides"></slider>
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
        {path: "/game/links1.png", content: "開発したノベルゲームエンジン「LINKS」"},
        {path: "/game/links2.png", content: "C/DxLibにて開発"},
        {path: "/product/fc1.png", content: "食品管理アプリ:Foods Checker"},
        {path: "/product/fc2.png", content: "Ruby on Railsにて開発"},
        {path: "/product/sw1.png", content: "簡単なストップウオッチアプリ"},
        {path: "/product/sw2.png", content: "C++/Boost/cvuiにて開発"},
        {path: "/product/smp1.png", content: "シンプルなミュージックプレイヤー"},
        {path: "/product/smp2.png", content: "C++/DxLib/Boostにて開発"},
        {path: "/product/em1.png", content: "ご飯を食べた所の位置情報などを取得するアプリ"},
        {path: "/product/em2.png", content: "Ruby on Railsにて開発"},
        {path: "/game/links1.png", content: "開発したノベルゲームエンジン「LINKS」C++"},
        {path: "/game/links2.png", content: "C++/DxLib/Boostにて開発"},
        {path: "/product/web1.png", content: "代表をしているゲームリンクスのWebサイト"},
        {path: "/product/web2.png", content: "フロントをVue.js、バックをRailsで動かしています"},
        {path: "/product/cr1.png", content: "管理人をしているCreatodonのイラスト投稿サービス"},
        {path: "/product/cr2.png", content: "Ruby on Railsにて開発"},
        {path: "/game/links1.png", content: "開発したノベルゲームエンジン「LINKS」on Ruby"},
        {path: "/game/links2.png", content: "Ruby/DXRubyにて開発中"},
        {path: "/product/l1.png", content: "シンプルなMastodonクライアント"},
        {path: "/product/l2.png", content: "Ruby/Tkにて開発中"},
        {path: "/product/ii1.png", content: "ishiji.social向けのイラスト投稿サービス"},
        {path: "/product/ii2.png", content: "Ruby on Railsにて制作中"},
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