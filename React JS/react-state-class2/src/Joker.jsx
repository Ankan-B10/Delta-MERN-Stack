import { useState, useEffect } from "react";

export default function Joker() {
	const URL = "https://official-joke-api.appspot.com/random_joke";

	const getNewJoke = async () => {
		let response = await fetch(URL);
		// to convert response to json
		let jsonResponse = await response.json();
		setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
	};

	useEffect(() => {
		async function getFirstJoke() {
			let response = await fetch(URL);
			let jsonResponse = await response.json();
			setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
		}
		getFirstJoke();
	}, []);

	// state variable to use every time
	let [Joke, setJoke] = useState(getNewJoke);
	return (
		<div>
			<h3>Jokes</h3>
			<h2>{Joke.setup}</h2>
			<h2>{Joke.punchline}</h2>
			<button onClick={getNewJoke}>New Joke</button>
		</div>
	);
}
