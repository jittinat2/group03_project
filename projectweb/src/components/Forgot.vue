<template>
  <div class="repass">
    <div class="ui middle aligned center aligned grid" id="test1">
      <div class="column" style="max-width: 450px">
        <div class="ui inverted segment" id="test2">
          <h2>Forgot Password</h2>
          <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px ">Username</label>
              <input name="username" type="text" v-model="Account.username" placeholder="Username">
            </div>
            <div class="field" style="text-align: left">
              <label style="color: white; font-size: 15px">Email</label>
              <input name="email" type="text" v-model="Account.email" placeholder="Email">
            </div>
          <form class="ui form"></form>
          <button class="ui button" type="submit" >Reset Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Forgot",
  data() {}
}
</script>

<style>

</style>



