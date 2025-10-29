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
			<Link to={"/projects/view/" + e.id}>
				{e.title} [{e.id}]
			</Link>
		</div>
	));
	return (
		<div>
			<h2>List Projects</h2>
			<div class="projects-list">{projectsDom}</div>
		</div>
	);
}
