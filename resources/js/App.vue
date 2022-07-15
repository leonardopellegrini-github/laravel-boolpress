<template>

    
   
        <header-comp-vue/>
        <router-view></router-view>
        


</template>

<script>

import HeaderCompVue from './components/partials/HeaderComp.vue';

export default {
    name: 'App',
    components: {
        HeaderCompVue
    },

   data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/posts",
            posts: []
        }
    },
    methods: {
        getApi() {
            axios.get(this.apiUrl).then((r) => {
                this.posts = r.data;
            });
        },
    },
    mounted() {
        this.getApi();
    }
}

</script>

<style>

</style>