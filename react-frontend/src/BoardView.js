import React, { useMemo, useState } from "react";
import { fetchApi } from "./helpers";
import { Link } from "react-router-dom";

export function BoardView({ boardid }) {
	const [board, setBoard] = useState(null);
	useMemo(async () => setBoard(await fetchApi("/api/boards/" + boardid, "GET")), [boardid]);

	return (
		<div>
			<h2>Board View</h2>
			<div className="board-view">
				<div>Id: {board ? board.id : "Loading"}</div>
				<div>Name: {board && board.name}</div>
				<div>Title: {board && board.title}</div>
				<div>Project: {board && board.project}</div>
				<div>Created At: {board && board.createdAt}</div>
				<div>Updated At: {board && board.updatedAt}</div>
				<div>
					<Link to={"/boards/edit/" + boardid} className="nav-btn">
						Edit Board
					</Link>
					<br />
					<Link to={board && board.project ? "/boards/list/" + board.project : ""} className="nav-btn">
						List Boards by Project
					</Link>
				</div>
			</div>
		</div>
	);
}
