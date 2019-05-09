<template>
  <div class="Preview">
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">
        <h1 style="text-align:center; font-size:50px">Profile</h1>
        <h2> username : {{profile.username}}</h2>
        <br>
        <!-- <h4> password : ******</h4> -->
        <br>
        <h2> email : {{profile.email}} </h2>

        <div class="ui inverted segment" style="margin-top:10%; margin-bottom:5%;">
          <div v-for="i in 3" v-bind:key="i">
            {{profile}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "profile",
  data() {
    return {
      check: [],
      uname: "",
      profile: [],
      idOfthis:''
    };
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

              this.idOfthis = response.data._id  ///////////////////////// FIX HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE NEEDDDDDDDDDDDDDDDDDDDDDDD SEARCH BY USER
              console.log(this.idOfthis);
              let ShowThisBracket = {
              _id : this.idOfthis
              }

            axios.post('http://localhost:5000/bracket/show', ShowThisBracket)
              .then((response) => {
                console.log('SHOW HERE VVVVV')
                console.log(response)
                console.log(response.data.result) 
                // if(response.data.result == 'Success'){
                //  var newID = response.data._id
                //  router.push({ name:'CreateBracketPage', params:{newBracket , newID} })  // name : namePage , params:{ตัวแปร}
                // }
                // else{
                //   alert('Tournament name is already use ! ');
                // }
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
</style>

