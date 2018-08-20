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