<template>
  <div class="repass">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
            <h2> Forgot password </h2>
          <form class="ui form">
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Username</label>
              <input name="username" type="text" v-model="forReset.username" placeholder="Username">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Email</label>
              <input name="email" type="text"  v-model="forReset.email" placeholder="Email">
            </div>
          </form>
           <button class="ui button" type="submit" @click="Reset">Reset Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from '../router'
export default {
  name: "HelloWorld",
  data(){
    return{
      forReset: {
        username:"",
        email: ""
      }
    }
  },
  methods: {
    Reset(){
      if(this.forReset.username != "" && this.forReset.email != ""){
      axios
      .post("http://localhost:5000/profile/forget" , this.forReset)
        .then(response => {
          console.log(response.data.result);
        })
        .catch(error => {
          console.log(error);
        });
      let newName = {
        usrname: this.forReset.usrname
      }
      console.log(newName)
      router.push({ name:'ResetPass', params:{newName} })
      
      }else
      {
        alert("A data must be present")
      }
    }
  }
}
</script>

<style>
#test1 {
  background: rgba(15, 15, 15, 0);
}
#test2 {
  background: rgba(15, 15, 15, 0.8);
}
</style>



