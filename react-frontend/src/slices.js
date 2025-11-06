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
	initialState: { boards: {}, selected: null, columns: [] },
	reducers: {
		setBoards: (state, action) => {
			action.payload.forEach((e) => {
				if (!state.boards[e.project]) state.boards[e.project] = [];
				let found = state.boards[e.project].find((ee) => ee.id == e.id);
				if (!found) state.boards[e.project].push(e);
				else Object.assign(found, e);
			});
		},
		selectBoard: (state, action) => {
			state.selected = action.payload;
		},
		setColumns: (state, action) => {
			state.columns = action.payload;
		},
	},
});

export const boardActions = boardSlice.actions;

export const ticketSlice = createSlice({
	name: "ticket",
	initialState: { tickets: [], ticketsByColumn: {}, boardid: null },
	reducers: {
		setBoardId: (state, action) => {
			state.boardid = action.payload.boardid;
		},
		setTickets: (state, action) => {
			state.tickets = action.payload;
			state.ticketsByColumn = {};
			state.tickets.forEach((e) => {
				if (!state.ticketsByColumn[e.column]) state.ticketsByColumn[e.column] = [];
				state.ticketsByColumn[e.column].push(e);
			});
		},
	},
});

export const ticketActions = ticketSlice.actions;
