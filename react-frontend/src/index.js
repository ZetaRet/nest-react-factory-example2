import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

window.bodyOnLoad = function () {
	const domNode = document.getElementById("root");
	const root = createRoot(domNode);

	root.render(<App />);
};
