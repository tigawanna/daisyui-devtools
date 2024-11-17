import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";
import "@/view-transition/angled-transition.css"
import "@/view-transition/flip-transition.css"
import "@/view-transition/slides-transition.css"
import "@/view-transition/vertical-transition.css"
import "@/view-transition/wipe-transition.css"
import "daisyui-devtools/style.css"
import "./styles.css"


const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
