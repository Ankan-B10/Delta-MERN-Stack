import { useState, useEffect } from "react";

export default function Counter() {
	let [Countx, setCountx] = useState(0);
	let [County, setCounty] = useState(0);
	let incCountx = () => {
		setCountx((currCount) => currCount + 1);
	};

	let incCounty = () => {
		setCounty((currCount) => currCount + 1);
	};

	useEffect(
		function printSomething() {
			console.log("Side effect");
		},
		[Countx] // only when Countx changes, [] => no changes 
	);

	return (
		<div>
			<h2>CountX = {Countx}</h2>
			<button onClick={incCountx}>+1</button>
			<h2>CountY = {County}</h2>
			<button onClick={incCounty}>+1</button>
		</div>
	);
}
