import "./assets/main.css";

const start = ()=>{
	document.querySelector('#root').innerHTML = "<h1>Webpack quick start!!</h1>";
	return Promise.resolve("Let's Rock!")
};
start().then(word=>{
	document.title = word;
});