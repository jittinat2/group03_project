<template>
  <div class="repass">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Reset password</h2>
          <form class="ui form">
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">New Password</label>
              <input name="newpw" type="text" v-model="newpass.npass" placeholder="New Password">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Confirm New Password</label>
              <input
                name="connewpassword"
                type="text"
                v-model="newpass.connpass"
                placeholder="Confirm New Password"
              >
            </div>
          </form>
          <button class="ui button" style="margin-top: 10px" type="submit" @click="Reset">Reset Password</button>
            <h1 style="color: white;">{{this.x}}</h1>
        </div>
      </div>
    </div>
  
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
            // connpass:""
        },
        x:[]
    };
  },
  methods :{
      Reset(){
          if(this.newpass.npass != "" && this.newpass.connpass != ""){
              let sendNewPass = {
                username:this.x,
                newpassword: this.newpass.npass
              }
              console.log(sendNewPass)
      axios
      .post("http://localhost:5000/profile/rePassword" , sendNewPass)
        .then(response => {
          console.log(response.data.result);   ///////////////////////where!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        })
        .catch(error => {
          console.log(error);
        });
      }else{
          alert("New Password is Not Match with Confirmpassword")
      }
  },

  },
mounted() {
      console.log("hello")
      console.log(this.$route)
        this.x=this.$route.params.newName.usrname
        console.log(this.x)
  }
};
</script>

