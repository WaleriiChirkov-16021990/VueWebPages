<script>

import DesignCartComponent from "@/components/DesignCartComponent/DesignCartComponent.vue";
import PosterHeaderImage from "@/components/PosterHeaderImage/PosterHeaderImage.vue";

export default {
  name: 'BlogPage',
  components: {PosterHeaderImage, DesignCartComponent},
  data: function () {
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
        {
          id: 3,
          img: {
            src: 'img/fromBlogHTML/Photo10.svg',
            alt: 'new photo',
          },
          title: `Let’s Get Solution For <br>Building Construction <br>Work`,
          productBoxDate: '26 December,2022 ',
          imgArrow: {
            src: 'img/productNews/_1.svg',
            alt: 'arrow',
          },
          blogInfoDesign: 'Kitchan Design',
        }
        , {
          id: 4,
          img: {
            src: 'img/fromBlogHTML/Photo11.svg',
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
          id: 5,
          img: {
            src: 'img/fromBlogHTML/Photo12.svg',
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
        }
      ],
      poster: {
        image: 'img/fromBlogHTML/posters/Photo7.svg',
        title: 'Articles & News',
        thisChapter: 'Blog'
      }
    };
  },
}


</script>

<template>
  <main class="main" id="main">
    <PosterHeaderImage :poster="poster"/>
    <div class="blog__latest__post container">
      <div class="blog__latest__post__title">
        <p class="blog__latest__post__title__p">Latest Post</p>
      </div>
      <div class="blog__latest__post__poster">
        <div class="blog__latest__post__banner">
          <div class="blog__latest__post__img">
            <img class="blog__latest__post__image" src="../../../src/assets/img/fromBlogHTML/Photo8.svg"
                 alt="banner__latest">
          </div>
          <div class="blog__latest__post__info">
            <p class="blog__latest__post__info__title">Low Cost Latest Invented Interior Designing Ideas</p>
            <p class="blog__latest__post__info__description">Lorem ipsum dolor sit amet, adipiscing Aliquam
              eu
              sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.

              Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
            <div class="blog__latest__post__info__data">
              <p class="blog__latest__post__info__date">26 December,2022</p>
              <a href="/blog-page-details" class="blog__latest__post__info__link">
                <img src="../../../src/assets/img/product/_.svg" alt="arrow link">
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div id="products" class="products">
      <div id="products__news" class="blog__products__news products__news container">
        <div id="products__news__title__info" class="blog__products__news__info">
          <p class="blog__products__news__info__title">Articles & News</p>
        </div>
        <div id="products__news__box" class="blog__products__news__box container">
          <DesignCartComponent v-for="(items,index) in cartsDesign" :key="index" :item="items"
                               class="products__news__box__item"></DesignCartComponent>
        </div>
      </div>
    </div>
    <nav class="products__news__box__link__pages container">
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
  </main>
</template>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>
