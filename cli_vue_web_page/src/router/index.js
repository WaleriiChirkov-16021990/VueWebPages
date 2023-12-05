import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);



export default new Router({
    mode: "history",
    routes:[
        {
            path: "/project-page",
            name: "ProjectPage",
            component: () => import("@/components/ProjectPage/ProjectPage.vue")
        },
        {
            path: "/project-details-page",
            name: "ProjectDetailsPage",
            component: () => import("@/components/ProjectDetailsPage/ProjectDetailsPage.vue")
        },
        {
            path: "/",
            name: "MainPage",
            component: () => import("@/components/MainPage/MainPage.vue")
        },
        {
            path: "/blog-page",
            name: "BlogPage",
            component: () => import("@/components/BlogPage/BlogPage.vue")
        },
        {
            path: "/blog-page-details",
            name: "BlogPageDetails",
            component: () => import("@/components/BlogDetailsPage/BlogDetailsPage.vue")
        },
        {
            path: "/header-component",
            name: "HeaderComponent",
            component: () => import("@/components/HeaderComponent/HeaderComponent.vue")
        },
        {
            path: "/footer-component",
            name: "FooterComponent",
            component: () => import("@/components/FooterComponent/FooterComponent.vue")
        },
        {
            path: "/not-found",
            name: "NotFound",
            component: () => import("@/components/NotFound/NofFound.vue")
        },
        {
            path: "*",
            redirect: "/not-found"
        }
    ]
});