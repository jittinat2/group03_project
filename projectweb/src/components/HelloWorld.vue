<template>
  <div class="hello">
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">
        <div class="ui grid">
          <div class="thirteen wide column">
          <h1 style="color: pink; font-size: 80px"> Bracket Generated </h1>
            <span>
              <a class="active item" href="#/login">
                <img src="../assets/pink.jpg" width="1650" height="700" opacity="0.5">
              </a>
            </span>
          </div>
          <div class="center align grid" >
          <div class="three wide column" style="margin-top:140px">
            <h3 style="color: pink; font-size: 60px">Outline</h3>
            <br>
            <ul>
              <li style="color: white; font-size: 25px" v-if="check.result != 'Success'">
                <a href="#/login" style="color: white;">Login to Generated</a>
              </li>
              <li style="color: white; font-size: 25px" v-else>
                <a href="#/BracketGenerator" style="color: white;">Generated Bracket</a>
              </li>
              <br>
              <br>
              <li style="color: white; font-size: 25px">
                <a href="#/ji" style="color: white;">Preview</a>
              </li>
              <br>
              <br>
              <li style="color: white; font-size: 25px">
                <a href="#/howto" style="color: white;">How to use</a>
              </li>
            </ul>
          </div>
        </div>
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
      check: [],
      uname: ""
    };
  },
  methods: {},
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
      })
   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#test1 {
  background: rgba(15, 15, 15, 0);
}
#test2 {
  background: rgba(15, 15, 15, 0.8);
}
.outline {
  font-size: 40px;
  opacity: 1;
}
.list {
  font-size: 25px;
  opacity: 1;
}
.h3 {
  color: red;
}
.ul {
  color: white;
}
.dimmer {
  background-color: rgba(250, 250, 50, 0.1);
}
</style>
