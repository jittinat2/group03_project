<template>
    <div class="hello">
        <h1 style="font-size: 100px; color:white;">{{ msg }}</h1>
        
        <!-- GRID -->
            
            <div class ="ui raised segment" style="background: rgba(15 , 15, 15, 1); margin-left:12.5% ; margin-right:12.5% ;">
              <div class="ui inverted segment" style="background: rgba(255, 247, 247, 0.05);">
                <h1 style="font-size: 50px; color:white; text-align:center;">{{this.$route.params.newBracket.tour_name}}</h1>
              </div>
            </div>
            <div style="margin-left:12.5% ; margin-right:12.5% ; margin-top: 2.5% ">
              <router-link :to="{ path: '/BracketGenerator/'}"><button class="ui brown button" id='buttonBottom'>Edit</button></router-link>
              <router-link :to="{ path: '/BracketGenerator/'}"><button class="ui primary button" id='buttonBottom'>Save</button></router-link>
            </div>
          
        <div v-bind:class="divNameOfGrid" style="background: rgba(15 , 15, 15, 1); margin-left:12.5% ; margin-right:12.5% ; margin-top: 2.5% "> <!-- <div class="ui three column divided grid"> -->
          <div class="stretched row">
            
            <div class="column" v-for="i in numOfRound" v-bind:key="i"> <!-- v-for="i in 3" v-bind:key="i" -->
              
              <div class="ui raised segment" id="grid" v-for="j in numOfCreateMatch[numOfRound-i]" v-bind:key="j" > <!-- v-if="i*j <= numOfMatch" -->
                
                  
                  <div class="ui inverted segment" v-if="i>1" style="margin-top:25px" id='transparent'></div> 
                  <div class="ui inverted segment" v-if="i>2" style="margin-top:90px" id='transparent'></div>                
                  <div class="ui inverted segment" v-if="i>3" style="margin-top:240px" id='transparent'></div>               
                  <div class="ui inverted segment" v-if="i>4" style="margin-top:480px" id='transparent'></div>

                  <button class="ui active white fluid button"  style="height:35px" 
                          @click="clicked(Detail[i-1][(j*2)-2].teamName , i , j)"> {{ Detail[i-1][(j*2)-2].teamName }} 
                  </button> <!-- TEAM {{ (j*2)-1 }} ,,,, Detail[i][j]-->
                  <button class="ui active blue fluid button" style="height:35px" 
                          @click="clicked(Detail[i-1][(j*2)-1].teamName , i , j)"> {{ Detail[i-1][(j*2)-1].teamName }}
                  </button> <!-- TEAM {{ j*2 }} -->
                </div>
              </div>
          </div>
        </div>
            <div style="margin-left:12.5% ; margin-right:12.5% ; margin-top: 5% ">
              <router-link :to="{ path: '/BracketGenerator/'}"><button class="ui brown button" id='buttonBottom'>Edit</button></router-link>
              <router-link :to="{ path: '/BracketGenerator/'}"><button class="ui primary button" id='buttonBottom'>Save</button></router-link>
            </div>

         <br><br>{{$route.params.newBracket}}<br><br>{{Detail}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "HelloWorld",   
  data() {
    return {
      msg: "Bracket Page",
      divNameOfGrid: '',     //for create horizontal grid (ex. 3 round --> 3 horizontal grids)
     // numOfRound:[{_id:'1',}],
      numOfMatch: 0,
      numOfRound: 0,
      numOfCreateMatch:[],
     
     Detail:[
        [{teamName:'Round1_match1',status:''},{teamName:'Round1_enemy_match_1',status:''},{teamName:'Round1_match2',status:''},{teamName:'Round1_enemy_match_2',status:''},{teamName:'Round1_match3',status:''},{teamName:'Round1_enemy_match_3',status:''},{teamName:'Round1_match4',status:''},{teamName:'Round1_enemy_match_4',status:''},{teamName:'Round1_match5',status:''},{teamName:'Round1_enemy_match_5',status:''},{teamName:'Round1_match6',status:''},{teamName:'Round1_enemy_match_6',status:''},{teamName:'Round1_match7',status:''},{teamName:'Round1_enemy_match_7',status:''},{teamName:'Round1_match8',status:''},{teamName:'Round1_enemy_match_8',status:''},{teamName:'Round1_match9',status:''},{teamName:'Round1_enemy_match_9',status:''},{teamName:'Round1_match10',status:''},{teamName:'Round1_enemy_match_10',status:''},{teamName:'Round1_match11',status:''},{teamName:'Round1_enemy_match_11',status:''},{teamName:'Round1_match12',status:''},{teamName:'Round1_enemy_match_12',status:''},{teamName:'Round1_match13',status:''},{teamName:'Round1_enemy_match_13',status:''},{teamName:'Round1_match14',status:''},{teamName:'Round1_enemy_match_14',status:''},{teamName:'Round1_match15',status:''},{teamName:'Round1_enemy_match_15',status:''},{teamName:'Round1_match16',status:''},{teamName:'Round1_enemy_match_16',status:''},],
        [{teamName:'Round2_match1',status:''},{teamName:'Round2_enemy_match_1',status:''},{teamName:'Round2_match2',status:''},{teamName:'Round2_enemy_match_2',status:''},{teamName:'Round2_match3',status:''},{teamName:'Round2_enemy_match_3',status:''},{teamName:'Round2_match4',status:''},{teamName:'Round2_enemy_match_4',status:''},{teamName:'Round2_match5',status:''},{teamName:'Round2_enemy_match_5',status:''},{teamName:'Round2_match6',status:''},{teamName:'Round2_enemy_match_6',status:''},{teamName:'Round2_match7',status:''},{teamName:'Round2_enemy_match_7',status:''},{teamName:'Round2_match8',status:''},{teamName:'Round2_enemy_match_8',status:''},],
        [{teamName:'Round3_match1',status:''},{teamName:'Round3_enemy_match_1',status:''},{teamName:'Round3_match2',status:''},{teamName:'Round3_enemy_match_2',status:''},{teamName:'Round3_match3',status:''},{teamName:'Round3_enemy_match_3',status:''},{teamName:'Round3_match4',status:''},{teamName:'Round3_enemy_match_4',status:''}],
        [{teamName:'Round4_match1',status:''},{teamName:'Round4_enemy_match_1',status:''},{teamName:'Round4_match2',status:''},{teamName:'Round4_enemy_match_2',status:''}],
        [{teamName:'Round5_match1',status:''},{teamName:'Round5_enemy_match_1',status:''}],
      ],

    };
  },
  methods: {
    clicked(teamName , round , match){
      var Match_RoundUp = Math.round(match/2) // Detail[round-1][(match*2)-2] ,,, Detail[round-1][(match*2)-1]
      // odd numver OF match go to up button ,,, even number OF match go to down button
      alert(teamName + ', Round : ' + round + ', Match : ' + match + ', Match_RoundUp : ' + Match_RoundUp)
      if(match%2 == 0){
        console.log('even go to down button')
      }
      else{
        console.log('odd go to up button')
      }
      // this.Detail[round][match] = this.Detail[round+1][match]
      console.log(this.Detail)
    }
    // Divived 2 and Round-up   ,,, 
    // EX. ([i][j]) === > [1][1] VS [1][2]
    // get j of 2 array (1 and 2) 
    // divide 2 (1/2->0.5 and 2/2-> 1)
    // Round-up (1 and 1 {THIS IS j value}) 
    // get it into [1+1][1] --> [2][1]
  },

  mounted() {
   
    console.log(this.$route)
    console.log('tour_size : ' + this.$route.params.newBracket.tour_size)
    var round = Math.log(parseInt(this.$route.params.newBracket.tour_size)) / Math.log(2)
    var numOfRoundNameDiv = ''
    console.log('round : ' + round)
      if(round == 1) numOfRoundNameDiv = 'one'
      if(round == 2) numOfRoundNameDiv = 'two'
      if(round == 3) numOfRoundNameDiv = 'three'
      if(round == 4) numOfRoundNameDiv = 'four'
      if(round == 5) numOfRoundNameDiv = 'five'
    this.divNameOfGrid = 'ui ' + numOfRoundNameDiv + ' column divided grid'
    this.numOfMatch = this.$route.params.newBracket.tour_size / 2
    
    for(var i=0 ; i < round ; i++){
      this.numOfCreateMatch[i] = Math.pow(2,i)
    }

    this.numOfRound = round
    console.log("numOfMatch : " + this.numOfMatch)
    console.log("numOfCreateMatch : " + this.numOfCreateMatch)


  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#buttonTeam{

}
#grid{
  background: rgba(255, 247, 247, 0.05);
}
#transparent{
  background: rgba(15, 15, 15, 0);
}
</style>
