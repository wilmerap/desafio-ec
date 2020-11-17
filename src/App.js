import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

// Paginas
import Suscripcion from "./pages/Suscripcion";
import Datos from "./pages/Datos";
import Confirmacion from "./pages/Confirmacion";

export default function  App() {
  const { Header, Footer, Content } = Layout;

  return (
      <Layout>
        <Header className="App-header">Mag.</Header>
        <Router>
          <Content className="Content-info">
                {/*<Redirect from="/" to="/suscripcion" />*/}
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
        <Footer className="App-footer"></Footer>
      </Layout>
  );
}