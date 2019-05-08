<template>
  <div id="app">
    <div class="ui black inverted menu">
      <a class="active item" href="#/">
        <img src="./assets/logo.png">
      </a>

      <div class="compact right menu">
        <div>
          <div class="ui item">
            <a v-if="check == 'Success'" href="#/login">Login</a>
            </div>
            <div class="ui item">
          <a  v-if="check == 'Success'" href="#/signup">Sign Up</a>
            </div>
          
        </div>
      </div>
    </div>
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
  },
  mounted() {
    axios
      .post("http://localhost:5000/profile/checklogin", this.Account)
      .then(response => {
        console.log(response.data.result);
        this.check = response.data.result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
body {
  background-image: url("./assets/party.png") !important;
  background-size: cover !important;
}
</style>
