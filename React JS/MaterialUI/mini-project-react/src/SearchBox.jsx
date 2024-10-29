import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateWeatherInfo }) {
	let [city, setCity] = useState("");
	let [error, setError] = useState(false);

	const API_URL = "https://api.openweathermap.org/data/2.5/weather";
	const API_KEY = "f40805f4ad85923e13253e92f76d4844";

	let getWeatherInfo = async () => {
		try {
			let response = await fetch(
				`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
			);
			let jsonResponse = await response.json();
			let result = {
				city: city,
				temp: jsonResponse.main.temp,
				temp_min: jsonResponse.main.temp_min,
				temp_max: jsonResponse.main.temp_max,
				humidity: jsonResponse.main.humidity,
				feelslike: jsonResponse.main.feels_like,
				weather: jsonResponse.weather[0].description,
			};
			console.log(result);
			return result;
		} catch (error) {
			throw error;
		}
	};

	let handleChange = (event) => {
		setCity(event.target.value);
	};

	let handleSubmit = async (event) => {
		try {
			event.preventDefault();
			console.log(city);
			setCity(""); // reset the input
			let newInfo = await getWeatherInfo();
			updateWeatherInfo(newInfo);
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div className="SearchBox">
			<form action="" onSubmit={handleSubmit}>
				<TextField
					id="city"
					label="City Name"
					variant="outlined"
					required
					value={city}
					onChange={handleChange}
				/>
				<br />
				<br />
				<Button variant="contained" type="submit">
					Search
				</Button>

				{/* error check */}
				{error && <h3 style={{ color: "red" }}>City not found !</h3>}
			</form>
		</div>
	);
}
