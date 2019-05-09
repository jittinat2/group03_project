<template>
  <div class="Preview">
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">
        <h2>Profile</h2>
        <h4> username : {{profile.username}}</h4>
        <br>
        <!-- <h4> password : ******</h4> -->
        <br>
        <h4> email : {{profile.email}} </h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "profile",
  data() {
    return {
      check: [],
      uname: "",
      profile: []
    };
  },
  mounted() {
    axios
      .post("http://localhost:5000/profile/checkLogin")
      .then(response => {
        // next(vm => (vm.check = response.data.result));
        // console.log(this.check)
        console.log(response.data);
        this.uname = response.data.checkSession.username;
        console.log(this.uname);
        this.check = response.data;
        console.log(response.data);
        let ob = {
          username: this.uname
        };
        axios
          .post("http://localhost:5000/profile/AUser", ob)
          .then(response => {
            console.log(response.data);
            this.profile = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
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
</style>

