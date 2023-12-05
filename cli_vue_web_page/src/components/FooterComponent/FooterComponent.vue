<script>
export default {
  name: "FooterComponent"
}
</script>

<template>
  <footer id="footer" class="footer">
    <div id="footer__left" class="footer__left">
      <nav id="footer__logo" class="footer__logo">
        <img src="/img/Logo.svg" alt="logo" class="footer__logo__img">
        <p class="footer__logo__name">Interno</p>
      </nav>
      <div id="footer__left__description" class="footer__left__description">
        It is a long established fact that a reader will be distracted lookings.
      </div>
      <nav id="footer__social__links" class="footer__social__links">
        <a href="https://twitter.com" class="footer__social__links__twitter"><img
            src="/img/socialLink/twitter.svg" alt="twitter logo"
            class="twitter"></a>
        <a href="" class="footer__social__links__in"><img src="/img/socialLink/in.svg"
                                                          alt="in logo" class="in"></a>
      </nav>
    </div>
    <nav id="footer__center" class="footer__center">
      <p id="footer__center__title" class="footer__center__title">Pages</p>
<!--      <a id="footer__link__pages_1" class="footer__link__pages link__pages" href="#">Home</a>-->
<!--      <a id="footer__link__pages_2" class="footer__link__pages link__pages" href="#">Project</a>-->
<!--      <a id="footer__link__pages_3" class="footer__link__pages link__pages" href="#">Blog</a>-->
      <router-link to="/" class="footer__link__pages link__pages">Home</router-link>
      <router-link to="/project-details-page" class="footer__link__pages link__pages">Details Page</router-link>
      <router-link to="/blog-page" class="footer__link__pages link__pages">Blog</router-link>
    </nav>
    <div class="footer__mock__bloc"></div>
    <div id="footer__right" class="footer__right">
      <div id="footer__right__title" class="footer__right__title">Contact</div>
      <div class="footer__right__description">
        <p class="footer__right__address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="footer__right__email">contact@interno.com</p>
        <p class="footer__right__phoneNumber">(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>