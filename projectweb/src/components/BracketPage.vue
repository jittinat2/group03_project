<template>
    <div class="hello">
        <h1 style="font-size: 100px">{{ msg }}</h1>
        <div class="ui raised segment">
          
            <div class="ui buttons" style="margin:10px;" v-for="numOfTeam in $route.params.newBracket" v-bind:key="numOfTeam.tour_size"> <!--v-for="Auser in getUsers" v-bind:key="Auser._id" -->
              <button class="ui active black button">Team 1</button>
                <div class="or" data-text="VS"></div>
              <button class="ui active orange button">Team 2</button>
            </div>
            
        </div>
            
            <div >
              <router-link :to="{ path: '/BracketGenerator/'}"><button class="ui brown button">Edit</button></router-link>
              <router-link :to="{ path: '/BracketGenerator/'}"><button class="ui primary button">Save</button></router-link>
            </div>
        <div>
          <div class="ui vertical buttons">
            <button class="ui active black button">TEAM 1</button>
              <div class="or" data-text="VS" style="margin-left:45px"></div>
            <button class="ui active orange button">TEAM 2</button>
          </div>
        </div>

         {{$route.params.newBracket}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "HelloWorld",   
  data() {
    return {
      msg: "Bracket Page",
    };
  },
  mounted() {
    console.log(this.$route) 
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
