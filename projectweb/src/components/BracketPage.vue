<template>
    <div class="hello">
        <h1 style="font-size: 100px">{{ msg }}</h1>
        <div class="ui raised segment">
            <div class="ui buttons" style="margin:20;">
                <button class="ui active black blur button">Team 1</button>
                <div class="or" data-text="VS"></div>
                <button class="ui active orange button">Team 2</button>
            </div>
            <div class="ui buttons">
                <button class="ui active black blur button">Team 1</button>
                <div class="or" data-text="VS"></div>
                <button class="ui active orange button">Team 2</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",   
  data() {
    return {
      msg: "Bracket Page"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
