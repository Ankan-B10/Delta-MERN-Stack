import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function InfoBox({ info }) {
	const INIT_IMG =
		"https://images.unsplash.com/photo-1423209086112-cf2c8acd502f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	const HOT_URL =
		"https://media.istockphoto.com/id/926497236/photo/tropical-sea-in-summer.jpg?s=612x612&w=0&k=20&c=SgT--E-a5_UF4GPVnpC6r1IDtThuDiUHmtTbhHg5zJA=";
	const COLD_URL =
		"https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const RAIN_URL =
		"https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhaW4lMjBzYWVzb258ZW58MHx8MHx8fDA%3D";

	return (
		<div className="InfoBox">
			<Card sx={{ maxWidth: 345 }} className="cardBox">
				<CardMedia
					sx={{ height: 140 }}
					image={
						info.humidity > 70 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL
					}
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						<b>{info.city}</b> &nbsp;
						{info.humidity > 70 ? (
							<ThunderstormIcon></ThunderstormIcon>
						) : info.temp > 20 ? (
							<WbSunnyIcon></WbSunnyIcon>
						) : (
							<AcUnitIcon></AcUnitIcon>
						)}
					</Typography>
					<Typography
						variant="body2"
						sx={{ color: "text.secondary" }}
						component={"span"}>
						<div>Temperature = {info.temp}&deg;C</div>
						<div>Min Temperature = {info.temp_min}&deg;C</div>
						<div>Max Temperature = {info.temp_max}&deg;C</div>
						<div>Humidity = {info.humidity}%</div>
						<div>The weather Feels Like {info.feelslike}&deg;C</div>
						<div>
							Weather describe as <b>{info.weather}</b>
						</div>
					</Typography>
				</CardContent>
			</Card>
			<p style={{ textAlign: "center",  marginTop: "120px"}}>Made by AB &hearts; </p>
		</div>
	);
}
