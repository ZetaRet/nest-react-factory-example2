import React, { useMemo, useState } from "react";
import { fetchApi } from "./helpers";

export function ProjectView({ projectid }) {
	const [project, setProject] = useState(null);
	useMemo(async () => setProject(await fetchApi("/api/projects/" + projectid, "GET")), [projectid]);

	return (
		<div>
			<h2>Project View</h2>
			<div className="project-view">
				<div>Id: {project ? project.id : "Loading"}</div>
				<div>Name: {project && project.name}</div>
				<div>Title: {project && project.title}</div>
				<div>Description: {project && project.description}</div>
				<div>Created At: {project && project.createdAt}</div>
				<div>Updated At: {project && project.updatedAt}</div>
			</div>
		</div>
	);
}
