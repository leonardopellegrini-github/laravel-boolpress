import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HomeComp from "./components/pages/HomeComp";
import AboutComp from "./components/pages/AboutComp";
import BlogComp from "./components/pages/BlogComp";
import ContactsComp from "./components/pages/ContactsComp";

const router = new VueRouter({
    mode: "history",
    linkActiveClass: 'active',
    routes: [{
            path: "/",
            name: "Home",
            component: HomeComp,
        },
        {
            path: "/chi-siamo",
            name: "About",
            component: AboutComp,
        },
        {
            path: "/blog",
            name: "Blog",
            component: BlogComp,
        },
        {
            path: "/contatti",
            name: "Contacts",
            component: ContactsComp,
        },
    ],
});

export default router;