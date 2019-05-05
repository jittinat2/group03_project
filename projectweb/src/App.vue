<template>
  <div id="app">
    <div>
      </div>
      <!-- <img src="./assets/logo.png"> -->
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
</style>
