<template>
  <div id="app">
    <div class="ui black inverted menu">
      <a class="active item" href="#/">
        <img src="./assets/logo.png">
      </a>
      <div class="compact right menu" v-if="check.result != 'Success'">
        <div class="ui item">
          <a href="#/login">Login</a>
        </div>
        <div class="ui item">
          <i class="sign-out"></i>
          <a href="#/signup">Sign Up</a>
        </div>
      </div>
      <div class="compact right menu" v-else>
        <div class="ui item">
          <i class="user"></i>
          <a>Hello !! {{profile.profilename}}</a>
        </div>
        <div class="ui item">
          <i class="white sign-out"></i>
          <a href="#/signup" @click="logOut">Log out</a>
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
      check: [],
      uname: "",
      profile:[]
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    logOut() {
      axios
        .post("http://localhost:5000/profile/logout")
        .then(response => {
          console.log(response.result);
        })
        .catch(error => {
          console.log(error);
        });
      //window.location.reload();
    }
  },
  mounted() {
    axios
      .post("http://localhost:5000/profile/checkLogin")
      .then(response => {
        // next(vm => (vm.check = response.data.result));
        // console.log(this.check)
        console.log(response.data);
        this.uname = response.data.checkSession.username;
        console.log(this.uname);
        this.check = response.data;
        console.log(response.data);
        let ob = {
          username:this.uname
        }
        axios
          .post("http://localhost:5000/profile/AUser" , ob)
          .then(response => {
            console.log(response.data);
            this.profile = response.data
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  },
  beforeRouteEnter(to, from, next) {
    axios
      .post("http://localhost:5000/profile/checkLogin")
      .then(response => {
        next(vm => (vm.check = response.data.result));
        // console.log(this.check)
        console.log(response.data.result);
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
