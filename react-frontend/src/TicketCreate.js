import React, { useMemo, useRef, useState } from "react";
import { fetchApi } from "./helpers";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { boardActions } from "./slices";

export function TicketCreate({ boardid }) {
	const [selectBoardId, setSelectBoardId] = useState(boardid);
	const [board, setBoard] = useState({ id: boardid });
	const [columns, setColumns] = useState();
	useMemo(async () => setBoard(await fetchApi("/api/boards/" + boardid, "GET")), [boardid]);
	const formRef = useRef();
	const navigate = useNavigate();
	var boards = useSelector((state) => state.board.boards);
	const dispatch = useDispatch();
	useMemo(async () => {
		if (board.project)
			dispatch(boardActions.setBoards(await fetchApi("/api/boards/project/" + board.project, "GET")));
	}, [board]);
	useMemo(
		async () => setColumns(await fetchApi("/api/boards/column_board/" + selectBoardId, "GET")),
		[selectBoardId]
	);

	var projectBoards = boards[board.project] || [];

	async function onSubmit(e) {
		e.preventDefault();
		let form = formRef.current;
		let rdata = {
			title: form.title.value,
			description: form.description.value,
			board: +form.board.value,
			column: +form.column.value,
		};
		const jdata = await fetchApi("/api/tickets", "POST", rdata);
		navigate("/tickets/view/" + jdata.id);
	}

	function onSelectChange() {
		setSelectBoardId(+formRef.current.board.value);
	}

	const selectDom = projectBoards.map((e) => (
		<option key={e.id} value={e.id}>
			{e.title} [{e.id}]
		</option>
	));
	const columnOptions = (columns || []).map((e) => (
		<option key={e.id} value={e.id}>
			{e.title} [{e.id}]
		</option>
	));

	return (
		<div>
			<h2>Ticket Create</h2>
			<div className="ticket-create">
				<form ref={formRef} className="form-create" onSubmit={onSubmit}>
					<input type="text" name="title" placeholder="Title" />
					<br />
					<textarea name="description" placeholder="Description"></textarea>
					<br />
					<select name="board" onChange={onSelectChange} value={selectBoardId}>
						{selectDom}
					</select>
					<br />
					<select name="column">{columnOptions}</select>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
