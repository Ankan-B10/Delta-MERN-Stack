import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
	let [todos, setTodos] = useState([
		{ task: "Sample-task", id: uuidv4(), isDone: false },
	]);
	let [newTodo, setNewTodo] = useState("");

	let addNewTask = () => {
		setTodos((prevTodos) => {
			return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]; //...spread operator, new value
		});

		setNewTodo(""); // use for emptying the input
	};
	let updateTodoValue = (event) => {
		setNewTodo(event.target.value);
	};

	// delete todo button
	let delteTodo = (id) => {
		setTodos((prevTodos) => {
			// delete value from array we use => filter method
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	/// make all todo task uppercase
	let upperCaseAll = () => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				return { ...todo, task: todo.task.toUpperCase() };
			});
		});
	};

	// code for make one todo task uppercase
	let markAsDone = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isDone: true };
				} else {
					return todo;
				}
			});
		});
	};

	let markAllDone = () => {
		setTodos((prevTodos) => {
			return prevTodos.map((todo) => {
				return { ...todo, isDone: true };
			});
		});
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Add a Task"
				value={newTodo}
				onChange={updateTodoValue}></input>
			<br />
			<button onClick={addNewTask}>Add task</button>
			<br />
			<br />
			<br />

			<hr />
			<h4>Task List</h4>
			<ul>
				{/* for rander form of list we use => map mathod */}
				{todos.map((todo) => (
					<li key={todo.id}>
						<span
							style={
								todo.isDone
									? { textDecoration: "line-through", color: "green" }
									: {}
							}>
							{todo.task}
						</span>
						&nbsp; &nbsp; &nbsp;
						<button  style={{ backgroundColor: "red" }} onClick={() => delteTodo(todo.id)}>Delete</button>{" "}
						{/*()=>delteTodo(todo.id) for arrow function */}
						&nbsp; &nbsp;
						<button onClick={() => markAsDone(todo.id)}>Task Done</button>{" "}
					</li>
				))}
			</ul>
			<br />
			<button onClick={upperCaseAll}>Make Uppercase</button>
			<br />
			<br />
			<button style={{ backgroundColor: "green" }} onClick={markAllDone}>Mark all as Done</button>
		</div>
	);
}
