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
  <main class="project__details__page container">
    <div class="poster__image ">
      <img :src="projectDetailsData.posterImgSrc" alt="posterImg">
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
.project__details__page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.poster__image {
  margin-bottom: 175px;
}

.title__text {
  color: #292F36;
  font-family: DM Serif Display, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
  width: 565px;
  margin-bottom: 11px;
}

.description__text {
  color: #4D5053;
  font-family: Jost, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  width: 658px;
  margin-bottom: 70px;
}

</style>