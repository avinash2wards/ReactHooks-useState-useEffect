import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import {
	Button,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	CircularProgress,
	AppBar,
	Toolbar,
	Typography,
	Grid
} from "@material-ui/core";

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
					window.setTimeout(function() {
						setUsers(data);
					}, 2000);
				});

			return function() {};
		},
		[setUsers]
	);

	return (
		<>
			<AppBar position="fixed" color="primary">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						React Hooks - useState & useEffect
					</Typography>
				</Toolbar>
			</AppBar>
			<Grid container style={{ marginTop: "56px" }}>
				<Grid item md={4} />

				<Grid item md={4}>
					{users.length === 0 ? (
						<CircularProgress color="secondary" />
					) : (
						<List>
							{users.map(function(user) {
								return (
									<ListItem>
										<ListItemAvatar>
											<Avatar alt={user.id}> {user.id}</Avatar>
										</ListItemAvatar>
										<ListItemText>{user.name}</ListItemText>
									</ListItem>
								);
							})}
						</List>
					)}
				</Grid>
				<Grid item md={4} />
			</Grid>
		</>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
