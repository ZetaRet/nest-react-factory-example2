import React, { useMemo, useState } from "react";
import { CommentView } from "./CommentView";
import { fetchApi } from "./helpers";
import { Link } from "react-router-dom";

export function TicketView({ ticketid }) {
	const [ticket, setTicket] = useState();
	const [ticketLoad, setTicketLoad] = useState();
	useMemo(async () => setTicket(await fetchApi("/api/tickets/" + ticketid, "GET")), [ticketid]);
	useMemo(async () => {
		if (ticket && ticket.board && ticket.column) {
			ticket.boardobj = await fetchApi("/api/boards/" + ticket.board, "GET");
			ticket.columnobj = await fetchApi("/api/boards/column/" + ticket.column, "GET");
			setTicketLoad(ticket);
		}
	}, ticket);

	var boardF, columnF;
	if (ticketLoad) {
		boardF = ticket.boardobj ? ticket.boardobj.title + "[" + ticket.board + "]" : ticket.board;
		columnF = ticket.columnobj ? ticket.columnobj.title + "[" + ticket.column + "]" : ticket.column;
	}
	return (
		<div>
			<h2>View Ticket</h2>
			<div className="ticket-view">
				<div>Id: {ticket ? ticket.id : "Loading"}</div>
				<div>Title: {ticket && ticket.title}</div>
				<div>Description: {ticket && ticket.description}</div>
				<div>Board: {ticket && boardF}</div>
				<div>Column: {ticket && columnF}</div>
				<div>Created At: {ticket && ticket.createdAt}</div>
				<div>Updated At: {ticket && ticket.updatedAt}</div>
				<div>
					<Link to={"/tickets/edit/" + ticketid} className="nav-btn">
						Edit Ticket
					</Link>
				</div>
			</div>
			<div className="comment-view">
				<div>
					<Link to={"/tickets/comment?ticketid=" + ticketid} className="nav-btn">
						Create Comment
					</Link>
				</div>
				<CommentView ticketid={ticketid} />
			</div>
		</div>
	);
}
