import React, { useMemo, useState } from "react";
import { fetchApi } from "./helpers";
import { Link } from "react-router-dom";

export function CommentView({ ticketid }) {
	const [comments, setComments] = useState();
	useMemo(async () => setComments(await fetchApi("/api/tickets/comment_ticket/" + ticketid, "GET")), [ticketid]);

	const commentsDom = (comments || []).map((e) => (
		<div key={e.id} className="comment-item">
			<div>Id: [{e.id}]</div>
			<div>
				<Link to={"/tickets/edit_comment/" + e.id} className="nav-btn">
					Edit Comment
				</Link>
			</div>
			<div>
				<b>Username:</b> {e.username}
			</div>
			<div>
				<b>Text:</b>
			</div>
			<div>{e.text}</div>
		</div>
	));
	return (
		<div>
			<h2>Comments</h2>
			<div>{commentsDom}</div>
		</div>
	);
}
