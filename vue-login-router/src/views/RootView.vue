<template>
<!--  RootView act as a frame for the router view
  As the user click the links, the content of the frame changes
  Essentially i create  nested routes -->

  <!-- the login and the signup doesn't need the "/" like the home because that is 
   automatically added by default in the Vue documentation -->

   <!-- base /home/ =>
    /home/login => /home/signup -->
<header>
    <nav>
        <RouterLink to="/home/">Home</RouterLink>
        <router-link to="login">Log In</router-link>
        <router-link to="signup">Create Account</router-link>
    </nav>
</header>
<main>
<router-view>    
</router-view>
</main>


</template>
<style scoped>
nav{
    display: flex;
    justify-content: space-between;
}
</style>