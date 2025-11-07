import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "./helpers";
import { boardActions } from "./slices";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export function TicketEdit({ ticketid }) {
	const [ticket, setTicket] = useState();
	useMemo(async () => {
		const jdata = await fetchApi("/api/tickets/" + ticketid, "GET");
		setTicket(jdata);
		let form = formRef.current;
		form.title.value = jdata.title;
		form.description.value = jdata.description;
		setSelectBoardId(jdata.board);
		setSelectColumnId(jdata.column);
	}, [ticketid]);
	const [selectBoardId, setSelectBoardId] = useState();
	const [selectColumnId, setSelectColumnId] = useState();
	const [board, setBoard] = useState({ id: null });
	const [columns, setColumns] = useState();
	useMemo(async () => {
		if (ticket && ticket.board) setBoard(await fetchApi("/api/boards/" + ticket.board, "GET"));
	}, [ticket]);
	const formRef = useRef();
	var boards = useSelector((state) => state.board.boards);
	const dispatch = useDispatch();
	useMemo(async () => {
		if (board && board.project)
			dispatch(boardActions.setBoards(await fetchApi("/api/boards/project/" + board.project, "GET")));
	}, [board]);
	useMemo(async () => {
		if (selectBoardId) setColumns(await fetchApi("/api/boards/column_board/" + selectBoardId, "GET"));
	}, [selectBoardId]);
	const navigate = useNavigate();

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
		await fetchApi("/api/tickets/" + ticketid, "POST", rdata);
		navigate("/tickets/view/" + ticketid);
	}

	function onSelectChange() {
		setSelectBoardId(+formRef.current.board.value);
	}
	function onColumnChange() {
		setSelectColumnId(+formRef.current.column.value);
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
			<h2>Edit Ticket [{ticketid}]</h2>
			<div className="ticket-edit">
				<div>
					<Link to={"/tickets/view/" + ticketid} className="nav-btn">
						View Ticket
					</Link>
				</div>
				<form ref={formRef} className="form-create" onSubmit={onSubmit}>
					<input type="text" name="title" placeholder="Title" required />
					<br />
					<textarea name="description" placeholder="Description" required></textarea>
					<br />
					<select name="board" onChange={onSelectChange} value={selectBoardId}>
						{selectDom}
					</select>
					<br />
					<select name="column" onChange={onColumnChange} value={selectColumnId}>
						{columnOptions}
					</select>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
