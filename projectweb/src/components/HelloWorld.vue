<template>
  <div class="hello">
    <div class="ui black inverted menu">
      <a class="active item" href="#/">
        <img src="../assets/logo.png">
      </a>
      <div class="compact right menu" v-if="check != 'Success'">
        <div class="ui item">
          <a href="#/login">Login</a>
        </div>
        <div class="ui item">
          <a  href="#/signup">Sign Up</a>
        </div>
        </div>
        <div class="compact right menu" v-else>
          <div class="ui item">
          <a href="#/signup" @click="logOut">Log out</a>
          </div>
        </div>
    </div>
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">
        <div class="ui grid">
          <div class="ten wide column">
            <span>
              <a class="active item" href="#/login">
                <img src="../assets/pink.jpg" width="850" height="500" opacity="0.5">
              </a>
            </span>
          </div>
          <div class="six wide column">
            <br>
            <br>
            <h3 style="color: pink; font-size: 40px">Outline</h3>
            <br>
            <ul>
              <li style="color: white; font-size: 25px" v-if="check != 'Success'">
                <a href="#/login" style="color: white;">Login to Generated</a>
              </li>
               <li style="color: white; font-size: 25px" v-else>
                <a href="#/login" style="color: white;">Generated Bracket</a>
              </li>
              <br>
              <br>
              <li style="color: white; font-size: 25px">
                <a href="#/" style="color: white;">Preview</a>
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
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      check: []
    };
  },
  methods: {
    logOut(){
      axios
      .post("http://localhost:5000/profile/logout")
        .then(response => {
          console.log(response.data.result);
        })
        .catch(error => {
          console.log(error);
        });
      window.location.reload()
    }
  },
  beforeRouteEnter(to, from, next) {
    axios
      .post("http://localhost:5000/profile/checkLogin")
      .then(response => {
        next(vm => (vm.check = response.data.result));
        // console.log(this.check)
        console.log(response.data.result);
      })
      .catch(error => {
        console.log(error);
      });
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
