// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery.jsx";
// import Ticket from "./Ticket.jsx";
import { sum } from "./helper";
import Form from "./Form.jsx";
import CommentsForm from "./CommentsForm.jsx";
import Counter from "./Counter.jsx";
import Joker from "./Joker.jsx";

function App() {

	let winCondition = (ticket) => {
		return sum(ticket) === 15;
	};

	return (
		<>
			{/* <TodoList /> */}
			{/* <Lottery /> */}
			{/* <TicketNum num={5} />
			<TicketNum num={4} />
			<TicketNum num={7} /> */}
			{/* <Ticket ticket={[0, 1, 2]} />
			<Ticket ticket={[4, 5, 7, 9, 8]} /> */}
			{/* <Lottery n={3} winningSum={15} winCondition={winCondition} /> */}
			
			{/* <Form /> */}
			{/* <CommentsForm /> */}

			{/* <Counter /> */}

			<Joker />

		</>
	);
}

export default App;
