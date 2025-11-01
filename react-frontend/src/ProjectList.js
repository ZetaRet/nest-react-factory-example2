import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "./helpers";
import { projectActions } from "./slices";
import { Link } from "react-router-dom";

export function ProjectList() {
	const projects = useSelector((state) => state.project.projects);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchApi("/api/projects", "GET", null, (jdata) => dispatch(projectActions.setProjects(jdata)));
		return () => {};
	}, []);

	const projectsDom = projects.map((e) => (
		<div key={e.id}>
			<Link to={"/projects/edit/" + e.id} className="edit-btn">
				Edit
			</Link>
			<span> </span>
			<Link to={"/projects/view/" + e.id} className="view-btn">
				{e.title} [{e.id}]
			</Link>
			<span> </span>
			<Link to={"/boards/create?projectid=" + e.id}>Create Board</Link>
			<span> </span>
			<Link to={"/boards/list/" + e.id}>View Boards</Link>
		</div>
	));
	return (
		<div>
			<h2>List Projects</h2>
			<div className="projects-list">{projectsDom}</div>
		</div>
	);
}
