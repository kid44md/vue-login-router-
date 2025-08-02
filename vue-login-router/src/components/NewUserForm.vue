<template>
    <main>
 <div>
        <h2>Create an Account</h2>
    </div>
    <div>
        <br>
        <form @submit.prevent="createAccount">
                <label for="username">Username</label>
                <br>
                <input type="text" placeholder="Username" name="username" v-model="formUsername">
                <p class="hasError" v-show="isValidUsername">Please enter a username</p>
                <p class="hasError" v-show="usernameExist">Username Already Exist!</p>
                <br>
                <br>
                <label for="password">Password</label>
                <br>
                <input type="text" placeholder="password" name="password" v-model="formPassword">
                <p class="hasError" v-show="isValidPassword">Please enter a password</p>
            <br>
            <br>
                <button type="submit">submit</button>
            </form>
        </div>

    </main>
   
</template>
<script setup>
import { ref, defineEmits } from 'vue';
import { checkingDatabase } from '@/Scripts/formHandlersScripts/formController';
const emits = defineEmits(['createUser']);

const formUsername = ref('');
const formPassword = ref('');
const isValidUsername = ref(false);
const isValidPassword = ref(false);
const usernameExist = ref (false);
function createAccount(){

    if(formUsername.value == ""){
    //checks the username
    isValidUsername.value = true;
    }else if(formPassword.value == ""){
    //checks the password
    isValidPassword.value = true;
    }else{
    //send the emit event to the parent
    isValidUsername.value = false;
    isValidPassword.value = false;
    const doesNotExist = checkingDatabase(formUsername.value, formPassword.value)
    console.log(doesNotExist);
    if(!doesNotExist){
    emits('createUser', formUsername.value, formPassword.value);
    }else{
    usernameExist.value = true;
    }
    }


}


</script>
<style scoped>
.hasError{
    text-decoration: solid;
    color: red;
}

</style>