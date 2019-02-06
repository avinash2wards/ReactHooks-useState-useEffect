import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
	const [users, setUsers] = useState([]);
	useEffect(
		function() {
			fetch("https://jsonplaceholder.typicode.com/users")
				.then(function(response) {
					return response.json();
				})
				.then(function(data) {
					setUsers(data);
				});

			return function() {};
		},
		[setUsers]
	);

	return (
		<div className="App">
			<h1>jsonplaceholder users</h1>
			<h2>React Hooks - useState & useEffect</h2>
			{users.length === 0 ? (
				<div>Loading</div>
			) : (
				users.map(function(user) {
					return (
						<div className={"card"}>
							{user.id}. {user.name}
						</div>
					);
				})
			)}
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
