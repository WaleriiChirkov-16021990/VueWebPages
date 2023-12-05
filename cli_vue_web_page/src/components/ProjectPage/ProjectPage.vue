<script>
import PosterHeaderImage from "@/components/PosterHeaderImage/PosterHeaderImage.vue";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "ProjectPage",
  props: ['poster', 'cartsBlockProject'],
  components: {PosterHeaderImage},
  data() {
    return {
      myPoster: {},
      myCartsBlockProject: [],
      tabs: [
        {
          id: 1,
          name: 'Bathroom',
          isTrue: false
        }, {
          id: 2,
          name: 'Bed Room',
          isTrue: true
        }, {
          id: 3,
          name: 'Kitchan',
          isTrue: false
        }, {
          id: 4,
          name: 'Living Area',
          isTrue: false
        },
      ]
    }
  },
  created() {
    this.myPoster = this.poster;
    this.myCartsBlockProject = this.cartsBlockProject;
  },
  methods: {
    toggleTabs(idTabs) {
      this.tabs.forEach(el => {
        el.isTrue = el.id === idTabs;
      })
    },
    ...mapMutations(['SET_CARTS_BLOCK_PROJECT']),

  },
  computed: {
    filteredInputStreamData() {
      let tempData;
      this.tabs.forEach(el => {
        if (el.isTrue) {
          tempData = this.myCartsBlockProject.filter(elCart => elCart.nameTab === el.name);
        }
      })
      return tempData;
    },
    ...mapState(['cartsBlockProject', 'poster']),
    ...mapGetters(['getCartsBlockProject']),
    // ...mapActions(['fetchData']),

  },
}
</script>

<template>
  <main class="project-page">
    <PosterHeaderImage :poster="myPoster"/>
    <div class="cart__block container">
      <div class="cart__block__tab__centered">
        <div class="cart__block__tab__container">
          <button class="cart__block__tab__button " v-for="(item,index) in tabs"
                  :key="index" v-bind:class="{'cart__block__tab__button__2': item.isTrue}" @click="toggleTabs(item.id)">
            {{ item.name }}
          </button>
        </div>
      </div>
      <div class="cart__block__project__container">
        <div class="cart__block__project__item1" v-for="(item,index) in filteredInputStreamData" :key="index">
          <img class="project__image__main" :src="item.image" alt="Photo1">
          <img class="project__image__star" v-show="item.isStar" :src="item.starPicture" alt="StarPicture.svg">
          <div class="more__info">
            <div class="min__description">
              <p class="min__description__title">{{ item.title }}</p>
              <p class="min__description__specification">{{ item.description }}</p>
            </div>
            <img src="../../../src/assets/img/product/_.svg" alt="arrow link">
          </div>
        </div>
      </div>
      <div class="nav__links__pages">
        <nav class="products__news__box__link__pages__project container">
          <a href="#" class="products__news__box__link__pages1">
            <p class="products__news__box__link__pages__button products__news__box__link__pages1__button">01</p>
          </a>
          <a href="#" class="products__news__box__link__pages2">
            <p class="products__news__box__link__pages__button">02</p>
          </a>
          <a href="#" class="products__news__box__link__pages3">
            <p class="products__news__box__link__pages__button">03</p>
          </a>
          <a href="#" class="products__news__box__link__pages4">
            <img class="products__news__box__link__arrow__img" src="../../../src/assets/img/productNews/_1.svg"
                 alt="arrowLink">
          </a>
        </nav>
      </div>
    </div>
  </main>
</template>

<style scoped lang="css">

.local__container {
  padding-left: calc(50% - 440px);
  padding-right: calc(50% - 4400px);
}

.products__news__box__link__pages__project {
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;
  margin-bottom: 200px;
}

.cart__block__tab__centered {
  display: flex;
  justify-content: space-evenly;
  width: 1200px;
}

.nav__links__pages {
  display: flex;
  justify-content: center;
  width: 1200px;
}

.cart__block {
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-content: center;
  gap: 61px;
}

.cart__block__tab__container {
  display: flex;
  width: 880px;
  justify-content: center;
  align-items: center;
  gap: 96px;
  border-radius: 18px;
  border: 1px solid #CDA274;
}


.cart__block__tab__button {
  color: #292F36;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border: none;
  background-color: #FFFFFF;
}

.cart__block__tab__button__2 {
  display: flex;
  padding: 26px 66px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 18px;
  background: #CDA274;
  color: #FFF;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
}

.cart__block__project__container {
  width: 1200px;
  -moz-column-count: 2;
  column-count: 2;
  gap: 40px;
}

.cart__block__project__item1 {
  display: flex;
  flex-direction: column;
  gap: 24px;
  float: left;
  page-break-inside: avoid;
  break-inside: avoid;
  margin-bottom: 30px;
  position: relative;
}

.project__image__star {
  position: absolute;
  top: 5px;
  left: 550px;
  width: 36px;
  height: 34px;
  flex-shrink: 0;
}

.more__info {
  display: flex;
  justify-content: space-between;
  max-width: 585px;
  align-items: center;
}

.min__description__title {
  color: #292F36;
  font-family: DM Serif Display, sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}

.min__description__specification {
  color: #4D5053;
  font-family: Jost, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}
</style>