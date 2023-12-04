<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "SliderImage",
  props: ['images'],
  data() {
    return {
      slideIndex: 1,
    }
  },
  methods: {
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    currentSlide(n) {
      this.showSlides(this.slideIndex = n);
    },
    showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("slider-wrapper");
      const dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
    ...mapMutations(['SET_PROJECT_DETAILS_DATA'])
  },
  computed:{
    ...mapState(['projectDetailsData']),
    ...mapGetters(['getProjectDetails']),

  },
}
</script>

<template>
  <div class="slider-container">
    <div class="slider-wrapper fade" v-for="(item,index) in projectDetailsData.sliderPhoto" :key="index">
      <div class="number-tex">{{index + 1}}/{{projectDetailsData.sliderPhoto.length}}</div>
      <img :src="item.image" style="width: 100%;" alt="img-one" class="img-one">
    </div>
    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
    <a class="next" @click="plusSlides(1)">&#10095;</a>
    <div style="text-align: center;" class="dots_container">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot active" @click="currentSlide(3)"></span>
    </div>
    document.addEventListener('DOMContentLoaded', function () {
      {{this.showSlides}}
    });
  </div>
</template>

<style scoped lang="css">
.slider-container {
  position: relative;
  margin: 0 auto;
  max-width: 1000px;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next, .number-tex {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.dot.active, .dot:hover {
  background-color: #717171;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}

@keyframes fade {
  from {
    opacity: .4
  }
  to {
    opacity: 1
  }
}
</style>