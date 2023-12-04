<script>
import {mapGetters, mapMutations, mapState} from "vuex";
import SliderImage from "@/components/SliderImg/SliderImage.vue";

export default {
  name: "ProjectDetailsPage",
  components: {SliderImage},
  methods: {
    ...mapMutations(['SET_PROJECT_DETAILS_DATA'])
  },
  computed: {
    ...mapState(['projectDetailsData']),
    ...mapGetters(['getProjectDetails'])
  }
}
</script>

<template>
  <main class="project__details__page">
    <div class="poster__image">
      <img :src="projectDetailsData.posterImgSrc" alt="">
    </div>
    <div class="poster__description">
      <p class="title__text">
        {{ projectDetailsData.titlePoster }}
      </p>
      <p class="description__text">
        {{ projectDetailsData.descriptionPoster }}
      </p>
    </div>
    <div class="slider">
      <slider-image/>
    </div>

  </main>
</template>

<style scoped lang="css">

</style>