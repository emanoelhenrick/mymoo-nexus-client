import { globalStyles } from "./styles/global"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { invoke } from '@tauri-apps/api/tauri'

globalStyles()

setTimeout(() => {
  invoke('close_splashscreen')
}, 2000)


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
