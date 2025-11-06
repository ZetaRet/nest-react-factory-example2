import React, { useMemo, useRef, useState } from "react";
import { fetchApi } from "./helpers";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "./slices";
import { useSearchParams } from "react-router-dom";

export function BoardCreate() {
	const [searchParams] = useSearchParams();
	const projectid = searchParams.get("projectid");
	const [selectProjectId, setSelectProjectId] = useState(projectid);
	const formRef = useRef();
	const navigate = useNavigate();
	var projects = useSelector((state) => state.project.projects);
	const dispatch = useDispatch();
	useMemo(async () => dispatch(projectActions.setProjects(await fetchApi("/api/projects", "GET"))), []);

	async function onSubmit(e) {
		e.preventDefault();
		let form = formRef.current;
		let rdata = {
			name: form.name.value,
			title: form.title.value,
			project: +form.project.value,
		};
		let res = await fetchApi("/api/boards", "POST", rdata);
		navigate("/boards/view/" + res.id);
	}

	function onSelectChange() {
		setSelectProjectId(+formRef.current.project.value);
	}

	const selectDom = projects.map((e) => (
		<option key={e.id} value={e.id}>
			{e.title} [{e.id}]
		</option>
	));

	return (
		<div>
			<h2>Board Create</h2>
			<div className="board-create">
				<form ref={formRef} className="form-create" onSubmit={onSubmit}>
					<input type="text" name="name" placeholder="Name" required />
					<br />
					<input type="text" name="title" placeholder="Title" required />
					<br />
					<select name="project" onChange={onSelectChange} value={selectProjectId}>
						{selectDom}
					</select>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
