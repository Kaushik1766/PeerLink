import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import PageRouter from "./PageRouter.jsx";
import App from "./pages/Login.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PageRouter />
  </Provider>
);
