<template>
  <div class="login">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Sign Up</h2>
          <form class="ui form">
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Username</label>
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
              <label style="color: white; font-size: 15px">Password</label>
              <div class="ui left icon input">
                <input
                  name="password"
                  type="text"
                  v-model="Account.password"
                  placeholder="Password"
                >
                <i class="key icon"></i>
              </div>
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Confirm Password</label>
              <div class="ui left icon input">
                <input
                  name="confirmpassword"
                  type="text"
                  v-model="Account.confirmpassword"
                  placeholder="Password"
                >
                <i class="key icon"></i>
              </div>
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Email</label>
              <div class="ui left icon input">
                <input name="email" type="text" v-model="Account.email" placeholder="Email">
                <i class="envelope icon"></i>
              </div>
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Profile Name</label>
              <div class="ui left icon input">
                <input
                  name="profilename"
                  type="text"
                  v-model="Account.profilename"
                  placeholder="Profilename"
                >
                <i class="user icon"></i>
              </div>
            </div>
          </form>

          <button class="ui button" style="margin-top: 10px" type="submit" @click="signUp">
            <i class="user plus icon"></i>
            SignUp
          </button>
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
        confirmpassword: "",
        email: "",
        profilename: ""
      }
    };
  },
  methods: {
    signUp() {
      if (
        this.Account.username != "" &&
        this.Account.password != "" &&
        this.Account.email != "" &&
        this.Account.profilename != "" &&
        this.confirmpassword != ""
      ) {
        if (this.Account.password == this.Account.confirmpassword) {
          // if(this.Account.username != this.data.username){
          let newUser = {
            username: this.Account.username,
            password: this.Account.password,
            email: this.Account.email,
            profilename: this.Account.profilename
          };
          axios
            .post("http://localhost:5000/profile/signup", newUser)
            .then(response => {
              console.log(response.data.result);
              console.log(newUser.username);
              //this.$router.replace("#/");
            })
            .catch(error => {
              console.log(error);
            });

          // }else{
          //    alert("Username cannot used")
          //  }
        } else {
          alert("Confirm Password is not match Password");
        }
      } else {
        alert("A data must be present");
      }
    }
  }
};
</script>

<style>
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
