import React, { useMemo, useReducer, useRef, useState } from "react";
import { fetchApi } from "./helpers";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "./slices";
import { useSearchParams } from "react-router-dom";

export function ColumnCreate() {
	const [searchParams] = useSearchParams();
	const boardid = searchParams.get("boardid");
	const [selectBoardId, setSelectBoardId] = useState(boardid);
	const [board, boardDispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case "getBoard": {
					return action.payload;
				}
			}
		},
		{ id: boardid }
	);
	useMemo(
		async () => boardDispatch({ payload: await fetchApi("/api/boards/" + boardid, "GET"), type: "getBoard" }),
		[]
	);
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
		await fetchApi("/api/boards/column/create", "POST", rdata);
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
			<h2>Column Create</h2>
			<div className="column-create">
				<form ref={formRef} className="form-create" onSubmit={onSubmit}>
					<input type="text" name="name" placeholder="Name" required />
					<br />
					<input type="text" name="title" placeholder="Title" required />
					<br />
					<select name="board" onChange={onSelectChange} value={selectBoardId}>
						{selectDom}
					</select>
					<br />
					<input type="number" name="index" placeholder="Index" required />
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
