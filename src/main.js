import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false




const store = new Vuex.Store({
    state: {
        // count: 8,
        // base: 2
        // couterNum: 0,
        //count:0,
        counter: [0],
        // sum: 0
    },
    getters: {
        // getCountWithSomethingCool: function() {
        //     return function() {
        //         return store.state.count - 1;
        //     }
        // }
        getNum: function(state) {
            return state.couterNum;
        }
    },
    mutations: {
        // increment(state) {
        //     state.base += 10;
        // }
        // updateCounterNum:function(state,payload){
        //     state.couterNum = payload;
        // },
        // updateSum:function(state){
        //     state.sum ++;
        // }
        addCounterNum: function(state, cur) {
            // alert(cur);
            // state.counter[cur]++;
            let ans = [];
            for (let i = 0; i <= cur; i++) {
                ans.push(state.counter[i]);
            }
            ans[cur]++;
            state.counter = ans;
            // alert(state.counter[cur]);
        },
        decreaseCounterNum: function(state, cur) {
            // state.counter[cur]--;
            let ans = [];
            for (let i = 0; i <= cur; i++) {
                ans.push(state.counter[i]);
            }
            ans[cur]--;
            state.counter = ans;
        }
    }
})



new Vue({
    render: h => h(App),
    store
}).$mount('#app')