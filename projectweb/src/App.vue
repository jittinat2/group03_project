<template>
  <div id="app">
<<<<<<< HEAD
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <div>
          <!-- Just an image -->
          <b-navbar variant="faded" type="light">
            <b-navbar-brand href="#/">
              <img src="https://placekitten.com/g/30/30" alt="Kitten">
            </b-navbar-brand>
          </b-navbar>
        </div>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
=======
    <!-- <img src="./assets/logo.png"> -->
>>>>>>> BeamBranch
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
</style>
