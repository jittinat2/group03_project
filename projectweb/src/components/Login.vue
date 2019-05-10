<template>
  <div class="login">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Log in</h2>
          <form class="ui form">
            <!-- form part -->
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
              </router-link>
              <!-- call to home page and logIn function if click this button -->
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
        .post("http://localhost:5000/profile/login", this.Account)            //pass username and password to login into DB
        .then(response => {
          console.log(response.data.result);                                  //DB will return result success or fail
          if (response.data.result == "Fail") {                               //if faill web will alert and reload
            alert("Username and/or Password wrong!");
            window.location.reload();
          } else {
            this.$router.go("/");                                             //if success will fo to home page
          }
        })
        .catch(error => {
          console.log(error);
        });
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