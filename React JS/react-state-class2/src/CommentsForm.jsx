import { useState } from "react";

export default function CommentsForm() {
	let [formData, setFormData] = useState({
		username: "",
		remarks: "",
		ratings: 5,
	});

	let handleinputChange = (event) => {
		setFormData((currData) => {
			return { ...currData, [event.target.name]: event.target.value };
		});
	};

	let handleSubmit = (event) => {
		console.log(formData);
		event.preventDefault();
		// for emptying the input / reset
		setFormData({
			username: "",
			remarks: "",
			ratings: 5,
		});
	}; 

	return (
		<div>
			<h4>Give a comment!</h4>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					placeholder="Username"
					value={formData.username}
					onChange={handleinputChange}
					id="username"
					name="username"
				/>
				<br />
				<br />
				<label htmlFor="remarks">Remarks</label>
				<textarea
					name="remarks"
					id="remarks"
					value={formData.remarks}
					placeholder="Add few Remarks"
					onChange={handleinputChange}>
					Remarks
				</textarea>
				<br />
				<br />
				<label htmlFor="ratings">Ratings</label>
				<input
					type="number"
					placeholder="Ratings"
					min={1}
					max={5}
					value={formData.ratings}
					onChange={handleinputChange}
					id="ratings"
					name="ratings"
				/>
				<br />
				<br />
				<button>Add comment</button>
			</form>
		</div>
	);
}
