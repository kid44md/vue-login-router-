<script setup>
import newUserForm from '../components/NewUserForm.vue';
import { ref } from 'vue';
import {creatingNewUser} from '@/Scripts/formHandlersScripts/formController.js';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();




function createUser(Username, Password){
    creatingNewUser(Username, Password);
    const user = {username:Username, isLogIn:true};
    localStorage.setItem(Username, JSON.stringify(user));
    router.push({ name: 'Dashboard', params: { username: Username } })
}



</script>

<template>
    <div>
 <newUserForm @create-user="createUser"/>
    </div>
</template>
