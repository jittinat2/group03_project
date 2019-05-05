<template>
  <div>
    <h1 style="font-size: 100px">{{ msg }}</h1>
    <!-- input type -->
    <div>
        <h1>Tourament Name :  <input type="text" v-model="tour_name"></h1>
            <div>
                <h1>Tourament Type : 
                    <b-dropdown id="dropdown-dropright" dropright text="Drop-Right" variant="primary" class="m-5">
                        <b-dropdown-item href="#">Action</b-dropdown-item>
                        <b-dropdown-item href="#">Another action</b-dropdown-item>
                        <b-dropdown-item href="#">Something else here</b-dropdown-item>
                    </b-dropdown>
                </h1>
            </div>
        <h1>Tourament Size :  <input type="text" v-model="tour_name"></h1>

    </div>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bracket Generator',
      tour_name: '',
    }
  },
  methods: {
      Generate(){
          alert('Generate' + msg);
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
