<template>
  <div class="login">
    <div class="ui segment">
        <h2> Sign Up </h2>
    <form class="ui form">
      <div class="field">
        <label>Username</label>
        <input name="username" type="text" v-model="Account.username" placeholder="Username">
      </div>
      <div class="field">
        <label>Password</label>
        <input name="password" type="text" v-model="Account.password" placeholder="Password">
      </div>
      <div class="field">
        <label>Confirm Password</label>
        <input name="confirmpassword" type="text" v-model="Account.confirmpassword" placeholder="Password">
      </div>
      <div class="field">
        <label>Email</label>
        <input name="email" type="text" v-model="Account.email" placeholder="Email">
      </div>
      <div class="field">
        <label>Profile Name</label>
        <input name="profilename" type="text" v-model="Account.profilename" placeholder="Profilename">
      </div>
      <button class="ui button" type="submit" @click="signUp">SignUp</button>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      Account:{
        username: '',
        password: '',
        email: '',
        profilename: '',
        confirmpassword: ''
      }
    };
  },
  methods: {
    signUp() {
        let newUser={
                username: this.Account.username,
                password: this.Account.password,
                email: this.Account.email,
                profilename: this.Account.profilename,
            }
       axios.post('http://localhost:5000/profile/user/signup',newUser)
      .then((response)=>{
        if(this.Account.username != "" && this.Account.password != "" && this.Account.email != "" && this.Account.profilename != "") 
        {
        {
            this.$router.replace('/');
        } 
        } else {
          
            alert("A username and password must be present");
        }
      })
      .catch((error)=>{
        console.log(error)
      })
     }
  }
};
</script>