<template>
  <div class="login">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Log in</h2>
          <form class="ui form">
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Username</label>
              <div class="ui left icon input">
                <input
                  name="username"
                  type="text"
                  v-model="Account.username"
                  placeholder="Username"
                >
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Password</label>
              <div class="ui left icon input">
                <input
                  name="password"
                  type="password"
                  v-model="Account.password"
                  placeholder="Password"
                >
                <i class="key icon"></i>
              </div>
            </div>
            <div style="text-align: right" id="test1">
              <a href="#/forgot" style="color: white; font-size: 15px">Forgot Password</a>
              <i class="question icon"></i>
            </div>
            <div class="left align grid" style="text-align: center">
              <router-link :to="{ path: '/'}">
                <button class="ui button" type="submit" @click="logIn">
                  <i class="sign-in icon"></i>
                  Login
                </button>
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
import router from "../router";
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
          if (response.data.result == "Fail") {
            alert("Username and/or Password wrong!");
            window.location.reload();
          } else {
            this.$router.go("/");
          }
        })
        .catch(error => {
          console.log(error);
        });

      // router.push({ name:'HelloWorld'})
    }
  }
};
</script>

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