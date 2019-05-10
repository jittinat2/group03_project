<template>
  <div class="repass">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Forgot password</h2>
          <form class="ui form">                            
            <!-- form forgot password -->
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Username</label>
              <div class="ui left icon input">
                <input
                  name="username"
                  type="text"
                  v-model="forReset.username"
                  placeholder="Username"
                >
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Email</label>
              <div class="ui left icon input">
                <input name="email" type="email" v-model="forReset.email" placeholder="name@mail.com">
                <i class="envelope icon"></i>
              </div>
            </div>
          </form>
          <button class="ui button" style="margin-top: 10px" type="submit" @click="Reset">
            <i class="redo icon"></i>
            Reset Password
          </button>
          <!-- call function Reset when clicked button -->
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
      forReset: {
        username: "",
        email: ""
      }
    };
  },
  methods: {
    Reset() {
      if (this.forReset.username != "" && this.forReset.email != "") {          //check username & emsil is not null
        axios
          .post("http://localhost:5000/profile/forget", this.forReset)          //path to database to check forgot password DB will return result success or fail
          .then(response => {
            console.log(response.data.result);
            if (response.data.result == "Fail") {                               //if fail web will alert and reload page
              alert("Username and/or Email invalid!");
              window.location.reload();
            } else {
              router.push({ name: "ResetPass", params: { newName } });          //if success web will pass newName to ResetPass page
            }
          })
          .catch(error => {
            console.log(error);
          });
        let newName = {                                                         //created newName
          usrname: this.forReset.username
        };
        console.log(newName);
      } else {
        alert("A data must be present");
      }
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



