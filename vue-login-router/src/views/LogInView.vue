<script setup>
import Login from '../components/Login.vue';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
function loggingIn(Username){
    const payload = {username:Username, isLogIn: true};
    localStorage.setItem(Username, JSON.stringify(payload));
    // router.push({name:})
    router.push({ name: 'Dashboard', params: { username: Username } });
}
</script>
<template>

<Login @log-in-user="loggingIn"/>

</template>