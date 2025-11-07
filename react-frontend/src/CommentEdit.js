import React, { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ticketActions } from "./slices";
import { fetchApi } from "./helpers";

export function CommentEdit({ commentid }) {
	const [selectTicketId, setSelectTicketId] = useState();
	const [ticket, setTicket] = useState();
	const [comment, setComment] = useState();
	const formRef = useRef();
	const navigate = useNavigate();
	var tickets = useSelector((state) => state.ticket.tickets);
	const dispatch = useDispatch();
	useMemo(async () => {
		let jdata = await fetchApi("/api/tickets/comment/" + commentid, "GET");
		setComment(jdata);
		let form = formRef.current;
		form.username.value = jdata.username;
		form.text.value = jdata.text;
	}, [commentid]);
	useMemo(async () => {
		if (comment) {
			setTicket(await fetchApi("/api/tickets/" + comment.ticket, "GET"));
			setSelectTicketId(comment.ticket);
		}
	}, [comment]);
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
		await fetchApi("/api/tickets/comment/" + commentid, "POST", rdata);
		navigate("/tickets/view/" + ticket.id);
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
			<h2>Edit Comment [{commentid}]</h2>
			<div className="comment-edit">
				<form ref={formRef} className="form-edit" onSubmit={onSubmit}>
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
