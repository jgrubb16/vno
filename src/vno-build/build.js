/* eslint-disable */
// prettier-ignore
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

var Orange = Vue.component("orange", {template: `<div id="orange"><h1> an orange gal </h1></div>`,name:'orange',data(){return{color:'orange'}},});
var Green = Vue.component("green", {template: `<div id="green"><h1> greenie in a bottle baby </h1></div>`,name:'green',data(){return{color:'green'}},components:{Orange,}});
var Red = Vue.component("red", {template: `<div id="red"><h1> I got a pocket full of sunshine </h1></div>`,name:'red',data(){return{color:'red'}},components:{Orange,Purple,}});
var Purple = Vue.component("purple", {template: `<div id="purple"><h1> purple is here </h1></div>`,name:'purple',data(){return{color:'purple'}},});
var App = new Vue({template: `<div id="app"><green> </green><orange> </orange><h1> in the root </h1></div>`,name:'app',data(){return{color:'none',}},components:{Green,Red}});

App.$mount("#app");
export default App;
