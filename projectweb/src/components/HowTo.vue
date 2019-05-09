<template>
  <div class="howto">
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
          <a href="#/" @click="logOut">Log out</a>
          </div>
        </div>
    </div>
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowTo",
    data() {
    return {
      check: []
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   axios
  //     .post("http://localhost:5000/profile/checkLogin")
  //     .then(response => {
  //       next(vm => (vm.check = response.data.result));
  //       // console.log(this.check)
  //       console.log(response.data.result);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
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


