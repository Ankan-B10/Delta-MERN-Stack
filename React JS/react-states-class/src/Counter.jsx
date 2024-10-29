import { useState } from "react";

function init(){
	console.log("init was executed");
	return Math.random();
}
export default function Counter() {
	// let [stateVariable, setstateVariable] = useState(0);
	let [count, setCount] = useState(init()); // initilization
	console.log("component is render"); //it change when states change also
	// console.log(`Count = ${count}`);
	let incCount = () => {
		// callback way
		setCount((currCount) => {
			return currCount + 1;
		});
		// setCount(count + 1); // update in rerander page
		// setCount((currCount) => {
		// 	return currCount + 1;
		// });
	};
	// function incCount(){
	//     count += 1;
	//     console.log(count);
	// }
	return (
		<div>
			<h3>Count = {count}</h3> {/*after render stage} */}
			<button onClick={incCount}>Increase Count</button>
		</div>
	);
}
