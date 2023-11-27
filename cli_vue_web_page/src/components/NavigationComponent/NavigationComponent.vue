<script>
export default {
  name: "NavigationComponent",
  props: ['navigationLinks'],
  data() {
    return {
      thisChapter : '',
    }
  },
  created() {
    this.thisChapter = this.navigationLinks.thisChapter;
  }
}
</script>

<template>
  <nav id="banner__nav" class="banner__nav">
    <a v-for="(item,index) in navigationLinks" :key="index" :href="item.href" id="banner__link__pages"
       class="header__link__pages link__pages">{{ item.name }} <span class="banner__/"
    v-if="index < navigationLinks.length - 1"> / </span> </a>
  </nav>
</template>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>