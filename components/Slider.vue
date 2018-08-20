<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in slides"
      :key="i"
      :src="item.path"
      {{item.content}}
    ></v-carousel-item>
  </v-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
  export default {
    data: function() {
        return {
            slides: this.$parent.slides,
            log: console.log(this.$parent.slides)
        }
    }
  }
</script>