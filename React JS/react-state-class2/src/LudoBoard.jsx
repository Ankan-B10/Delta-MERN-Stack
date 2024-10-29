import { useState } from "react";

export default function LudoBoard() {
	let [Moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
	// let [count, setCount] = useState(0);
	let [arr, SetArr] = useState(["No moves"]);

    // Blue Moves 
	let updateBlue = () => {
		// Moves.blue += 1; /// OR
		// setMoves({ ...Moves, blue: Moves.blue + 1 }); // ... for spread(object copy)
		setMoves((preMoves) => {
			return {
				...preMoves,
				blue: preMoves.blue + 1,
			};
		});
		SetArr((prevArr) => {
			return [...prevArr, " Blue moves"];
		});
		console.log(arr);
	};

    // Yellow Moves 
	let updateYellow = () => {
		setMoves((preMoves) => {
			return {
				...preMoves,
				yellow: preMoves.yellow + 1,
			};
		});
		SetArr((prevArr) => {
			return [...prevArr, " Yellow moves"];
		});
		console.log(arr);
	};

    // Green Moves
    let updateGreen = () => {
		setMoves((preMoves) => {
			return {
				...preMoves,
				green: preMoves.green + 1,
			};
		});
		SetArr((prevArr) => {
			return [...prevArr, " Green moves"];
		});
		console.log(arr);
	};

    // Red Moves
    let updateRed = () => {
		setMoves((preMoves) => {
			return {
				...preMoves,
				red: preMoves.red + 1,
			};
		});
		SetArr((prevArr) => {
			return [...prevArr, " Red moves"];
		});
		console.log(arr);
	};

	return (
		<div>
			<h1>Ludo Game</h1>
			<p>{arr}</p>
			<div className="board">
				<p>Blue moves = {Moves.blue}</p>
				<button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
					+1
				</button>
				<p>Yellow moves = {Moves.yellow}</p>
				<button
					style={{ backgroundColor: "yellow", color: "black" }}
					onClick={updateYellow}>
					+1
				</button>
				<p>Green moves = {Moves.green}</p>
				<button style={{ backgroundColor: "green" }} onClick={updateGreen}>+1</button>
				<p>Red moves = {Moves.red}</p>
				<button style={{ backgroundColor: "red" }} onClick={updateRed}>+1</button>
			</div>
		</div>
	);
}
