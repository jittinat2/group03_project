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
                        <div class="ui input"><input type="text" placeholder="Tourament name"></div>
                    </div>
                  </div>

            <!-- Tourament Type -->
            <div>
                <div class="ui form">
                    <div class="field"><br>
                        <label style="font-size:25px">Tourament Type :</label><br>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="typeOfTour" checked="checked">
                            <label>Single Eliminate</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="typeOfTour">
                            <label>Double Eliminate</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="typeOfTour">
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
                            <input type="radio" name="sizeOfTour" checked="checked">
                            <label>2</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="sizeOfTour">
                            <label>4</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="sizeOfTour">
                            <label>8</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="sizeOfTour">
                            <label>16</label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input type="radio" name="sizeOfTour">
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


    </div>  
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bracket Generator',
      tour_name: '',
      tour_size: ''
    }
  },
  methods: {
      Generate(){
          //console.log("Generate")
          //router.push({ name : "HelloWorld"})
          alert("Generate")
      }
  }
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
