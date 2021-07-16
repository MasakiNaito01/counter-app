import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

let count = 0;
function incrementCount() {
	count += 1;
 } 
 function decrementCount() {
	count -= 1;
 } 
 function returnZero() {
	count = 0;
 } 

export default app;