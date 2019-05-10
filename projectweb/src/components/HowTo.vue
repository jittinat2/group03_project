<template>
    <div class="howto">
        <div class="ui inverted   segment" style="margin-left:25%; margin-right:25%; margin-top:5%">
          
          <h1 style="text-align:center; margin-bottom :5%; margin-top :2.5%; font-size:50px">HOW TO USE</h1>
          <div class="ui inverted segment" id="segment">
            
              <h1 style="text-align:center;">Create Tournament</h1>
              
              <h3> 1. Login before use Tournament Generator.  </h3>
              <h3> 2. Go to Tournament Generator page. </h3>
              <h3> 3. Enter Tournament name AND Tournament size. </h3>
               
              <h1 style="text-align:center;">In Tourament bracket page</h1>

              <h3> 1. You can edit Team name at bottom of page. </h3>
              <h3> 2. You can set won teams of match by click on them. <br>(If you set wrong , you must set since Round 1 until end) </h3>
              <h3> 3. Click on "Save" button to save the tournament on your profile. </h3>
              <h3> 4. Click on "Delete" button to delete the tournament on your profile. </h3>
              <h3> 5. You can edit old tournament by click on your profile and choose tournament. </h3>


          </div>
        </div>
    </div>
  
</template>

<script>
export default {
  name: "HowTo",
    data() {
    return {
      check: []
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   axios
  //     .post("http://localhost:5000/profile/checkLogin")
  //     .then(response => {
  //       next(vm => (vm.check = response.data.result));
  //       // console.log(this.check)
  //       console.log(response.data.result);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
};
</script>

<style>
#segment{
  background: rgba(255, 247, 247, 0.2);
  margin-left:10% ;
  margin-right:10% ; 
  margin-bottom: 5%;
}
</style>


