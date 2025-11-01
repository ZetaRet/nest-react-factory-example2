import React, { useMemo, useState } from "react";
import { fetchApi } from "./helpers";

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
			</div>
		</div>
	);
}
