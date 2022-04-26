import { createRoot } from "react-dom/client";

import App from "./App";

import "./App.scss";

const appContainer = document.getElementById("app");
const root = createRoot(appContainer);

root.render(<App />);
