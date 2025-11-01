import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import { ProjectView } from "./ProjectView";
import { ProjectEdit } from "./ProjectEdit";
import { ProjectCreate } from "./ProjectCreate";
import { useSelector } from "react-redux";
import { BoardCreate } from "./BoardCreate";
import { BoardList } from "./BoardList";

export const ProjectContext = createContext();
export const BoardContext = createContext();

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
	return (
		<div>
			<ProjectCreate />
		</div>
	);
};

const ProjectListWrapper = () => {
	return (
		<div>
			<ProjectList />
		</div>
	);
};

const ProjectEditWrapper = () => {
	const { projectid } = useParams();

	return (
		<div>
			<ProjectEdit projectid={projectid} />
		</div>
	);
};

const ProjectViewWrapper = () => {
	const { projectid } = useParams();

	return (
		<div>
			<ProjectView projectid={projectid} />
		</div>
	);
};

const Boards = () => {
	return (
		<div>
			<h2>Boards</h2>
			<Outlet />
		</div>
	);
};

const BoardCreateWrapper = () => {
	return (
		<div>
			<BoardCreate />
		</div>
	);
};

const BoardListWrapper = () => {
	const { projectid } = useParams();

	return (
		<div>
			<BoardList projectid={projectid} />
		</div>
	);
};

const BoardEditWrapper = () => {
	const { boardid } = useParams();

	return <div>Edit Board</div>;
};

const BoardViewWrapper = () => {
	const { boardid } = useParams();

	return <div>View Board</div>;
};

const BoardColumnsViewWrapper = () => {
	const { boardid } = useParams();

	return <div>View Board Columns with Tickets</div>;
};

const ColumnCreateWrapper = () => {
	return <div>Create Column</div>;
};

const ColumnEditWrapper = () => {
	const { columnid } = useParams();

	return <div>Edit Column</div>;
};

const Tickets = () => {
	return (
		<div>
			<h2>Tickets</h2>
			<Outlet />
		</div>
	);
};

const TicketCreateWrapper = () => {
	return <div>Create Ticket</div>;
};

const TicketEditWrapper = () => {
	const { ticketid } = useParams();

	return <div>Edit Ticket</div>;
};

const CommentCreateWrapper = () => {
	return <div>Create Comment</div>;
};

const CommentEditWrapper = () => {
	const { commentid } = useParams();

	return <div>Edit Comment</div>;
};

function AppInner() {
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
						<Route path="edit/:projectid" element={<ProjectEditWrapper />} />
						<Route path="view/:projectid" element={<ProjectViewWrapper />} />
					</Route>
					<Route path="/boards/" element={<Boards />}>
						<Route path="create" element={<BoardCreateWrapper />} />
						<Route path="list/:projectid" element={<BoardListWrapper />} />
						<Route path="edit/:boardid" element={<BoardEditWrapper />} />
						<Route path="view/:boardid" element={<BoardViewWrapper />} />
						<Route path="view_columns/:boardid" element={<BoardColumnsViewWrapper />} />
						<Route path="create_column" element={<ColumnCreateWrapper />} />
						<Route path="edit_column/:columnid" element={<ColumnEditWrapper />} />
					</Route>
					<Route path="/tickets/" element={<Tickets />}>
						<Route path="create" element={<TicketCreateWrapper />} />
						<Route path="edit/:ticketid" element={<TicketEditWrapper />} />
						<Route path="comment" element={<CommentCreateWrapper />} />
						<Route path="edit_comment/:commentid" element={<CommentEditWrapper />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default function App() {
	const projectSelect = useSelector((state) => state.project.selected);
	const boardSelect = useSelector((state) => state.board.selected);

	return (
		<ProjectContext value={projectSelect}>
			<BoardContext value={boardSelect}>
				<AppInner />
			</BoardContext>
		</ProjectContext>
	);
}
