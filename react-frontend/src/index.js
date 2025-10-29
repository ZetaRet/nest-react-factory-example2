import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import { projectSlice } from "./slices";

const store = configureStore({
	reducer: {
		project: projectSlice,
	},
});

window.bodyOnLoad = function () {
	const domNode = document.getElementById("root");
	const root = createRoot(domNode);

	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
};
