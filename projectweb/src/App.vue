<template>
  <div id="app">
    <div class="ui black inverted menu">
    <a class="active item" href="#/">
      <img src="./assets/logo.png">
    </a>

    <div class="right menu">
      <a class="item" href="#/login">Login</a>
      <a class="item" href="#/signup">Sign Up</a>

    </div>
  </div>
  <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};

</script>

<style>
  body  {
        background-image: url("./assets/party.png") !important;
        background-size: cover !important;
        }
</style>
