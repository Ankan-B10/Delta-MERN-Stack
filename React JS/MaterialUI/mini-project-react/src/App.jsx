import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';

import WeatherApp from "./WeatherApp.jsx";
function App() {
	// let handleClick = () => {
	// 	console.log("Button was clicked");
	// };

	return (
		<>
			{/* <h1>Material UI demo</h1>
			<Button variant="contained" onClick={handleClick}>
				Click Me
			</Button>
			<Button variant="contained" onClick={handleClick} disabled>
				Click Nothing
			</Button>
			<Button variant="outlined" color="error" onClick={handleClick}>
				Error
			</Button>
      <br /><br />
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}


      <WeatherApp />

		</>
	);
}
export default App;
