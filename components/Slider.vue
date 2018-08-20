<template>
  <v-carousel hide-delimiters=true>
    <v-carousel-item v-for="(item,i) in slides" :key="i">
      <v-card>
        <v-card-media :src="item.path" height="440px"/>
          <v-card-text>
            {{item.content}}
          </v-card-text>
      </v-card>
    </v-carousel-item>
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