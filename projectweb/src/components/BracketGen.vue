<template>
  <div>
    <h1 style="font-size: 70px; color:white; text-align:center;">{{ msg }}</h1>
    
    <!-- input Zone -->
    <div>
      <div class="ui raised segment" style="margin-left:30%; margin-right:30%;">
        <div class="ui raised segment">
          <div class="ui form">
            <div class="field">
              <label style="font-size:25px">Tourament Name :</label>
              <br>
              <div class="ui input">
                <input type="text" placeholder="Tourament name" v-model="tour_name">
              </div>
            </div>
          </div>

          <!-- Tourament Size -->

          <div>
            <div class="ui form">
              <div class="field">
                <br>
                <label style="font-size:25px">Tourament Size :</label>
                <br>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="sizeOfTour" v-model="tour_size" value="2">
                    <label>2</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="sizeOfTour" v-model="tour_size" value="4">
                    <label>4</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="sizeOfTour" v-model="tour_size" value="8">
                    <label>8</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="sizeOfTour" v-model="tour_size" value="16">
                    <label>16</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input type="radio" name="sizeOfTour" v-model="tour_size" value="32">
                    <label>32</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Generate Button -->
          <br>
          <button class="ui fluid green button" @click="Generate" style="font-size:25px">Generate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Tournament Generator",
      tour_name: "",
      tour_size: null,
      check: [],
      newID: ""
    };
  },
  methods: {
    Generate() {
      if (this.tour_name == "" || this.tour_size == null) {                   //Prevent null Tour_name,size
        alert("PLEASE ENTER NAME , SIZE");
      } else {
        let newBracket = {
          username: this.check.checkSession.username,
          tourName: this.tour_name,
          tourSize: this.tour_size
        };

        axios
          .post("http://localhost:5000/bracket/generate", newBracket)         //Generate Bracket to DATABASE
          .then(response => {
            console.log("BracketGen HERE VVVVV");
            console.log(response);
            console.log(response.data.result);
            if (response.data.result == "Success") {
              var newID = response.data._id;
              router.push({
                name: "CreateBracketPage",
                params: { newBracket, newID }
              });
            } else {
              alert("Tournament name is already use ! ");
            }
          })
          .catch(error => {
            console.log(error);
          });
        console.log(newBracket);
      }
    }
  },

  mounted() {
    axios
      .post("http://localhost:5000/profile/checkLogin")                 //Check have user logged in
      .then(response => {
        console.log(response.data);
        this.check = response.data;
        if (response.data.result != "Success") {
          router.push({ name: "HelloWorld" });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
