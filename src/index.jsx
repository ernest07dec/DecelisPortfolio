import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Router
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/socket/SocketProvider";
// ROOT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // FOR DEVELOPMENT OPTIMIZATION
  <React.StrictMode>
    {/* ROUTES FUNCTIONALITY */}
    <BrowserRouter>
      {/* SOCKETIO CONTEXT */}
      <SocketProvider>
        {/* APP */}
        <App />
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
