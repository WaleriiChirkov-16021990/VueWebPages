<script>
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "SliderImage",
  data() {
    return {
      slideIndex: 1,
    }
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    plusSlides() {
      this.showSlides(this.slideIndex += 1);
    },
    subtractSlides() {
      this.showSlides(this.slideIndex -= 1);
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
  computed: {
    ...mapState(['projectDetailsData']),
    ...mapGetters(['getProjectDetails']),
  }
}
</script>

<template>
  <div class="slider-container">
    <div class="slider-wrapper fade" v-for="(item,index) in this.projectDetailsData.sliderPhoto" :key="index">
      <div class="number-tex">{{ index + 1 }}/{{ projectDetailsData.sliderPhoto.length }}</div>
      <img :src="item.image" style="width: 100%;" alt="img-one" class="img-one">
    </div>
    <a class="prev" @click="subtractSlides">&#10094;</a>
    <a class="next" @click="plusSlides">&#10095;</a>
    <div style="text-align: center;" class="dots_container">
      <span class="dot" v-for="(item,index) in this.projectDetailsData.sliderPhoto" :key="index"
            @click="currentSlide(index + 1)"></span>
    </div>
  </div>
</template>

<style scoped lang="css">
.slider-container {
  position: relative;
  margin: 0 auto 100px auto;
  max-width: 1201px;
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

.img-one {
  border-radius: 70px;
  background: #C4C4C4;
  width: 1201px;
  height: 799px;
  flex-shrink: 0;

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