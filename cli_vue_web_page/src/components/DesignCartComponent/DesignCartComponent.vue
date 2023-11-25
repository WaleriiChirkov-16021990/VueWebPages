<script>
export default {
  props: ['item'],
  name: "DesignCartComponent"
}
</script>

<template>
  <div class="design__cart__component">
    <img :src="item.img.src" :alt="item.img.alt" class="products__news__box__item__img">
    <p class="blog__info__design">{{ item.blogInfoDesign }}</p>
    <div class="products__news__box__title" v-html="item.title"></div>
    <div class="products__news__box__info">
      <p class="products__news__box__date">{{ item.productBoxDate }}</p>
      <a href="#" class="products__news__box__link"><img :src="item.imgArrow.src"
                                                         :alt="item.imgArrow.alt"
                                                         class="products__news__box__link__arrow"></a>
    </div>
  </div>
</template>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>