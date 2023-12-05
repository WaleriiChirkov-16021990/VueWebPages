<template>
  <div id="app" class="app">
    <header-component/>
    <router-view />
    <footer-component/>
  </div>
</template>

<script>

import {mapGetters, mapMutations, mapState} from "vuex";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent
  },
  data() {
    return{
      poster: {
        image: 'img/projectPage/Banner.svg',
        title: 'Our Project',
        thisChapter: 'Project'
      },
    }
  },
  methods: {
    // fetchData() {
    //   return [
      //   {
      //     id: 1,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo1.svg',
      //     title: 'Minimal Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: true,
      //     starPicture: 'img/projectPage/Star3.svg',
      //
      //   }, {
      //     id: 3,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo3.svg',
      //     title: 'Classic Minimal Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //
      //   }, {
      //     id: 5,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo5.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 7,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo7.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 2,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo2.svg',
      //     title: 'Minimal Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //
      //   }, {
      //     id: 4,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo4.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: true,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 6,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo6.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 8,
      //     nameTab: 'Bed Room',
      //     image: 'img/projectPage/Photo8.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 9,
      //     nameTab: 'Bathroom',
      //     image: 'img/projectPage/Photo1.svg',
      //     title: 'Minimal Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: true,
      //     starPicture: 'img/projectPage/Star3.svg',
      //
      //   }, {
      //     id: 10,
      //     nameTab: 'Bathroom',
      //     image: 'img/projectPage/Photo3.svg',
      //     title: 'Classic Minimal Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //
      //   }, {
      //     id: 11,
      //     nameTab: 'Living Area',
      //     image: 'img/projectPage/Photo5.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 12,
      //     nameTab: 'Kitchan',
      //     image: 'img/projectPage/Photo7.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 13,
      //     nameTab: 'Kitchan',
      //     image: 'img/projectPage/Photo2.svg',
      //     title: 'Minimal Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //
      //   }, {
      //     id: 14,
      //     nameTab: 'Kitchan',
      //     image: 'img/projectPage/Photo4.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: true,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 15,
      //     nameTab: 'Kitchan',
      //     image: 'img/projectPage/Photo6.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }, {
      //     id: 16,
      //     nameTab: 'Kitchan',
      //     image: 'img/projectPage/Photo8.svg',
      //     title: 'Modern Bedroom',
      //     description: 'Decor / Artchitecture',
      //     isStar: false,
      //     starPicture: 'img/projectPage/Star3.svg',
      //   }
      // ];
    // },
    ...mapMutations(['SET_CARTS_BLOCK_PROJECT','ADD_CARTS_BLOCK_PROJECT']),
    addNewData(data) {
      this.ADD_CARTS_BLOCK_PROJECT(data);
    },
  },
  created() {
    // this.cartsBlockProject = this.fetchData();

    this.SET_CARTS_BLOCK_PROJECT(this.fetchData())
    this.$router.push({name: 'MainPage'});
  },
  computed:{
    ...mapState(['cartsBlockProject']),
    ...mapGetters(['getCartsBlockProject','getFullBlockProjectId']),
    // ...mapActions(['fetchData']),

  }
}
</script>

<style scoped lang="css">
@import url(@/assets/style2.css);
</style>