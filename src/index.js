import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

// Params: element we want to render, where do we want to add it
render(<Router />, document.querySelector("#main"));
