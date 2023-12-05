<script>
import DesignCartComponent from "@/components/DesignCartComponent/DesignCartComponent.vue";

export default {
  name: 'MainPage',
  components: {DesignCartComponent},
  data() {
    return {
      cartsDesign: [
        {
          id: 0,
          img: {
            src: 'img/productNews/Photo4.svg',
            alt: 'new photo',
          },
          title: `Let’s Get Solution For <br>Building Construction <br>Work`,
          productBoxDate: '26 December,2022 ',
          imgArrow: {
            src: 'img/productNews/_1.svg',
            alt: 'arrow',
          },
          blogInfoDesign: 'Kitchan Design',

        },
        {
          id: 1,
          img: {
            src: 'img/productNews/Photo5.svg',
            alt: 'new photo',
          },
          title: `Low Cost Latest Invented <br>Interior Designing
<br>Ideas.`,
          productBoxDate: '22 December,2022 ',
          imgArrow: {
            src: 'img/productNews/_1.svg',
            alt: 'arrow',
          },
          blogInfoDesign: 'Living Design',

        },
        {
          id: 2,
          img: {
            src: 'img/productNews/Photo6.svg',
            alt: 'new photo',
          },
          title: `Best For Any Office & <br>Business Interior <br>
Solution`,
          productBoxDate: '25 December,2022 ',
          imgArrow: {
            src: 'img/productNews/_1.svg',
            alt: 'arrow',
          },
          blogInfoDesign: 'Interior Design',

        },
      ]
    }
  },
}
</script>

<template>
  <main class="main" id="main">
    <div id="posters" class="posters container">
      <img id="posters__img" class="posters__img" src="../../../src/assets/img/Poster.png" alt="Poster__Background"/>
      <div id="posters__info" class="posters__info">
        <div id="posters__title" class="posters__title">
          <p class="posters__title">Let Your Home
            Be Unique</p>
        </div>
        <div id="posters__description" class="posters__description">
          <p class="posters__description">There are many variations of the passages of
            lorem Ipsum fromavailable, majority.
          </p>
        </div>
        <button id="posters__button" class="posters__button">
          Get Started
          <img src="../../../src/assets/img/Vector.svg" alt="vector__svg">
        </button>
      </div>
    </div>
    <div id="products" class="products">
      <div id="products__title" class="products__titles">
        <p class="products__title">Follow Our Projects</p>
        <p class="products__description">It is a long-established fact that a reader will be
          distracted by the
          of readable content of page looking at its layouts points.</p>
      </div>
      <div id="products__box " class="products__box container">
        <div class="products__box1">
          <div class="item">
            <div class="item__img item1__img"><img class="item1__img scale-up-center"
                                                   src="../../../src/assets/img/product/Photo.svg"
                                                   alt="Photo"></div>
            <div class="item__info">
              <div class="item__chapter">
                <p class="item__title">Modern Kitchan</p>
                <p class="item__description">Decor / Artchitecture</p>
              </div>
              <div class="item__link">
                <a href="#" class="item__link">
                  <img src="../../../src/assets/img/product/_.svg" alt="arrow"/>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item__img  item2__img"><img class="item2__img" src="../../../src/assets/img/product/Photo1.svg"
                                                    alt="Photo1"></div>
            <div class="item__info">
              <div class="item__chapter">
                <p class="item__title">Modern Kitchan</p>
                <p class="item__description">Decor / Artchitecture</p>
              </div>
              <div class="item__link">
                <a href="#" class="item__link">
                  <img src="../../../src/assets/img/product/_.svg" alt="arrow"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="products__box2">
          <div class="item">
            <div class="item__img  item3__img"><img class="item3__img" src="../../../src/assets/img/product/Photo2.svg"
                                                    alt="Photo2"></div>
            <div class="item__info">
              <div class="item__chapter">
                <p class="item__title">Modern Kitchan</p>
                <p class="item__description">Decor / Artchitecture</p>
              </div>
              <div class="item__link">
                <a href="#" class="item__link">
                  <img src="../../../src/assets/img/product/_.svg" alt="arrow"/>
                </a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item__img  item4__img"><img class="item4__img" src="../../../src/assets/img/product/Photo3.svg"
                                                    alt="Photo3"></div>
            <div class="item__info">
              <div class="item__chapter">
                <p class="item__title">Modern Kitchan</p>
                <p class="item__description">Decor / Artchitecture</p>
              </div>
              <div class="item__link">
                <a href="#" class="item__link">
                  <img src="../../../src/assets/img/product/_.svg" alt="arrow"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="products_statistics" class="products__statistics">
        <div id="products__statistics__box" class="products__statistics__box">
          <div id="products__statistic__item1" class="products__statistic__item products__statistic__item1">
            <div class="products__statistics__item__title">12</div>
            <div class="products__statistics__item__subtitle">Years Of Experiance</div>
          </div>
          <div class="golden__line"></div>
          <div id="products__statistic__item2" class="products__statistic__item products__statistic__item2">
            <div class="products__statistics__item__title">85</div>
            <div class="products__statistics__item__subtitle">Success Project</div>
          </div>
          <div class="golden__line"></div>
          <div id="products__statistic__item3" class="products__statistic__item products__statistic__item3">
            <div class="products__statistics__item__title">15</div>
            <div class="products__statistics__item__subtitle">Active Project</div>
          </div>
          <div class="golden__line"></div>
          <div id="products__statistic__item4" class="products__statistic__item products__statistic__item4">
            <div class="products__statistics__item__title">95</div>
            <div class="products__statistics__item__subtitle">Happy CUstomers</div>
          </div>
        </div>
      </div>
      <div id="products__news" class="products__news container">
        <div id="products__news__title__info" class="products__news__info">
          <p class="products__news__info__title">Articles & News</p>
          <p class="products__news__info__description">It is a long established fact that a reader will be
            distracted by the of readable content of a page when lookings at its layouts the points of
            using.</p>
        </div>
        <div id="products__news__box" class="products__news__box">
          <DesignCartComponent v-for="(items,index) in cartsDesign" :key="index" :item="items"
                               class="products__news__box__item"></DesignCartComponent>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>