<template>
  <div class="hello">
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
              <li style="color: white; font-size: 25px">
                <a href="#/login" style="color: white;">Login to Generated</a>
              </li>
              <br>
              <br>
              <li style="color: white; font-size: 25px">
                <a href="#/" style="color: white;">Preview</a>
              </li>
              <br>
              <br>
              <li style="color: white; font-size: 25px">
                <a href="#/" style="color: white;">How to use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      
    };
  },

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
div.bracket {
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
