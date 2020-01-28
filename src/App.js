import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routing/routing";
import { history } from "./routing/history";
import "./App.scss";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
