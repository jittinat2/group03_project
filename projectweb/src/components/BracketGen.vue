<template>
  <div>
    <h1 style="font-size: 100px">{{ msg }}</h1>
    <!-- input Zone -->
    <div>

        <h1>Tourament Name :  <input type="text" v-model="tour_name"></h1>

            <!-- Tourament Type -->
            <div>
                <h1>Tourament Type : 
               
                </h1>
            </div>

            <!-- Tourament Size -->
            <div>
                <h1>Tourament Size : 

                </h1>
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
          console.log("Generate")
          //router.push({ name : "HelloWorld"})
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
