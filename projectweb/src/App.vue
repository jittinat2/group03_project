<template>
  <div id="app">
    <div class="ui  grey inverted menu">
    <a class="active item" href="#/">
      <img src="./assets/logo.png">
    </a>

    <div class="right menu">
      <a class="item">Login</a>
      <a class="item">Sign Up</a>

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
body {
  background-color: dimgrey;
}
</style>
