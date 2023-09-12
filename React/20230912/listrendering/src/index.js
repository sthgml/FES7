import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import Counter from "./components/counter";
import App4 from "./App4";
import App5 from "./App5";
import NavBar from "./App6";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
<>
    {/* <App />
    <App2 />
    <App3 />
    <Counter /> */}
    <NavBar />
</>
);
