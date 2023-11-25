<script>
export default {
  name: "HeaderComponent"
}
</script>

<template>
  <header id="header" class="header">
    <div class="header__block">
      <div id="header__left" class="header__left">
        <img src="/img/Logo.svg" alt="Logo" class="header__logo__img"/>
        <p class="header__Name">Interno</p>
      </div>
      <div id="header__right" class="header__right">
        <nav id="nav" class="nav">
          <a href="#" id="footer__link__pages1" class="header__link__pages link__pages">Home</a>
          <a href="#" id="footer__link__pages2" class="header__link__pages link__pages">Project</a>
          <a href="#" id="footer__link__pages3"
             class="header__link__pages link__pages">Blog</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>