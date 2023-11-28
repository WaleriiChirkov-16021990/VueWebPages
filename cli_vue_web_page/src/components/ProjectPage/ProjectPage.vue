<script>
import PosterHeaderImage from "@/components/PosterHeaderImage/PosterHeaderImage.vue";

export default {
  name: "ProjectPage",
  components: {PosterHeaderImage},
  data() {
    return {
      poster: {
        image: 'img/projectPage/Banner.svg',
        title: 'Our Project',
        thisChapter: 'Project'
      },
      cartsBlockProject: [
        {
          id: 1,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo1.svg',
          title: 'Minimal Bedroom',
          description: 'Decor / Artchitecture',
          isStar: true,

        }, {
          id: 2,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo2.svg',
          title: 'Minimal Bedroom',
          description: 'Decor / Artchitecture',
          isStar: false,

        }, {
          id: 3,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo3.svg',
          title: 'Classic Minimal Bedroom',
          description: 'Decor / Artchitecture',
          isStar: false,

        }, {
          id: 4,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo4.svg',
          title: 'Modern Bedroom',
          description: 'Decor / Artchitecture',
          isStar: true,
        }, {
          id: 5,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo5.svg',
          title: 'Modern Bedroom',
          description: 'Decor / Artchitecture',
          isStar: false,
        }, {
          id: 6,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo6.svg',
          title: 'Modern Bedroom',
          description: 'Decor / Artchitecture',
          isStar: false,
        }, {
          id: 7,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo7.svg',
          title: 'Modern Bedroom',
          description: 'Decor / Artchitecture',
          isStar: false,
        }, {
          id: 8,
          nameTab: 'Bed Room',
          image: 'img/projectPage/Photo8.svg',
          title: 'Modern Bedroom',
          description: 'Decor / Artchitecture',
          isStar: false,
        },
      ]
    }
  }
}
</script>

<template>
  <main class="project-page">
    <PosterHeaderImage :poster="poster"/>
    <div class="cart__block local__container">
      <div class="cart__block__tab__container">
        <button class="cart__block__tab__button">Bathroom</button>
        <button class="cart__block__tab__button cart__block__tab__button__2">Bed Room</button>
        <button class="cart__block__tab__button">Kitchan</button>
        <button class="cart__block__tab__button">Living Area</button>
      </div>
      <div class="cart__block__project__container">
        <div class="cart__block__project__header">
        </div>
      </div>

    </div>
  </main>
</template>

<style scoped lang="css">
.local__container {
  padding-left: calc(50% - 440px);
  padding-right: calc(50% - 440px);
}

.cart__block {
  display: flex;
  width: 1201px;
  flex-direction: column;
//align-items: center; justify-content: center; gap: 61px;
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


</style>