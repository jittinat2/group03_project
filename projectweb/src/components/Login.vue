<template>
  <div class="login">
    <h2>Login</h2>
    <form>
      <div>
        <label>Username</label>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
        <br>
        <label>Password</label>
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
        <br>
        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
        <br>
        <input type="submit" class="fadeIn fourth" value="Log In">
      </div>
       

    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>