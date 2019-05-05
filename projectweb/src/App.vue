<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <div>
          <!-- Just an image -->
          <b-navbar variant="faded" type="light">
            <b-navbar-brand href="#">
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

      <b-container class="bv-example-row">
        <b-row>
          <b-col>1 of 3</b-col>
          <b-col cols="12" md="auto">Variable width content</b-col>
          <b-col col lg="2">3 of 3</b-col>
        </b-row>
      </b-container>
    </div>
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
