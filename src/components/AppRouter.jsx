import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MM00 from "../router/MM00";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={MM00} />
    </Router>
  );
};

export default AppRouter;
