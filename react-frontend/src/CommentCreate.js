import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ticketActions } from "./slices";
import { fetchApi } from "./helpers";

export function CommentCreate() {
	const [searchParams] = useSearchParams();
	const ticketid = searchParams.get("ticketid");
	const [selectTicketId, setSelectTicketId] = useState(ticketid);
	const [ticket, setTicket] = useState();

	const formRef = useRef();
	const navigate = useNavigate();
	var tickets = useSelector((state) => state.ticket.tickets);
	const dispatch = useDispatch();
	useMemo(async () => setTicket(await fetchApi("/api/tickets/" + ticketid, "GET")), [ticketid]);
	useMemo(async () => {
		if (ticket) {
			dispatch(ticketActions.setTickets(await fetchApi("/api/tickets/board/" + ticket.board, "GET")));
			dispatch(ticketActions.setBoardId(ticket.board));
		}
	}, [ticket]);

	async function onSubmit(e) {
		e.preventDefault();
		let form = formRef.current;
		let rdata = {
			username: form.username.value,
			text: form.text.value,
			ticket: +form.ticket.value,
		};
		await fetchApi("/api/tickets/comment/create", "POST", rdata);
		navigate("/tickets/view/" + ticketid);
	}

	function onSelectChange() {
		setSelectTicketId(+formRef.current.ticket.value);
	}

	const selectDom = tickets.map((e) => (
		<option key={e.id} value={e.id}>
			{e.title} [{e.id}]
		</option>
	));

	return (
		<div>
			<h2>Create Comment</h2>
			<div className="comment-create">
				<form ref={formRef} className="form-create" onSubmit={onSubmit}>
					<input type="text" name="username" placeholder="Username" required />
					<br />
					<textarea type="text" name="text" placeholder="Text" required></textarea>
					<br />
					<select name="ticket" onChange={onSelectChange} value={selectTicketId}>
						{selectDom}
					</select>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}
