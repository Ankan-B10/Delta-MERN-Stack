import { useState } from "react";

export default function Form() {
	//state variable
	// let [fullName, setFullName] = useState("");
	// let [userName, setUserName] = useState("");

	let [formData, setFormData] = useState({
		fullName: "",
		userName: "",
		password: "",
	});

	// let handleNameChange = (event) => {
	// 	// console.log(event.target.value);
	// 	setFullName(event.target.value); // newValue set
	// };
	// let handleUserChange = (event) => {
	// 	setUserName(event.target.value); // newValue set
	// };

	//// common method for handler method
	let handleinputChange = (event) => {
		// let fieldName = event.target.name;
		// let fieldValue = event.target.value;

		// to assign new value to object
		setFormData((currData) => {
			// currData[fieldName] = fieldValue; // [] use for computed property name
			return { ...currData, [event.target.name]: event.target.value }; // use event for more sorted way
		});
	};

	let handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		// use for emptying the input
		setFormData({
			fullName: "",
			userName: "",
			password: "",
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="fullName">Full Name</label>
			<input
				type="text"
				name=""
				id="fullName"
				placeholder="Enter your name"
				value={formData.fullName}
				onChange={handleinputChange}
				name="fullName"
			/>
			<br />
			<br />
			<label htmlFor="userName">User Name</label>
			<input
				type="text"
				name=""
				id="userName"
				placeholder="Enter Username"
				value={formData.userName}
				onChange={handleinputChange}
				name="userName"
			/>
			{/* password */}
			<br />
			<br />
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name=""
				id="password"
				placeholder="Enter password"
				value={formData.password}
				onChange={handleinputChange}
				name="password"
			/>
			<br />
			<br />
			<button>Submit</button>
		</form>
	);
}
