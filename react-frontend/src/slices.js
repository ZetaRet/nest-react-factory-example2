import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
	name: "project",
	initialState: { projects: [], selected: null },
	reducers: {
		setProjects: (state, action) => {
			state.projects = action.payload;
		},
		selectProject: (state, action) => {
			state.selected = action.payload;
		},
	},
});

export const projectActions = projectSlice.actions;

export const boardSlice = createSlice({
	name: "board",
	initialState: { boards: {}, selected: null },
	reducers: {
		setBoards: (state, action) => {
			action.payload.forEach((e) => {
				if (!state.boards[e.project]) state.boards[e.project] = [];
				state.boards[e.project].push(e);
			});
		},
		selectBoard: (state, action) => {
			state.selected = action.payload;
		},
	},
});

export const boardActions = boardSlice.actions;
