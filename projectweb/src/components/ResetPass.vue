<template>
  <div class="repass">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Reset password</h2>
          <form class="ui form">
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">New Password</label>
              <input name="newpassword" type="text" v-model="newpass.npass" placeholder="Username">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Confirm New Password</label>
              <input
                name="connewpassword"
                type="text"
                v-model="newpass.connpass"
                placeholder="Email"
              >
            </div>
          </form>
          <button class="ui button" type="submit" @click="Reset">Reset Password</button>
        </div>
      </div>
    </div>
    <h1 style="font-color:white">{{this.$route.usrname}}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
        newpass:{
            npass:"",
            connpass:""
        },
        x:[]
    };
  },
  methods :{
      Reset(){
          if(this.newpass.npass != "" && this.newpass.connpass != ""){
      axios
      .post("http://localhost:5000/profile/repassword" , this.forReset)
        .then(response => {
          console.log(response.data.result);
        })
        .catch(error => {
          console.log(error);
        });
      }
  },
  mounted() {
      console.log(this.$route)
  }
  }
};
</script>

