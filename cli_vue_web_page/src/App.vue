<template>
  <div id="app" class="app">
    <HeaderComponent/>
    <MainPage></MainPage>
    <BlogPage></BlogPage>
    <BlogPageDetails></BlogPageDetails>
    <project-page/>
    <FooterComponent/>
  </div>
</template>

<script>
import MainPage from '@/components/MainPage/MainPage.vue';
import BlogPage from '@/components/BlogPage/BlogPage.vue';
import BlogPageDetails from '@/components/BlogDetailsPage/BlogDetailsPage.vue';
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
import ProjectPage from "@/components/ProjectPage/ProjectPage.vue";

export default {
  name: 'App',
  components: {
    ProjectPage,
    FooterComponent,
    HeaderComponent,
    MainPage,
    BlogPage,
    BlogPageDetails
  },
  methods: {}
}
</script>

<style scoped lang="css">
@import url(@/assets/style2.css);

</style>