<template>
  <div class="login">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Sign Up</h2>
          <form class="ui form">
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Username</label>
              <input name="username" type="text" v-model="Account.username" placeholder="Username">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Password</label>
              <input name="password" type="text" v-model="Account.password" placeholder="Password">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Confirm Password</label>
              <input
                name="confirmpassword"
                type="text"
                v-model="Account.confirmpassword"
                placeholder="Confirm Password"
              >
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Email</label>
              <input name="email" type="text" v-model="Account.email" placeholder="Email">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Profile Name</label>
              <input
                name="profilename"
                type="text"
                v-model="Account.profilename"
                placeholder="Profilename"
              >
            </div>
            <button class="ui button" type="submit" @click="signUp">SignUp</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      Account: {
        username: "",
        password: "",
        email: "",
        profilename: "",
        confirmpassword: ""
      }
    };
  },
  methods: {
    signUp() {
      let newUser = {
        username: this.Account.username,
        password: this.Account.password,
        email: this.Account.email,
        profilename: this.Account.profilename
      };
      axios
        .post("http://localhost:5000/profile/user/signup", newUser)
        .then(response => {
          if (
            this.Account.username != "" &&
            this.Account.password != "" &&
            this.Account.email != "" &&
            this.Account.profilename != "" 
          ) {
            {
              this.$router.replace("/");
            }
          } else {
            alert("A username and password must be present");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    wrong 
  }
};
</script>

<style>
#test1 {
  background: rgba(15, 15, 15, 0);
}
#test2 {
  background: rgba(15, 15, 15, 0.9);
}
</style>
