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
          
          <!-- ORIGIN VERTICAL BUTTONS -->

          <div class="ui vertical buttons">
            <button class="ui active black button">TEAM 1</button>
              <div class="or" data-text="VS" style="margin-left:45px"></div>
            <button class="ui active orange button">TEAM 2</button>
          </div>
        </div>
        
        <!-- GRID -->
          {{numOfMatch}}
        <div v-bind:class="divNameOfGrid"> <!-- <div class="ui three column divided grid"> -->
          <div class="stretched row">
            <div class="column" v-for="i in numOfRound" v-bind:key="i"> <!-- v-for="i in 3" v-bind:key="i" -->
              <div class="ui segment" v-for="j in numOfMatch" v-bind:key="j" v-if="i*j <= numOfMatch"> <!-- v-if="i*j <= numOfMatch" -->
                <div class="ui vertical buttons" style="margin-left:200px">
                  <button class="ui active black button">TEAM {{i*j}}</button>
                    <div class="or" data-text="VS" style="margin-left:45px"></div>
                  <button class="ui active orange button">TEAM {{j}}</button>
                </div>
              </div>
              <!-- <div class="ui segment">
                <div class="ui vertical buttons">
                  <button class="ui active black button">TEAM 3</button>
                    <div class="or" data-text="VS" style="margin-left:45px"></div>
                  <button class="ui active orange button">TEAM 4</button>
                </div>
              </div>
              <div class="ui segment">3</div>
              <div class="ui segment">4</div> -->
            </div>
            <!-- <div class="column">
              <div class="ui segment">
                <div class="ui vertical buttons">
                  <button class="ui active black button">TEAM 1</button>
                    <div class="or" data-text="VS" style="margin-left:45px"></div>
                  <button class="ui active orange button">TEAM 2</button>
                </div>
              </div>
              <div class="ui segment">2</div>
            </div>

            <div class="column">
              <div class="ui segment">1</div>
            </div> -->
          </div>
        </div>

         <br><br>{{$route.params.newBracket}}
    </div>
</template>

<script>
import axios from 'axios'
// import converterrr from 'number-to-words'
export default {
  name: "HelloWorld",   
  data() {
    return {
      msg: "Bracket Page",
      divNameOfGrid: '',     //for create horizontal grid (ex. 3 round --> 3 horizontal grids)
     // numOfRound:[{_id:'1',}],
      numOfMatch: 0,
      numOfRound: 0,
      start: 5,
      end: 10
    };
  },

  mounted() {
    // var writtenNumber = require('written-number');
    // console.log(converterrr.toWord(2))
    // console.log(writtenNumber(2))
   
    console.log(this.$route)
    console.log(this.$route.params.newBracket.tour_size)
    var round = Math.log(parseInt(this.$route.params.newBracket.tour_size)) / Math.log(2)
    var numOfRoundNameDiv = ''
    console.log(round)
      if(round == 1) numOfRoundNameDiv = 'one'
      if(round == 2) numOfRoundNameDiv = 'two'
      if(round == 3) numOfRoundNameDiv = 'three'
      if(round == 4) numOfRoundNameDiv = 'four'
      if(round == 5) numOfRoundNameDiv = 'five'
    this.divNameOfGrid = 'ui ' + numOfRoundNameDiv + ' column divided grid'
    this.numOfMatch = this.$route.params.newBracket.tour_size / 2
    this.numOfRound = round
    console.log("numOfMatch : " + this.numOfMatch)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
