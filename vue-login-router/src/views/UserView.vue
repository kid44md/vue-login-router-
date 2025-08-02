<script setup>
import UserProfile from '@/components/UserProfile.vue';
import { useRoute } from 'vue-router';
const router = useRoute();
console.log(router);
</script>
<template>
    <header>
        <nav>
        <RouterLink to="">dashboard</RouterLink>
        <router-link :to="{name:'logout', params:{username:router.params.username}}">Log Out</router-link>
        </nav>
    </header>
       <router-view></router-view>
</template>