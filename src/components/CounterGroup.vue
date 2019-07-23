<template>
  
  <div id="app">
  
      <!-- <p> {{count}}</p> -->
      <p> {{show}}</p>
      <button v-on:click ="add">点我+</button>
      <button v-on:click ="decrease">点我-</button> 
  
  </div>
</template>

<script>



export default {
  name: 'CounterGroup',
  props:["index"],
  data: function(){
      return {
        // count: Math.round(Math.random()*10)
        //count:0
        
      } 
  },

  methods: {
    add:function() {
      this.$store.commit('addCounterNum',parseInt(this.index));
      //this.count++;
      // this.$store.commit('increment');
      // this.$emit("add",this.count,this.index);

    },
    decrease:function(){
      this.$store.commit('decreaseCounterNum',parseInt(this.index));
      //this.count--;
      // this.$emit("decrease",this.count,this.index);
    }
  },
  computed:{
      show: function(){
        // console.log(this.$store.state.counter[this.index]);
        return this.$store.state.counter[this.index];
      }
  }

};

</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
