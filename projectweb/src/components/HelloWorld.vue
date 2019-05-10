<template>
  <div class="hello">
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">
        <div class="ui grid">
          <div class="thirteen wide column">
            <!-- show picture -->
          <h1 style="color: pink; font-size: 80px"> Bracket Generated </h1>
            <span>
              <a class="active item" href="#/login">
                <img src="../assets/pink.jpg" width="1100" height="700" opacity="0.5">
              </a>
            </span>
          </div>
          <div class="center align grid" >
          <div class="three wide column" style="margin-top:140px">
            <!-- outline part -->
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
                <a href="#/pre" style="color: white;">Preview</a>
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
      .post("http://localhost:5000/profile/checkLogin")                     //check login when load page to change Login to Generated to Generate if login
      .then(response => {
        console.log(response.data);
        this.uname = response.data.checkSession.username;
        console.log(this.uname);
        this.check = response.data;
        console.log(response.data);
        let ob = {
          username: this.uname
        };
        window.location.reload;
      })
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
.list {
  font-size: 25px;
  opacity: 1;
}
.ul {
  color: white;
}
</style>
