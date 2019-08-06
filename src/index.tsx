import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

require("dotenv").config();

store.dispatch({
  type: "UPDATE",
  payload: {
    ticker: "aapl",
    quantity: 45
  }
});

store.dispatch({
  type: "UPDATE",
  payload: {
    ticker: "berk",
    quantity: 300
  }
});

store.dispatch({
  type: "UPDATE",
  payload: {
    ticker: "fb",
    quantity: 300
  }
});

store.dispatch({
  type: "UPDATE",
  payload: {
    ticker: "aapl",
    quantity: 45
  }
});

store.dispatch({
  type: "UPDATE",
  payload: {
    ticker: "aapl",
    quantity: 45
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
