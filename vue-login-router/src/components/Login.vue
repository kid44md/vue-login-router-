<template>

    <main>
<div>
    <h2>Log In</h2>
</div>
        <div>
            <br>
            <form @submit.prevent="logInToAccount">
                <label for="username" >Username or Email</label>
                <br>
                <input type="text" placeholder="Username or Email" v-model="Username" >
                <p v-show="isValidUsername" class="hasError"> please enter a username</p>
                <br>
                <br>
                <label for="password">Password</label>
                <br>
                <input type="text" placeholder="password" v-model="Password">
                <br>
                <p v-show="isValidPassword"  class="hasError">please enter a password</p>
                <br>
                <button type="submit">Login</button>
            </form>
        </div>
    </main>
</template>
<script setup>
import { defineModel, ref } from 'vue';
import { loggingInUser } from '@/Scripts/formHandlersScripts/formController';
const Username = ref();
const Password = ref();
const emits = defineEmits(['logInUser']);
const isValidUsername = ref(false);
const isValidPassword = ref(false);
function logInToAccount(){
    if(Username.value == ""){
isValidUsername.value = true;
    }else if (Password.value == ""){
isValidPassword.value = true;
    }else{
const userExist =  loggingInUser(Username.value, Password.value);
if(userExist){
 emits('logInUser', Username.value);
}
    }
}
</script>
<style scoped>
.hasError{
    color: red;
}
</style>