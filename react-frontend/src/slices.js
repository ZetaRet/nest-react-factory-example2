import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const projectSlice = createSlice({
	name: "project",
	initialState: { projects: [] },
	reducers: {
		setProjects: (state, action) => {
			state.projects = action.payload;
		},
	},
});

export const projectActions = projectSlice.actions;
