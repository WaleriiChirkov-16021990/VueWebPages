<script>
import PosterHeaderImage from "@/components/PosterHeaderImage/PosterHeaderImage.vue";

export default {
  name: "ProjectPage",
  components: {PosterHeaderImage},
  data() {
    return {
      poster : {
        image:'img/projectPage/Banner.svg',
        title: 'Our Project',
        thisChapter: 'Project'
      }
    }
  }
}
</script>

<template>
  <main>
    <PosterHeaderImage :poster="poster"/>
  </main>
</template>

<style scoped lang="css">

</style>