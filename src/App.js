import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

// Redux
import store from "./store";
import { Provider } from "react-redux";

// Paginas
import Suscripcion from "./pages/Suscripcion";
import Datos from "./pages/Datos";
import Confirmacion from "./pages/Confirmacion";

export default function  App() {
  const { Header, Content } = Layout;

  return (
    <Provider store={store}>
      <Layout>
        <Header className="App-header">Mag.</Header>
        <Router>
          <Content className="Content-info">
                <Redirect from="/" to="/suscripcion" />
                <Switch>
                  <Route path="/suscripcion" exact={true}>
                   <Suscripcion />
                  </Route>
                  <Route path="/datos" exact={true}>
                    <Datos />
                  </Route>
                  <Route path="/confirmacion" exact={true}>
                    <Confirmacion />
                  </Route>
                </Switch>
          </Content>
        </Router>
      </Layout>
    </Provider>
  );
}