import "./Login.css";
export default function Login() {
	return (
		<>
			<div className="loginForm">
				<h1>Form</h1>
				<input type="text" placeholder="Enter your Username" /> <br />
				<input
					type="password"
					name=""
					id=""
					placeholder="enter your password"
				/>
				<button>Login</button>
			</div>
		</>
	);
}
