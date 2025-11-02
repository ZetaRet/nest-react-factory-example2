import React, { useMemo, useReducer, useRef, useState } from "react";
import { fetchApi } from "./helpers";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "./slices";

export function ColumnEdit({ columnid }) {
	const [column, setColumn] = useState();
	useMemo(async () => {
		const jdata = await fetchApi("/api/boards/column/" + columnid, "GET");
		let form = formRef.current;
		form.name.value = jdata.name;
		form.title.value = jdata.title;
		form.index.value = jdata.index;
		setSelectBoardId(jdata.board);
		setColumn(jdata);
	}, [columnid]);
	const [selectBoardId, setSelectBoardId] = useState();
	const [board, boardDispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case "getBoard": {
					return action.payload;
				}
			}
		},
		{ id: selectBoardId }
	);
	useMemo(async () => {
		if (selectBoardId)
			boardDispatch({ payload: await fetchApi("/api/boards/" + selectBoardId), type: "getBoard" }, "GET");
	}, [selectBoardId]);
	const formRef = useRef();
	const navigate = useNavigate();
	var boards = useSelector((state) => state.board.boards);
	const dispatch = useDispatch();
	useMemo(async () => {
		if (board.project)
			dispatch(boardActions.setBoards(await fetchApi("/api/boards/project/" + board.project, "GET")));
	}, [board]);

	var projectBoards = boards[board.project] || [];

	async function onSubmit(e) {
		e.preventDefault();
		let form = formRef.current;
		let rdata = {
			name: form.name.value,
			title: form.title.value,
			board: +form.board.value,
			index: +form.index.value,
		};
		await fetchApi("/api/boards/column/" + columnid, "POST", rdata);
		navigate("/boards/view_columns/" + rdata.board);
	}

	function onSelectChange() {
		setSelectBoardId(+formRef.current.board.value);
	}

	const selectDom = projectBoards.map((e) => (
		<option key={e.id} value={e.id}>
			{e.title} [{e.id}]
		</option>
	));

	return (
		<div>
			<h2>Column Edit</h2>
			<div className="column-edit">
				<form ref={formRef} className="form-edit" onSubmit={onSubmit}>
					<input type="text" name="name" placeholder="Name" />
					<br />
					<input type="text" name="title" placeholder="Title" />
					<br />
					<select name="board" onChange={onSelectChange} value={selectBoardId}>
						{selectDom}
					</select>
					<br />
					<input type="number" name="index" placeholder="Index" />
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
