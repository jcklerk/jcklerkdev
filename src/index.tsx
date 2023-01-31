import "./index.css";
import reportWebVitals from "./reportWebVitals";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  ReactRouter,
  RootRoute,
} from "@tanstack/react-router";
import { PagePath } from "./ts/routes/web";
import Nav from "./ts/components/Nav";
import Foot from "./ts/components/Footer";
import { HelmetProvider } from "react-helmet-async";
import { constants } from "fs/promises";

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Nav />
      <div className=" max-w-screen-2xl mx-auto">
        <Outlet />
      </div>
    </>
  ),
});

const routeTree = rootRoute.addChildren(PagePath);

const router = new ReactRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

const rootElement = document.getElementById("root")!;
//rootElement.classList.add("dark");
if (!rootElement.innerHTML) {
  const body = document.getElementsByTagName("body")[0];
  body.classList.add("bg-slate-100");
  body.classList.add("dark:bg-slate-700");
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <HelmetProvider>
        <div className="min-h-screen flex flex-col">
          <App />
          <Foot />
        </div>
      </HelmetProvider>
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
