<template>
  <div class="Profile">
    <div class="ui segment" id="test1">
      <div class="ui inverted segment" id="test2">
        <div class="ui internally celled grid">
          <div class="row">
            <div class="one wide column">
              <button class="ui green icon button" style="margin-top:100px" @click="previous">
                <i class="step backward icon"></i>
              </button>
            </div>

            <div class="fourteen wide column">
              <div class="center align grid" style="text-align: center">
                <div v-if="m==0">
                  <img class="ui fluid image" src="../assets/1.jpg">
                </div>
                <div v-else-if="m==1">
                  <img class="ui fluid image" src="../assets/2.jpg">
                </div>
                <div v-else-if="m==2">
                  <img class="ui fluid image" src="../assets/3.jpg">
                </div>
                <div v-else-if="m==3">
                  <img class="ui fluid image" src="../assets/4.jpg">
                </div>
                <div v-else-if="m==4">
                  <img class="ui fluid image" src="../assets/5.jpg">
                </div>
                <div v-else-if="m==5">
                  <img class="ui fluid image" src="../assets/6.jpg">
                </div>
              </div>
            </div>
            <div class="one wide column">
              <button class="ui green icon button" style="margin-top:100px" @click="next">
                <i class="step forward icon"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      i: 0,
      m: 0
    };
  },
  methods: {
    next() {
      console.log(this.i);
      console.log(this.m);
      if (this.i >= 0) {
        this.i = this.i + 1;
        this.m = this.i % 6;
      } else {
        this.i = this.i + 1;
        this.m = Math.abs(this.i) % 6;
      }
      console.log(this.i);
      console.log(this.m);
    },
    previous() {
      console.log(this.i);
      console.log(this.m);
      if (this.i > 0) {
        this.i = this.i - 1;
        this.m = this.i % 6;
        console.log("+");
      } else {
        console.log("-");
        this.i = this.i - 1;
        console.log(this.i);
        this.m = Math.abs(this.i) % 6;
      }
      console.log("i=" + this.i);
      console.log("m=" + this.m);
    }
  }
};
</script>

<style scoped>
#test1 {
  background: rgba(15, 15, 15, 0);
}
#test2 {
  background: rgba(15, 15, 15, 0.8);
}
</style>