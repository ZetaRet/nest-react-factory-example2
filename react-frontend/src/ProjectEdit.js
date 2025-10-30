import React, { useMemo, useRef, useState } from "react";
import { fetchApi } from "./helpers";

export function ProjectEdit({ projectid }) {
	const [project, setProject] = useState(null);
	useMemo(async () => {
		const jdata = await fetchApi("/api/projects/" + projectid, "GET");
		let form = formRef.current;
		form.name.value = jdata.name;
		form.title.value = jdata.title;
		form.description.value = jdata.description;
		setProject(jdata);
	}, [projectid]);
	const formRef = useRef();

	async function onSubmit(e) {
		e.preventDefault();
		let form = formRef.current;
		let rdata = {
			name: form.name.value,
			title: form.title.value,
			description: form.description.value,
		};
		await fetchApi("/api/projects/" + projectid, "POST", rdata);
	}

	return (
		<div>
			<h2>Project Edit [{project && project.id}]</h2>
			<div className="project-edit">
				<form ref={formRef} className="form-edit" onSubmit={onSubmit}>
					<input type="text" name="name" placeholder="Name" />
					<br />
					<input type="text" name="title" placeholder="Title" />
					<br />
					<textarea name="description" placeholder="Description"></textarea>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
