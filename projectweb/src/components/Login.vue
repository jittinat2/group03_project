<template>
  <div class="login">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Log in</h2>
          <form class="ui form">
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Username</label>
              <input name="username" type="text" v-model="Account.username" placeholder="Username">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Password</label>
              <input name="password" type="text" v-model="Account.password" placeholder="Password">
            </div>
            <div style="text-align: right" id="test1">
              <a href="#/forgot" style="color: white; font-size: 15px">Forgot Password?</a>
            </div>
            <div class="left align grid" style="text-align: center">
              <router-link :to="{ path: '/'}">
              <button class="ui button" type="submit" @click="logIn" >Login</button>
              <!-- <button class="ui button" type="submit" href="#/signup">Sign Up</button> -->
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from '../router';
export default {
  name: "Login",
  data() {
    return {
      Account: {
        username: "",
        password: ""
      },
      session: "",
      check: []
    };
  },
  methods: {
    logIn() {
      axios
        .post("http://localhost:5000/profile/login", this.Account)
        .then(response => {
          console.log(response.data.result);
                  this.$router.go("/")
        })
        .catch(error => {
          console.log(error);
        });

            // router.push({ name:'HelloWorld'})
    },
    // check(){
    //   axios.post("http://localhost:5000/profile/checkLogin")
    //   .then(response => {
    //     console.log(response.data.result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // }
      
  },
  // beforeRouteEnter(to, from, next) {
  //   axios
  //     .post("http://localhost:5000/profile/checkLogin")
  //     .then(response => {
  //       next(vm => (vm.check = response.data.result));
  //       // console.log(this.check)
  //       console.log(response.data.result);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // // },
  // mounted() {
  //   axios
  //     .post("http://localhost:5000/profile/checkLogin")
  //     .then(response => {
  //       next(vm => (vm.check = response.data.result));
  //       // console.log(this.check)
  //       console.log(response.data.result);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#test1 {
  background: rgba(15, 15, 15, 0);
}
#test2 {
  background: rgba(15, 15, 15, 0.8);
}
h2 {
  color: white;
  font-size: 30px;
}
</style>