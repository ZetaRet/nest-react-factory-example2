import React, { useMemo, useState } from "react";
import { CommentView } from "./CommentView";
import { fetchApi } from "./helpers";
import { Link } from "react-router-dom";

export function TicketView({ ticketid }) {
	const [ticket, setTicket] = useState(null);
	useMemo(async () => setTicket(await fetchApi("/api/tickets/" + ticketid, "GET")), [ticketid]);

	return (
		<div>
			<h2>View Ticket</h2>
			<div className="ticket-view">
				<div>Id: {ticket ? ticket.id : "Loading"}</div>
				<div>Title: {ticket && ticket.title}</div>
				<div>Description: {ticket && ticket.description}</div>
				<div>Board: {ticket && ticket.board}</div>
				<div>Column: {ticket && ticket.column}</div>
				<div>Created At: {ticket && ticket.createdAt}</div>
				<div>Updated At: {ticket && ticket.updatedAt}</div>
				<div>
					<Link to={"/tickets/edit/" + ticketid} className="nav-btn">
						Edit Ticket
					</Link>
				</div>
			</div>
			<div className="comment-view">
				<CommentView ticketid={ticketid} />
			</div>
		</div>
	);
}
