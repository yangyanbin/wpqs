import Vue from 'vue';
import SelfApp from "./SelfApp.vue";
import "./assets/main.css";

const start = ()=>{
	document.querySelector('#root').innerHTML = "<h1 id='h1'></h1>";
	return Promise.resolve("Let's Rock!")
};
start().then(word=>{
	new Vue({
		render:h=>{
			return h(SelfApp); 
		}
	}).$mount('#h1');
	document.title = word;
});