<template>
  <div class="Preview">
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">
        <h1 style="text-align:center; font-size:50px">Profile</h1>
         <div class="ui inverted raised segment" id="segment" >
          
          <h2> <i class="user icon"></i> Username : {{profile.username}}</h2>
          <h2> <i class="lock icon"></i> Password : {{passwordStar}}</h2>
          <h2> <i class="envelope icon"></i> E-mail : {{profile.email}} </h2>

         </div>

        <div class="ui inverted segment" id="segment">
          <h1 style="text-align : center;">My Tournament Backet</h1>
          <div class="ui inverted segment" style="margin-left:15%; margin-right:15%; background: rgba(15, 15, 15, 0.5);">
          <div v-for="i in AllUserTour.length" v-bind:key="i" id="buttonTour">
            <button class="ui fluid inverted grey button" @click="GoToShowBracket(i)">
              <h1>{{AllUserTour[i-1].tourName}}</h1>  
            </button>
          </div>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from '../router'

export default {
  name: "profile",
  data() {
    return {
      check: [],
      uname: "",
      profile: [],
      nameOfthis:'',
      passwordStar:'',
      AllUserTour:[],
    };
  },
  methods: {
    GoToShowBracket(i){
     // alert(this.AllUserTour[i-1]._id)
      let Bracket_id = {
        _id:this.AllUserTour[i-1]._id
      }
      router.push({ name:'ShowBracketPage', params:{Bracket_id} })
      
    }
  },
  mounted() {
    axios
      .post("http://localhost:5000/profile/checkLogin")
      .then(response => {
        // next(vm => (vm.check = response.data.result));
        // console.log(this.check)
        console.log(response.data);
        this.uname = response.data.checkSession.username;
        console.log(this.uname);
        this.check = response.data;
        console.log(response.data);
        let ob = {
          username: this.uname
        };
        axios
          .post("http://localhost:5000/profile/AUser", ob)
          .then(response => {
            console.log(response.data);
            this.profile = response.data;
          
            for(var i=0 ; i < response.data.password.length ; i++){
              this.passwordStar = '*' + this.passwordStar
            }

            console.log('PASSWORD STAR : ' + this.passwordStar)
            this.nameOfthis = response.data.username  ///////////////////////// FIX HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE NEEDDDDDDDDDDDDDDDDDDDDDDD SEARCH BY USER
            console.log('User name : ' + this.nameOfthis);
            let ShowThisUserBrackets = {
              username : this.nameOfthis
            }

            axios.post('http://localhost:5000/bracket/showAllBracket', ShowThisUserBrackets)
              .then((response) => {
                console.log('VVVVV SHOW ALL USER BRACKET HERE VVVVV')
                console.log(response.data) 
                this.AllUserTour = response.data
                
              })
              .catch((error) => {
                console.log(error)
              })

          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
#test1 {
  background: rgba(15, 15, 15, 0);
}
#test2 {
  background: rgba(15, 15, 15, 0.8);
  margin-left:20% ;
  margin-right:20% ; 
  margin-top: 3% ; 
  margin-bottom: 5%
}
#segment{
  background: rgba(255, 247, 247, 0.2);
  margin-left:10% ;
  margin-right:10% ; 
  margin-bottom: 5%;
}

#buttonTour{
  margin-top:2.5% ;
  margin-left:15% ;
  margin-right:15% ; 
  margin-bottom: 2.5%;
}
</style>

