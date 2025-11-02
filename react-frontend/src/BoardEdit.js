import React, { useMemo, useRef, useState } from "react";
import { fetchApi } from "./helpers";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "./slices";
import { Link } from "react-router-dom";

export function BoardEdit({ boardid }) {
	const [board, setBoard] = useState(null);
	useMemo(async () => {
		const jdata = await fetchApi("/api/boards/" + boardid, "GET");
		let form = formRef.current;
		form.name.value = jdata.name;
		form.title.value = jdata.title;
		setSelectProjectId(jdata.project);
		setBoard(jdata);
	}, [boardid]);
	const formRef = useRef();
	var projects = useSelector((state) => state.project.projects);
	const dispatch = useDispatch();
	useMemo(async () => dispatch(projectActions.setProjects(await fetchApi("/api/projects", "GET"))), []);
	const projectid = board?.project || null;
	const [selectProjectId, setSelectProjectId] = useState(projectid);

	async function onSubmit(e) {
		e.preventDefault();
		let form = formRef.current;
		let rdata = {
			name: form.name.value,
			title: form.title.value,
			project: +form.project.value,
		};
		await fetchApi("/api/boards/" + boardid, "POST", rdata);
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
			<h2>Board Edit [{board && board.id}]</h2>
			<div className="board-edit">
				<div>
					<Link to={"/boards/view/" + boardid} className="nav-btn">
						View Board
					</Link>
				</div>
				<form ref={formRef} className="form-edit" onSubmit={onSubmit}>
					<input type="text" name="name" placeholder="Name" />
					<br />
					<input type="text" name="title" placeholder="Title" />
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
