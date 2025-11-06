import React, { useRef } from "react";
import { fetchApi } from "./helpers";
import { useNavigate } from "react-router";

export function ProjectCreate() {
	const formRef = useRef();
	const navigate = useNavigate();

	async function onSubmit(e) {
		e.preventDefault();
		let form = formRef.current;
		let rdata = {
			name: form.name.value,
			title: form.title.value,
			description: form.description.value,
		};
		let res = await fetchApi("/api/projects", "POST", rdata);
		navigate("/projects/view/" + res.id);
	}

	return (
		<div>
			<h2>Project Create</h2>
			<div className="project-create">
				<form ref={formRef} className="form-create" onSubmit={onSubmit}>
					<input type="text" name="name" placeholder="Name" required />
					<br />
					<input type="text" name="title" placeholder="Title" required />
					<br />
					<textarea name="description" placeholder="Description" required></textarea>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
