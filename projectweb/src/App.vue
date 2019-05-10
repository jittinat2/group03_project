<template>
  <div id="app">
    <div class="ui black inverted menu">
      <router-link :to="{ path: '/'}">
      <div class=" item">
        <img class="ui tiny image" src="./assets/LogoTournamentGenerator.png">
      </div>
      </router-link>
      <div class="compact right menu" v-if="check.result != 'Success'">
        <router-link :to="{ path: '/login'}">
          <div class="ui item">

            <button class="ui center aligned invert black basic button" href="#/login" style="margin: 0.4px"> 
              <i class="inverted sign-in icon"></i>
              <a style="color: white; font-size: 15px;" >Login</a>
            </button>
            </div>

        </router-link>
        <router-link :to="{ path: '/signup'}">
          <div class="ui item">
            <button class="ui invert black basic button" href="#/signup" style="margin: 0.4px">
              <i class="inverted user plus icon"></i>
              <a style="color: white; font-size: 15px;">Sign Up</a>
            </button>
          </div>
        </router-link>
      </div>
      <div class="compact right menu" v-else>
        <div class="ui item">
          <a>Hello !! {{profile.profilename}}</a>
        </div>
        <div class="ui item">
          <i class="white sign-out"></i>
          <a href="/" @click="logOut">Log out</a>
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
      profile: []
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
          username: this.uname
        };
        axios
          .post("http://localhost:5000/profile/AUser", ob)
          .then(response => {
            console.log(response.data);
            this.profile = response.data;
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
#test1 {
  background: rgba(15, 15, 15, 0);
}
</style>
