import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "./src/store";
import Router from "./src/router";

const state = window.__STATE__;

const App = () => (
  <Provider store={getStore(state)}>
    <BrowserRouter>
      {Router.map((router) => (
        <Route {...router} />
      ))}
    </BrowserRouter>
  </Provider>
);
hydrate(<App />, document.getElementById("app"));
