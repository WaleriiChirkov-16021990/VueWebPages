<script>
import NavigationComponent from "@/components/NavigationComponent/NavigationComponent.vue";

export default {
  name: "PosterHeaderImage",
  components: {NavigationComponent},
  props: ['poster'],
  data() {
    return {
      navigation:[{name:'Home', href:'#'},]
    }
  },
  created() {
    this.navigation.push({name: this.poster.thisChapter, href: '#'})
  }
}

</script>

<template>
  <div id="banner" class="banner container__full">
    <img id="banner__img" class="banner__img" :src="poster.image"
         alt="banner__Background"/>
    <div id="banner__info" class="banner__info">
      <div id="banner__title" class="banner__title">
        <p class="banner__title">{{ poster.title }}</p>
      </div>
      <NavigationComponent :navigation-links="navigation"/>
    </div>
  </div>
</template>

<style scoped lang="css">

</style>