import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../routers/layouts/Header";
import Content from "../routers/layouts/Content";
import Footer from "../routers/layouts/Footer";
import AdminHeader from "../routers/admin/adminLayout/AdminHeader";
import AdminContent from "../routers/admin/adminLayout/AdminContent";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/admin" component={AdminHeader} />
      <Route path="/admin" component={AdminContent} />

      <Route path="/" component={Header} />
      <Route path="/" component={Content} />
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default AppRouter;
