<template>
  <div class="login">
    <div class="ui segment">
      <h2> Log in </h2>
    <form class="ui form">
      <div class="field">
        <label>Username</label>
        <input name="username" type="text" v-model="Account.username" placeholder="Username">
      </div>
      <div class="field">
        <label>Password</label>
        <input name="password" type="text" v-model="Account.password" placeholder="Password">
      </div>
      <button class="ui button" type="submit" @click="logIn">Login</button>
    </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      Account:{
        username: '',
        password: ''
      }
    };
  },
  methods: {
    logIn() {
       axios.get('http://localhost:5000/profile/user/login/'+ this.Account.username)
      .then((response)=>{
        if(this.Account.username != "" && this.Account.password != "") {
        if(this.Account.username == response.data.username && 
        this.Account.password == response.data.password) {
            this.$router.replace('/');
        } else {
          
            alert("The username and / or password is incorrect");
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>