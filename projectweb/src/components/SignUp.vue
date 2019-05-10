<template>
  <div class="login">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Sign Up</h2>
          <form class="ui form">
            <!-- sign up form -->
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
                  type="password"
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
                  type="password"
                  v-model="Account.confirmpassword"
                  placeholder="Password"
                >
                <i class="key icon"></i>
              </div>
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Email</label>
              <div class="ui left icon input">
                <input name="email" type="email" v-model="Account.email" placeholder="email@mail.com">
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
          <!-- button sign up will call signUp fuction when click -->
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
    signUp() {                                                                // signUp funtion
      if (
        this.Account.username != "" &&                                        //check not null
        this.Account.password != "" &&
        this.Account.email != "" &&
        this.Account.profilename != "" &&
        this.confirmpassword != ""
      ) {
        if (this.Account.password == this.Account.confirmpassword) {          //check password = confirmpassword
          let newUser = {
            username: this.Account.username,
            password: this.Account.password,
            email: this.Account.email,
            profilename: this.Account.profilename
          };
          axios
            .post("http://localhost:5000/profile/signup", newUser)            //sign up and sent newUser to DB
            .then(response => {
              console.log(response.data.result);                              // DB will return result fail or success
              console.log(newUser.username);
              if(response.data.result == "Fail"){                              //if fail will alert and reload page
                alert("This Username cannot used")
                window.location.reload()
              }else{
                this.$router.replace("/");                                    //if success web will go to home page
              }
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          alert("Confirm Password is not match Password");                      //alert when password not match
        }
      } else {
        alert("A data must be present");                                        //alert when input is null
      }
      router.push({ name: "/" });                                               //will go to homepage when signUp funtion complete
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
