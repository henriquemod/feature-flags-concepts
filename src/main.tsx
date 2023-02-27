import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Evolutive from "./usecase/evolutive";
import { Exclusive } from "./usecase/exclusive";
import { ExclusiveEvolutive } from "./usecase/exclusive-evolutive";

const router = createBrowserRouter([
  {
    path: "/exclusive",
    element: <Exclusive />,
  },
  {
    path: "/evolutive",
    element: <Evolutive />,
  },
  {
    path: "/exclusive-evolutive",
    element: <ExclusiveEvolutive />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
