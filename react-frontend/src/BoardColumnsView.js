import React, { useMemo, useState } from "react";
import { fetchApi } from "./helpers";
import { useDispatch, useSelector } from "react-redux";
import { ticketActions } from "./slices";
import { Link } from "react-router-dom";

export function BoardColumnsView({ boardid }) {
	const [board, setBoard] = useState();
	useMemo(async () => {
		const jdata = await fetchApi("/api/boards/" + boardid, "GET");
		setBoard(jdata);
	}, [boardid]);
	const [project, setProject] = useState();
	const [columns, setColumns] = useState();
	const ticketsByColumn = useSelector((state) => state.ticket.ticketsByColumn);
	const dispatch = useDispatch();
	useMemo(async () => {
		if (board) {
			setProject(await fetchApi("/api/projects/" + board.project, "GET"));
			const ticketj = await fetchApi("/api/tickets/board/" + board.id, "GET");
			dispatch(ticketActions.setTickets(ticketj));
			dispatch(ticketActions.setBoardId(board.id));
			setColumns(await fetchApi("/api/boards/column_board/" + board.id, "GET"));
		}
	}, [board]);

	const columnDom = (columns || []).map((e) => (
		<div key={e.id} className="board-column">
			<div>
				<b>{e.title}</b>
			</div>
			<div>
				<BoardColumn columnid={e.id} ticketData={ticketsByColumn[e.id]} />
			</div>
		</div>
	));

	return (
		<div>
			<h2>View Board Columns with Tickets</h2>
			<div className="project-div">
				<b>Project [{project && project.id}]</b>
				<br />
				{project && project.title}
				<br />
				{project && project.description}
			</div>
			<div className="board-div">
				<b>Board Title:</b> {board && board.title} [{board && board.id}]
			</div>
			<div className="board-columns">{columnDom}</div>
		</div>
	);
}

export function BoardColumn({ columnid, ticketData }) {
	const ticketsDom = (ticketData || []).map((e) => (
		<div key={e.id} className="column-ticket">
			<div>
				<b>Title:</b> {e.title}
			</div>
			<div>
				<Link to={"/tickets/view/" + e.id} className="nav-btn">
					View Ticket
				</Link>
			</div>
		</div>
	));
	return (
		<div>
			<div>Tickets in Column [{columnid}]</div>
			<div className="tickets">{ticketsDom}</div>
		</div>
	);
}
