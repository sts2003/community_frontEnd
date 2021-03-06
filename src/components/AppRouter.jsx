import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../routers/layouts/Header";
import Content from "../routers/layouts/Content";
import Footer from "../routers/layouts/Footer";
import AdminMain from "../routers/admin/adminLayout/AdminMain";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AdminMain} />
      </Switch>

      <Route path="/" component={Header} />
      <Route path="/" component={Content} />
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default AppRouter;
