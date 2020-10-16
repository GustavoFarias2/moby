import React, { useState, createElement } from "react";

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined
} from "@ant-design/icons";

import Sidebar from "../components/Sidebar";

import Dashboard from "../pages/app/Dashboard";

import Client from "../pages/app/Client";
import ClientForm from "../pages/app/Client/ClientForm";

import Property from "../pages/app/Property";

const { Header, Content } = Layout;

const AuthRoutes: React.FC = () => {

  const [collapseSidebar, setCollapseSidebar] = useState(false);

  return (

    <Layout style={{ height: "100%" }}>

      <Sidebar
        collapseSidebar={collapseSidebar}
        setCollapseSidebar={setCollapseSidebar}
      />

      <Layout>

        <Header style={{ backgroundColor: "#f1f1f1" }}>

          {createElement(collapseSidebar ? DoubleRightOutlined : DoubleLeftOutlined, {
            style: { fontSize: 22, marginLeft: '-25px' },
            onClick: () => setCollapseSidebar(!collapseSidebar)
          })}

        </Header>

        <Content style={{ margin: 30 }}>
          <Switch>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/client">
              <Client />
            </Route>
            <Route path="/client_form">
              <ClientForm />
            </Route>

            <Route path="/property">
              <Property />
            </Route>

            <Redirect from="/" to="/dashboard" />

          </Switch>
        </Content>

      </Layout>
    </Layout>

  )

}

export default AuthRoutes;
