<template>
  
  <div id="app">
    
    请输入数字：

  
    <input v-model.number="counter_input" type="text" id="amount" > <br>
    
    
    <div v-for = "(item,index) in parseInt(counter_input)" v-bind:key="index">

      <counter-group v-bind:index="index" v-on:add="get_sum" v-on:decrease="get_sum"></counter-group>
<!-- 
      {{$store.getters.getCountWithSomethingCool()}}
      {{$store.state.count}}
      {{$store.state.base}}
      {{$store.commit('increment')}}
      {{$store.state.base}} -->
    </div>

    <div><br>
    总数：<span> {{sum}}</span>
    </div>
    
  </div>
</template> 

<script>

import CounterGroup from './components/CounterGroup.vue';
// import axios from "axios";

export default {
  name: 'app',
  
  data: function(){
      return {
        counter_input:1,
        count_array:this.$store.counter,
        sum:0
      } 
  },
 components: {
    CounterGroup
  },
  // mounted:function(){
  //   axois.get("http://127.0.0.1:8082").then(function(responds)){
  //           _this.hello = res.date;
  //         }
  // }.

  methods: {

    get_sum:function(count,index){
      this.count_array[index] = count;
      this.sum = this.count_array.reduce((a,b) => a+b);
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
