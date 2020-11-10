import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

// Paginas
import Suscripcion from "./pages/Suscripcion";
import Datos from "./pages/Datos";
import Confirmacion from "./pages/Confirmacion";

function App() {
  const { Content } = Layout;

  return (
      <Layout>
        <Router>
          <Content>
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
  );
}

export default App;
