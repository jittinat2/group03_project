<template>
  <div class="repass">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Reset password</h2>
          <form class="ui form">
            <!-- form part -->
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">New Password</label>
              <div class="ui left icon input">
                <input
                  name="newpw"
                  type="password"
                  v-model="newpass.npass"
                  placeholder="New Password"
                >
                <i class="edit icon"></i>
              </div>
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Confirm New Password</label>

              <div class="ui left icon input">
                <input
                  name="connewpassword"
                  type="password"
                  v-model="newpass.connpass"
                  placeholder="Confirm New Password"
                >
                <i class="edit icon"></i>
              </div>
            </div>
          </form>
          <button class="ui button" style="margin-top: 10px" type="submit" @click="Reset">
            <i class="redo icon"></i>Reset Password
          </button>
          <!-- button will call Reset function when click -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: "HelloWorld",
  data() {
    return {
      newpass: {
        npass: "",
        connpass: ""
      },
      x: []
    };
  },
  methods: {
    Reset() {                                                                 //reset function
      if (  
        this.newpass.npass != "" &&                                           //check form not null and passward match with confirm password
        this.newpass.connpass != "" &&
        this.newpass.npass == this.newpass.connpass
      ) {
        let sendNewPass = {                                                   //make sendNewpass strore username and password
          username: this.x,
          password: this.newpass.npass
        };
        console.log(sendNewPass);
        axios
          .post("http://localhost:5000/profile/rePassword", sendNewPass)      //send username and password to DB
          .then(response => {
            console.log(response.data.result);
            router.push({ name: "HelloWorld" });                               //if success will return to home page
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        alert("New Password is Not Match with Confirmpassword");                //if  password and confirm password not match will alert
      }
    }
  },
  mounted() {
    console.log("hello");
    console.log(this.$route);                                                 
    this.x = this.$route.params.newName.usrname;                                //receive username value fron other page
    console.log(this.x);
  }
};
</script>

