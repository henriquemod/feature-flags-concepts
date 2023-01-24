import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Exclusive } from "./usecase/exclusive";
import { Evolutive } from "./usecase/evolutive";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/exclusive",
    element: <Exclusive />
  },
  {
    path: "/evolutive",
    element: <Evolutive />
  },
  {
    path: "/",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
