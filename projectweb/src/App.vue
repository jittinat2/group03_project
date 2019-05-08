<template>
  <div id="app">
    <div class="ui black inverted menu">
    <a class="active item" href="#/">
      <img src="./assets/logo.png">
    </a>

    <div class="right menu">
    <div class="item">
      <a href="" v-if="true">aaaaa  </a>
    </div>
    <a class="ui item">
      Logout
    </a>
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
