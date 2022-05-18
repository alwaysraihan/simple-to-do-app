import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const app = document.getElementById("root");
const root = createRoot(app);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
