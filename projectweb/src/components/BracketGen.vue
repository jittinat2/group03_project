<template>
  <div>
    <h1 style="font-size: 100px">{{ msg }}</h1>
    <!-- input Zone -->
    <div>

      <div class="ui raised segment">
        <div class="ui raised segment">

                  <div class="ui form">
                    <div class="field">
                        <label style="font-size:25px">Tourament Name :</label><br>
                        <div class="ui input"><input type="text" placeholder="Tourament name" v-model="tour_name"></div>
                    </div>
                  </div>

            <!-- Tourament Type -->
            <div>
                <div class="ui form">
                    <div class="field"><br>
                        <label style="font-size:25px">Tourament Type :</label><br>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="typeOfTour" v-model="tour_type" value="Single Eliminate">
                            <label>Single Eliminate</label>
                          </div>
                        </div>
                        <!-- <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="typeOfTour" v-model="tour_type" value="Double_Eliminate">
                            <label>Double Eliminate</label>
                          </div>
                        </div> -->
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="typeOfTour" v-model="tour_type" value="Round_Robin">
                            <label>Round Robin</label>
                          </div>
                        </div>
                    </div>
                  </div>
            </div>

            <!-- Tourament Size -->
            
                 <div>
                  <div class="ui form">
                    <div class="field"><br>
                        <label style="font-size:25px">Tourament Size :</label><br>
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

            <br>
            <button class="ui fluid green button" @click="Generate" style="font-size:25px">
              Generate
            </button>

          </div>
      </div>
{{tour_name}} : {{tour_type}} : {{tour_size}}
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bracket Generator',
      tour_name: '',
      tour_type: null,
      tour_size: null, 

    }
  },
  methods: {
      Generate(){
          //console.log("Generate")
          if(this.tour_type == null || this.tour_size == null){
            alert("PLEASE ENTER TYPE , SIZE")
          }
          else{
            let newBracket = {
              tour_name: this.tour_name,
              tour_type: this.tour_type,
              tour_size: this.tour_size,
              }

            // axios.post('http://localhost:5000/generator/user', newBracket)
            //   .then((response) => {
            //     console.log(response)
            //   })
            //   .catch((error) => {
            //     console.log(error)
            //   })
            //console.log(newBracket)

            router.push({ name:'BracketPage', params:{newBracket} })
          }
      }
  },
  mounted() {
    //console.log(this.$route)
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
