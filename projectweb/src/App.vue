<template>
  <div id="app">
    <!-- <div class="ui black inverted menu">
      <a class="active item" href="#/">
        <img src="./assets/logo.png">
      </a>

      <div class="compact right menu">

          <!-- <div class="ui item">
            <a v-if="check != 'Success'" href="#/login">Login</a>
            </div>
            <div class="ui item">
          <a  v-if="check != 'Success'" href="#/signup">Sign Up</a>
            </div> 
          
        </div>

    </div> -->
    

  <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      check: []
    };
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
body {
  background-image: url("./assets/party.png") !important;
  background-size: cover !important;
}
</style>
