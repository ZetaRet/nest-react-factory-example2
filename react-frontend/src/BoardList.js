import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "./helpers";
import { boardActions, projectActions } from "./slices";
import { Link } from "react-router-dom";

export function BoardList({ projectid }) {
	const boards = useSelector((state) => state.board.boards);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchApi("/api/boards/project/" + projectid, "GET", null, (jdata) => dispatch(boardActions.setBoards(jdata)));
		return () => {};
	}, [projectid]);

	var boardData = boards[projectid] || [];
	const boardsDom = boardData.map((e) => (
		<div key={e.id}>
			<Link to={"/boards/edit/" + e.id} className="edit-btn">
				Edit
			</Link>
			<span> </span>
			<Link to={"/boards/view/" + e.id} className="view-btn">
				{e.title} [{e.id}]
			</Link>
		</div>
	));
	return (
		<div>
			<h2>List Boards By Project</h2>
			<div className="boards-list">{boardsDom}</div>
		</div>
	);
}
