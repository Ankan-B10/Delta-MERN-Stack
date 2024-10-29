import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";
export default function WeatherApp() {
	const [weatherInfo, setWeatherInfo] = useState({
		city: "Delhi",
		temp: 30,
		temp_min: 25,
		temp_max: 35,
		humidity: 55,
		feelslike: 30,
		weather: "haze",
	});

	//rerender the weather data update
	let updateWeatherInfo = (newInfo) => {
		setWeatherInfo(newInfo);
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h2>Weather App</h2>
			<SearchBox updateWeatherInfo={updateWeatherInfo} />
			<InfoBox info={weatherInfo} />
		</div>
	);
}
