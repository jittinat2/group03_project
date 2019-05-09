<template>
    <div class="howto">
        <div class="ui segment" style="margin-left:25%; margin-right:25%; margin-top:5%">
          
          <h1 style="text-align:center; margin-bottom :30px">HOW TO USE</h1>
          <div class="ui raised segment" style="margin-bottom:5%;">
            
              <h1 style="text-align:center;">Create Tournament</h1><br>
              
              1. Login before use Tournament Generator.  <br>
              2. Go to Tournament Generator page. <br>
              3. Enter Tournament name AND Tournament size.  <br>
               
              <h1 style="text-align:center;">In Tourament bracket page</h1><br>

              1. You can edit Team name at bottom of page. <br>
              2. You can set won teams of match by click on them. (If you set wrong , you must set since Round 1 until end) <br>
              3. Click on "Save" button to save the tournament on your profile <br>
              4. Click on "Delete" button to delete the tournament on your profile <br>
              5. You can edit old tournament by click on profile and choose tournament <br>


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
#test1 {
  background: rgba(255, 255, 255, 1);
}
#test2 {
  background: rgba(15, 15, 15, 0.8);
}
</style>


