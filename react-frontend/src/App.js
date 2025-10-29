import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useParams, useNavigate } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
};

const Projects = () => {
	return (
		<div>
			<h2>Projects</h2>
			<nav>
				<ul>
					<li>
						<Link to="create">Create Project</Link>
					</li>
					<li>
						<Link to="list">List Projects</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

const ProjectCreateWrapper = () => {
	return <div>Create Project</div>;
};

const ProjectListWrapper = () => {
	return <div>List Projects</div>;
};

const ProjectEditWrapper = () => {
	const { projectid } = useParams();

	return <div>Edit Project</div>;
};

const ProjectViewWrapper = () => {
	const { projectid } = useParams();

	return <div>View Project</div>;
};

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
					<Route path="/" element={<Home />} />
					<Route path="/projects/" element={<Projects />}>
						<Route path="create" element={<ProjectCreateWrapper />} />
						<Route path="list" element={<ProjectListWrapper />} />
						<Route path="edit/:projectid/" element={<ProjectEditWrapper />} />
						<Route path="view/:projectid/" element={<ProjectViewWrapper />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}
