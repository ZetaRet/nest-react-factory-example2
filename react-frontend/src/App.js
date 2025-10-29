import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useParams, useNavigate } from "react-router-dom";

export default function App() {
	return (
		<div>
			<h1>Board Management</h1>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/projects/">Projects</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					
				</Routes>
			</Router>
		</div>
	);
}
